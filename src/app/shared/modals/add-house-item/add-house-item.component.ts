import { Component, OnInit, Input } from '@angular/core';
import { HouseItemType } from '../../enums/house-item-type.enum';
import { getImagesByType } from 'src/app/core/utils/get-images.util';
import { HouseItem } from '../../models/house-item.model';

@Component({
  selector: 'app-add-house-item',
  templateUrl: './add-house-item.component.html',
  styleUrls: ['./add-house-item.component.scss'],
})
export class AddHouseItemComponent implements OnInit {
  @Input() onSelectItem: Function;

  houseItemType = HouseItemType;
  activeHouseItemType = HouseItemType.APPLIANCES;
  houseItems: HouseItem[] = [];

  constructor() {}

  ngOnInit() {
    this.getHouseItems();
  }

  getHouseItems() {
    this.houseItems = getImagesByType(this.activeHouseItemType);
  }
}
