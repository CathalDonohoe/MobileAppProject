import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MayoPage } from './mayo';

@NgModule({
  declarations: [
    MayoPage,
  ],
  imports: [
    IonicPageModule.forChild(MayoPage),
  ],
})
export class MayoPageModule {}
