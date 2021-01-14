import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { actiusPage } from './actius.page';

describe('actiusPage', () => {
  let component: actiusPage;
  let fixture: ComponentFixture<actiusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [actiusPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(actiusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
