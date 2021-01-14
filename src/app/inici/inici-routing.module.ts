import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { iniciPage } from './inici.page';

const routes: Routes = [
  {
    path: '',
    component: iniciPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class iniciPageRoutingModule {}
