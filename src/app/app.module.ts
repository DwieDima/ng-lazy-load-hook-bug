import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {
  Attributes,
  IntersectionObserverHooks,
  LAZYLOAD_IMAGE_HOOKS,
} from 'ng-lazyload-image';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@Injectable()
class LazyLoadImageHooks extends IntersectionObserverHooks {
  public constructor() {
    super();
  }

  public setLoadedImage(imagePath: string, attributes: Attributes): void {
    console.log('setLoadedImage');
    attributes.element.classList.add('animated-img');
    super.setLoadedImage(imagePath, attributes);
  }

  public finally(attributes: Attributes): void {
    setTimeout(() => {
      console.log('finally');
      attributes.element.classList.remove('animated-img');
      super.finally(attributes);
    }, 3000);
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({ mode: 'ios' }),
    AppRoutingModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LAZYLOAD_IMAGE_HOOKS, useClass: LazyLoadImageHooks },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
