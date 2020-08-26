import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleIncidenciaPageRoutingModule } from './detalle-incidencia-routing.module';

import { DetalleIncidenciaPage } from './detalle-incidencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleIncidenciaPageRoutingModule
  ],
  declarations: [DetalleIncidenciaPage]
})
export class DetalleIncidenciaPageModule {}
