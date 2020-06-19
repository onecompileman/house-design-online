import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyHouseDesignListPage } from './my-house-design-list.page';

describe('MyHouseDesignListPage', () => {
  let component: MyHouseDesignListPage;
  let fixture: ComponentFixture<MyHouseDesignListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHouseDesignListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyHouseDesignListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
