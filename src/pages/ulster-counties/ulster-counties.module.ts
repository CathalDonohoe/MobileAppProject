import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UlsterCountiesPage } from './ulster-counties';

@NgModule({
  declarations: [
    UlsterCountiesPage,
  ],
  imports: [
    IonicPageModule.forChild(UlsterCountiesPage),
  ],
})
export class UlsterCountiesPageModule {}
