import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { finalitzatsPage } from './finalitzats.page';

const routes: Routes = [
  {
    path: '',
    component: finalitzatsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class finalitzatsPageRoutingModule {}
