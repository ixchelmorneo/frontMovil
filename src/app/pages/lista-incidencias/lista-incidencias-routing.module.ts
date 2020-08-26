import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaIncidenciasPage } from './lista-incidencias.page';

const routes: Routes = [
  {
    path: '',
    component: ListaIncidenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaIncidenciasPageRoutingModule {}
