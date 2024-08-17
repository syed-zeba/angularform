import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoursesComponent } from './courses/courses.component';
import { ProtocolComponent } from './protocol/protocol.component';
import { LayerComponent } from './layer/layer.component';
import { AlgoComponent } from './algo/algo.component';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    CoursesComponent,
    ProtocolComponent,
    LayerComponent,
    AlgoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
