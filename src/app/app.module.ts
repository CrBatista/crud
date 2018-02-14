import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountryComponent } from './components/country/country.component';
import { CountryContainerComponent } from './components/country-container/country-container.component';
import { CountryService } from './services/country.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountryContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
