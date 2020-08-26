import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionRegistroPageRoutingModule } from './opcion-registro-routing.module';

import { OpcionRegistroPage } from './opcion-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionRegistroPageRoutingModule
  ],
  declarations: [OpcionRegistroPage]
})
export class OpcionRegistroPageModule {}
