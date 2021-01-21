import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CMAVariusPage } from './cmavarius.page';

describe('CMAVariusPage', () => {
  let component: CMAVariusPage;
  let fixture: ComponentFixture<CMAVariusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CMAVariusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CMAVariusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
