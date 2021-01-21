import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { iniciPage } from './inici.page';
import { actiusPage } from '../actius/actius.page';
import { CMAVariusPage } from '../cmavarius/cmavarius.page';

const routes: Routes = [
  {
    path: '',
    component: iniciPage,
  },
  {
    path: 'tabs/actius',
    component: actiusPage,
  },
  {
    path: 'cmavarius',
    component: CMAVariusPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class iniciPageRoutingModule {}
