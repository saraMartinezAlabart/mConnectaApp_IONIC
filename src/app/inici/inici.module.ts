import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { iniciPage } from './inici.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { iniciPageRoutingModule } from './inici-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    iniciPageRoutingModule
  ],
  declarations: [iniciPage]
})
export class iniciPageModule {}
