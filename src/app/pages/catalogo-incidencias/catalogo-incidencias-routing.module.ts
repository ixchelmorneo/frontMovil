import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogoIncidenciasPage } from './catalogo-incidencias.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogoIncidenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogoIncidenciasPageRoutingModule {}
