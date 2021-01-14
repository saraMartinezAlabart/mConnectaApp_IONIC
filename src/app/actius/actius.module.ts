import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { actiusPage } from './actius.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { actiusPageRoutingModule } from './actius-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    actiusPageRoutingModule
  ],
  declarations: [actiusPage]
})
export class actiusPageModule {}
