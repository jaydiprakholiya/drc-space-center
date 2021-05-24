import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { HeaderComponent } from './header/header.component';
import {footercomponent} from './footer.component';
import { NevigationComponent } from './nevigation/nevigation.component';
import { AppRoutingModules,routingcomponent } from "./app-routing.module";
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HeaderComponent,
    footercomponent,
    NevigationComponent,
    routingcomponent,
    NotFoundComponent,
     
       
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModules,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
