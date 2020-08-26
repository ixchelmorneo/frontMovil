import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleIncidenciaPage } from './detalle-incidencia.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleIncidenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleIncidenciaPageRoutingModule {}
