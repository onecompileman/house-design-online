import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditHouseDesignPage } from './edit-house-design.page';

describe('EditHouseDesignPage', () => {
  let component: EditHouseDesignPage;
  let fixture: ComponentFixture<EditHouseDesignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHouseDesignPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditHouseDesignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
