import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoscommonPage } from './roscommon';

@NgModule({
  declarations: [
    RoscommonPage,
  ],
  imports: [
    IonicPageModule.forChild(RoscommonPage),
  ],
})
export class RoscommonPageModule {}
