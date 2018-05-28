import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import {FormsModule} from '@angular/forms';
import { DisplaydetailsComponent } from './displaydetails/displaydetails.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HomeComponent,
    NavComponent,
    DisplaydetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
