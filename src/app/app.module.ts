import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { EntrarComponent } from './entrar/entrar.component';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TemaComponent } from './tema/tema.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { HomeComponent } from './home/home.component';
import { AlertasComponent } from './alertas/alertas.component';
import { OrderModule } from 'ngx-order-pipe';
import { DesenvolvedoresComponent } from './desenvolvedores/desenvolvedores.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    InicioComponent,
    MenuComponent,
    RodapeComponent,
    SobreComponent,
    ContatoComponent,
    EntrarComponent,
    TemaComponent,
    TemaDeleteComponent,
    TemaEditComponent,
    PostagemEditComponent,
    PostagemDeleteComponent,
    UserEditComponent,
    HomeComponent,
    AlertasComponent,
    DesenvolvedoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
