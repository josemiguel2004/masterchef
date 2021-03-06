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
import { ServicoComponent } from './episodios/servico/servico.component';
import { RafaVsWillianComponent } from './episodios/rafa-vs-willian/rafa-vs-willian.component';
import { Final2018Component } from './episodios/final2018/final2018.component';
import { Pergunta01Component } from './perguntas/pergunta01/pergunta01.component';
import { Pergunta02Component } from './perguntas/pergunta02/pergunta02.component';
import { IncorretaComponent } from './respostas/incorreta/incorreta.component';
import { Pergunta03Component } from './perguntas/pergunta03/pergunta03.component';
import { Pergunta04Component } from './perguntas/pergunta04/pergunta04.component';
import { Pergunta05Component } from './perguntas/pergunta05/pergunta05.component';
import { Correta01Component } from './corretas/correta01/correta01.component';
import { Correta02Component } from './corretas/correta02/correta02.component';
import { Correta03Component } from './corretas/correta03/correta03.component';
import { Correta04Component } from './corretas/correta04/correta04.component';
import { Correta05Component } from './corretas/correta05/correta05.component';

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
    PratosDesastrososComponent,
    ServicoComponent,
    RafaVsWillianComponent,
    Final2018Component,
    Pergunta01Component,
    Pergunta02Component,
    IncorretaComponent,
    Pergunta03Component,
    Pergunta04Component,
    Pergunta05Component,
    Correta01Component,
    Correta02Component,
    Correta03Component,
    Correta04Component,
    Correta05Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
