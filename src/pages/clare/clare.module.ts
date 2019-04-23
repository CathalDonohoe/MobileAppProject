import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClarePage } from './clare';

@NgModule({
  declarations: [
    ClarePage,
  ],
  imports: [
    IonicPageModule.forChild(ClarePage),
  ],
})
export class ClarePageModule {}
