import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroIncidenciaPageRoutingModule } from './registro-incidencia-routing.module';

import { RegistroIncidenciaPage } from './registro-incidencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroIncidenciaPageRoutingModule
  ],
  declarations: [RegistroIncidenciaPage]
})
export class RegistroIncidenciaPageModule {}
