import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LimerickPage } from './limerick';

@NgModule({
  declarations: [
    LimerickPage,
  ],
  imports: [
    IonicPageModule.forChild(LimerickPage),
  ],
})
export class LimerickPageModule {}
