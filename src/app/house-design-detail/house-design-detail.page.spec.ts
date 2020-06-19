import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HouseDesignDetailPage } from './house-design-detail.page';

describe('HouseDesignDetailPage', () => {
  let component: HouseDesignDetailPage;
  let fixture: ComponentFixture<HouseDesignDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseDesignDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HouseDesignDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
