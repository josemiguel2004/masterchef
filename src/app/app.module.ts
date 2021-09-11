import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { HomeComponent } from './template/home/home.component';
import { JaquicnComponent } from './episodios/jaquicn/jaquicn.component';
import { FogacaComponent } from './episodios/fogaca/fogaca.component';
import { PaolaComponent } from './episodios/paola/paola.component';
import { PeDeFavaComponent } from './episodios/pe-de-fava/pe-de-fava.component';
import { ChefComponent } from './episodios/chef/chef.component';
import { PratosDesastrososComponent } from './episodios/pratos-desastrosos/pratos-desastrosos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    JaquicnComponent,
    FogacaComponent,
    PaolaComponent,
    PeDeFavaComponent,
    ChefComponent,
    PratosDesastrososComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
