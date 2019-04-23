import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConnachtCountiesPage } from './connacht-counties';

@NgModule({
  declarations: [
    ConnachtCountiesPage,
  ],
  imports: [
    IonicPageModule.forChild(ConnachtCountiesPage),
  ],
})
export class ConnachtCountiesPageModule {}
