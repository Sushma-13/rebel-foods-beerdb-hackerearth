import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BeerBrandService } from './services/beer-brand.service';
import { BeerComponent } from './pages/beer/beer.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, BeerComponent, ProductCardComponent],
  imports: [BrowserModule, HttpClientModule, HttpClientJsonpModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [BeerBrandService],
  bootstrap: [AppComponent],
})
export class AppModule {}
