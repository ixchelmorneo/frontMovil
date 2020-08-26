import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaIncidenciasPageRoutingModule } from './lista-incidencias-routing.module';

import { ListaIncidenciasPage } from './lista-incidencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaIncidenciasPageRoutingModule
  ],
  declarations: [ListaIncidenciasPage]
})
export class ListaIncidenciasPageModule {}
