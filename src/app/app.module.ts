import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { HeaderComponent } from './header/header.component';
import {footercomponent} from './footer.component';
import { NevigationComponent } from './nevigation/nevigation.component';
import { AppRoutingModules,routingcomponent } from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HeaderComponent,
    footercomponent,
    NevigationComponent,
    routingcomponent,
     
       
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModules,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
