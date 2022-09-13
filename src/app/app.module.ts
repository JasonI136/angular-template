import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { NavbarTopComponent } from 'src/components/navbar-top/navbar-top.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
