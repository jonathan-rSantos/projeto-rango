import { TemaComponent } from './tema/tema.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContatoComponent } from './contato/contato.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},  /* adicionar tela principal (entrar ou login) */
  {path: 'home', component: HomeComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'entrar', component: EntrarComponent},
  {path: 'tema', component: TemaComponent},
  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'tema-delete/:id', component: TemaDeleteComponent},
  {path: 'postagem-edit/:id', component: PostagemEditComponent},
  {path: 'user-edit/:id', component: UserEditComponent},
  {path: 'postagem-delete/:id', component: PostagemDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
