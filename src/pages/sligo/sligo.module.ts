import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SligoPage } from './sligo';

@NgModule({
  declarations: [
    SligoPage,
  ],
  imports: [
    IonicPageModule.forChild(SligoPage),
  ],
})
export class SligoPageModule {}
