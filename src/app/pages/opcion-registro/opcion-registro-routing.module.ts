import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcionRegistroPage } from './opcion-registro.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionRegistroPageRoutingModule {}
