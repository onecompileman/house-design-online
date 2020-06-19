import {
  Component,
  OnInit,
  AfterViewInit,
  HostListener,
  OnDestroy,
} from '@angular/core';
import * as PIXI from 'pixi.js';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import {
  ModalController,
  AlertController,
  ToastController,
} from '@ionic/angular';
import { AddHouseItemComponent } from '../shared/modals/add-house-item/add-house-item.component';
import { HouseItem } from '../shared/models/house-item.model';

import { cloneDeep } from 'lodash';
import { HouseService } from '../core/services/house.service';
import { AuthService } from '../core/services/auth.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { User } from '../shared/models/user.model';
import { Router } from '@angular/router';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  UP_ARROW = 38,
  DOWN_ARROW = 40,
}

@Component({
  selector: 'app-create-house-design',
  templateUrl: './create-house-design.page.html',
  styleUrls: ['./create-house-design.page.scss'],
})
export class CreateHouseDesignPage implements OnInit, AfterViewInit, OnDestroy {
  houseForm: FormGroup;

  houseItems;

  activeItem: any;

  user: User;

  app: any;
  // Loading states
  isCreating: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private alertController: AlertController,
    private houseService: HouseService,
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.initForm();
    this.getCurrentUser();
  }

  ngAfterViewInit() {
    this.initCanvas();
  }

  ngOnDestroy() {}

  get name(): AbstractControl {
    return this.houseForm.get('name');
  }

  get description(): AbstractControl {
    return this.houseForm.get('description');
  }

  saveActiveItem() {
    this.activeItem.alpha = 1;
    this.activeItem = null;
  }

  deleteActiveItem() {
    this.app.stage.removeChild(this.activeItem);
    this.activeItem = null;
  }

  moveActiveItemToTop() {
    this.activeItem.zIndex = this.app.stage.children.length;
  }

  moveActiveItemToBottom() {
    this.activeItem.zIndex = 0;
  }

  @HostListener('window:keydown', ['$event'])
  moveActiveItem(event) {
    if (this.activeItem) {
      if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
        event.preventDefault();
        this.activeItem.data.position.x = ++this.activeItem.x;
      }

      if (event.keyCode === KEY_CODE.LEFT_ARROW) {
        event.preventDefault();

        this.activeItem.data.position.x = --this.activeItem.x;
      }
      if (event.keyCode === KEY_CODE.UP_ARROW) {
        event.preventDefault();

        this.activeItem.data.position.y = --this.activeItem.y;
      }

      if (event.keyCode === KEY_CODE.DOWN_ARROW) {
        event.preventDefault();

        this.activeItem.data.position.y = ++this.activeItem.y;
      }
    }
  }

  backToList() {
    this.router.navigate(['/houses']);
  }

  async createHouse() {
    if (this.app.stage.children.length && this.houseForm.valid) {
      const thumbnailURL = await this.houseService.uploadSketchThumbnail(
        document
          .querySelector('#createHouseContainer')
          .querySelector('canvas')
          .toDataURL()
      );

      const items = this.app.stage.children.map((i) => i.data);

      const house = {
        ...this.houseForm.value,
        owner: this.user,
        thumbnailURL,
        createdAt: new Date(),
        items,
      };

      this.isCreating = true;

      this.houseService.create(house).then(async () => {
        const toast = await this.toastController.create({
          message: 'Your sketch has been created successfully',
          duration: 2000,
        });

        toast.present();

        this.backToList();
      });
    }
  }

  async reset() {
    const alerts = this.alertController.create({
      header: 'Are you sure?',
      message: 'You are trying to reset your canvas',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Confirm',
          cssClass: 'danger',
          handler: () => {
            while (this.app.stage.children[0]) {
              this.app.stage.removeChild(this.app.children[0]);
            }
          },
        },
      ],
    });

    (await alerts).present();
  }

  async addHouseItem() {
    const modal = await this.modalController.create({
      component: AddHouseItemComponent,
      cssClass: 'house-modal',
      componentProps: {
        onSelectItem: async (houseItem) => {
          const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'How many to add?',
            message: `<img src="${houseItem.path}">`,
            inputs: [
              {
                name: 'count',
                type: 'number',
                placeholder: '',
              },
            ],
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {},
              },
              {
                text: 'Add',
                handler: (alertData) => {
                  this.addHouseItemToCanvas(houseItem, +alertData.count);
                  modal.dismiss();
                },
              },
            ],
          });

          await alert.present();
        },
      },
    });
    return await modal.present();
  }

  private initCanvas() {
    PIXI.settings.SORTABLE_CHILDREN = true;

    this.app = new PIXI.Application({
      backgroundColor: 0x444444,
      preserveDrawingBuffer: true,
      height: 650,
      width: 1200,
    });
    const canvasContainer = document.querySelector('#createHouseContainer');
    canvasContainer.innerHTML = '';
    canvasContainer.appendChild(this.app.view);

    const tileTexture = PIXI.Texture.from('assets/images/tile.png');

    tileTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
  }

  private addHouseItemToCanvas(houseItem: HouseItem, count = 1) {
    const texture = PIXI.Texture.from(houseItem.path);
    texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

    for (let i = 0; i < count; i++) {
      const item = new PIXI.Sprite(texture);

      item.interactive = true;

      item.buttonMode = true;
      item.anchor.set(0.5);
      item.scale.set(0.5);
      item['data'] = cloneDeep(houseItem);

      console.log(item);

      item
        .on('pointerdown', (event) => this.onDragStart(event, item))
        .on('pointerup', () => this.onDragEnd(item))
        .on('pointerupoutside', () => this.onDragEnd(item))
        .on('pointermove', () => this.onDragMove(item));

      item.x = this.app.screen.width / 2;
      item.y = this.app.screen.height / 2;

      this.app.stage.addChild(item);
    }
  }

  private onDragStart(event, item) {
    item.data1 = event.data;
    item.alpha = 0.5;
    item.dragging = true;
  }

  private onDragEnd(item) {
    item.dragging = false;
    item.data1 = null;
    if (this.activeItem) {
      this.activeItem.alpha = 1;
    }
    this.activeItem = item;
  }

  private onDragMove(item) {
    if (item.dragging) {
      const newPosition = item.data1.getLocalPosition(item.parent);
      item.data.position.x = item.x = newPosition.x;
      item.data.position.y = item.y = newPosition.y;
    }
  }

  private initForm() {
    this.houseForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(50)]],
      description: [
        null,
        [
          Validators.minLength(10),
          Validators.required,
          Validators.maxLength(200),
        ],
      ],
    });
  }

  private getCurrentUser() {
    this.authService.user$.pipe(untilDestroyed(this)).subscribe((user) => {
      this.user = user;
    });
  }
}
