import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KildarePage } from './kildare';

@NgModule({
  declarations: [
    KildarePage,
  ],
  imports: [
    IonicPageModule.forChild(KildarePage),
  ],
})
export class KildarePageModule {}
