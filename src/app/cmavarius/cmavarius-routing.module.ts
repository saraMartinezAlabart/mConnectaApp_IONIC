import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CMAVariusPage } from './cmavarius.page';

const routes: Routes = [
  {
    path: '/tabs/inici/cmavarius',
    component: CMAVariusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CMAVariusPageRoutingModule {}
