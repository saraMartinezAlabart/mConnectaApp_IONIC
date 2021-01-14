import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { finalitzatsPage } from './finalitzats.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { finalitzatsPageRoutingModule } from './finalitzats-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: finalitzatsPage }]),
    finalitzatsPageRoutingModule,
  ],
  declarations: [finalitzatsPage]
})
export class finalitzatsPageModule {}
