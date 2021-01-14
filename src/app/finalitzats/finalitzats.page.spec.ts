import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { finalitzatsPage } from './finalitzats.page';

describe('finalitzatsPage', () => {
  let component: finalitzatsPage;
  let fixture: ComponentFixture<finalitzatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [finalitzatsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(finalitzatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
