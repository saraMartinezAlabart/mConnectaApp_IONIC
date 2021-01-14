import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { actiusPage } from './actius.page';

const routes: Routes = [
  {
    path: '',
    component: actiusPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class actiusPageRoutingModule {}
