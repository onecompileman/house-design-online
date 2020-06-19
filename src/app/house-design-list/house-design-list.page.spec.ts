import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HouseDesignListPage } from './house-design-list.page';

describe('HouseDesignListPage', () => {
  let component: HouseDesignListPage;
  let fixture: ComponentFixture<HouseDesignListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseDesignListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HouseDesignListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
