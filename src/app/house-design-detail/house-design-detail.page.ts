import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { House } from '../shared/models/house.model';
import { HouseService } from '../core/services/house.service';

@Component({
  selector: 'app-house-design-detail',
  templateUrl: './house-design-detail.page.html',
  styleUrls: ['./house-design-detail.page.scss'],
})
export class HouseDesignDetailPage implements OnInit {
  house: House;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private houseService: HouseService
  ) {}

  ngOnInit() {
    this.getHouse();
  }

  backToList() {
    this.router.navigate(['/houses']);
  }

  private getHouse() {
    this.houseService
      .getSketch(this.route.snapshot.params.id)
      .subscribe((house) => (this.house = house));
  }
}
