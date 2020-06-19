import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateHouseDesignPage } from './create-house-design.page';

describe('CreateHouseDesignPage', () => {
  let component: CreateHouseDesignPage;
  let fixture: ComponentFixture<CreateHouseDesignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHouseDesignPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateHouseDesignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
