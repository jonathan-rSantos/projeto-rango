import { PostagemService } from './../service/postagem.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  tema: Tema = new Tema()
  postagem: Postagem = new Postagem()
  listaTemas: Tema []
  idTema: number
  nomeTema: string
  listasPostagens: Postagem[]
  tituloPost: string
  user: User = new User()
  idUser = environment.id

key = 'data'
reverse = true

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService,
    private alertas: AlertasService
  ){}
  
  ngOnInit() {

    if(environment.token == ''){
      this.router.navigate(['/home'])
    }

    this.getAllTemas ()
    this.getAllPostagens()
  }

  getAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[])=>  {
      this.listaTemas = resp   
      console.log('temas: funcionei')
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp:Tema)=>{
      this.tema = resp
    })
  }
  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) =>{
      this.listasPostagens = resp 
    })
  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: User) =>{
      this.user = resp
    })
  }
  

  teste(){
    console.log('funcionei')
  }
  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.user.id = this.idUser
    this.postagem.usuario = this.user
    console.log(this.postagem)
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.alertas.showAlertSuccess('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })
  }

  findByTituloPostagem(){
    
    if(this.tituloPost == ''){
      this.getAllPostagens()
    } else{
      this.postagemService.getbyTituloPostagem(this.tituloPost).subscribe((resp: Postagem[])=>{
        this.listasPostagens = resp
      })
    }
    
  }

  findByNomeTema(){
    if(this.nomeTema == ''){
      this.getAllTemas()
    } else{
      this.temaService.getByNomeTema(this.nomeTema).subscribe((resp: Tema[])=> {
        this.listaTemas = resp
      })
    }
  }
}

