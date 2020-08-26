import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogoIncidenciasPageRoutingModule } from './catalogo-incidencias-routing.module';

import { CatalogoIncidenciasPage } from './catalogo-incidencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogoIncidenciasPageRoutingModule
  ],
  declarations: [CatalogoIncidenciasPage]
})
export class CatalogoIncidenciasPageModule {}
