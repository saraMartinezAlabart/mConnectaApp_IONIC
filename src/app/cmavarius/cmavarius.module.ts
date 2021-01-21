import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CMAVariusPageRoutingModule } from './cmavarius-routing.module';

import { CMAVariusPage } from './cmavarius.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CMAVariusPageRoutingModule
  ],
  declarations: [CMAVariusPage]
})
export class CMAVariusPageModule {}
