import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inici',
        loadChildren: () => import('../inici/inici.module').then(m => m.iniciPageModule)
      },
      {
        path: 'actius',
        loadChildren: () => import('../actius/actius.module').then(m => m.actiusPageModule)
      },
      {
        path: 'finalitzats',
        loadChildren: () => import('../finalitzats/finalitzats.module').then(m => m.finalitzatsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/inici',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/inici',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
