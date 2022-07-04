import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForcastService } from './forcast.service';
import { HttpClientModule } from '@angular/common/http';
import { GooglePlaceModule } from './ngx-google-places-autocomplete/ngx-google-places-autocomplete';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GooglePlaceModule
  ],
  providers: [
    ForcastService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
