import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildPageRoutingModule } from './child-routing.module';

import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ChildPage } from './child.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildPageRoutingModule,
    LazyLoadImageModule,
  ],
  declarations: [ChildPage],
})
export class ChildPageModule {}
