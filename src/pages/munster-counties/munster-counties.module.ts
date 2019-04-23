import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MunsterCountiesPage } from './munster-counties';

@NgModule({
  declarations: [
    MunsterCountiesPage,
  ],
  imports: [
    IonicPageModule.forChild(MunsterCountiesPage),
  ],
})
export class MunsterCountiesPageModule {}
