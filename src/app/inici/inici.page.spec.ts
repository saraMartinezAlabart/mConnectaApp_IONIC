import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { iniciPage } from './inici.page';

describe('iniciPage', () => {
  let component: iniciPage;
  let fixture: ComponentFixture<iniciPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [iniciPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(iniciPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
