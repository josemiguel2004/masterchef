
import { Pergunta02Component } from './perguntas/pergunta02/pergunta02.component';
import { IncorretaComponent } from './respostas/incorreta/incorreta.component';
import { Final2018Component } from './episodios/final2018/final2018.component';
import { RafaVsWillianComponent } from './episodios/rafa-vs-willian/rafa-vs-willian.component';
import { ServicoComponent } from './episodios/servico/servico.component';
import { PratosDesastrososComponent } from './episodios/pratos-desastrosos/pratos-desastrosos.component';
import { ChefComponent } from './episodios/chef/chef.component';
import { PeDeFavaComponent } from './episodios/pe-de-fava/pe-de-fava.component';
import { PaolaComponent } from './episodios/paola/paola.component';
import { FogacaComponent } from './episodios/fogaca/fogaca.component';
import { HomeComponent } from './template/home/home.component';
import { JaquicnComponent } from './episodios/jaquicn/jaquicn.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pergunta01Component } from './perguntas/pergunta01/pergunta01.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'jaquicn',component:JaquicnComponent},
  {path:'fogaca',component:FogacaComponent},
  {path:'paola',component:PaolaComponent},
  {path:'pe-de-fava',component:PeDeFavaComponent},
  {path:'chef',component:ChefComponent},
  {path:'pratos-desastrosos',component:PratosDesastrososComponent},
  {path:'servico',component:ServicoComponent},
  {path:'rafa-vs-willian',component:RafaVsWillianComponent},
  {path:'final2018',component:Final2018Component},
  {path:'pergunta01',component:Pergunta01Component},
  {path:'incorreta',component:IncorretaComponent},
  {path:'pergunta02',component:Pergunta02Component},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
