import { environment } from './../../environments/environment.prod';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../model/UserLogin';
import { Router } from '@angular/router';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private auth: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit (){
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.userLogin).subscribe((resp:UserLogin)=> { 
      this.userLogin= resp

      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.foto = this.userLogin.foto
      environment.id = this.userLogin.id
      environment.tipo = this.userLogin.tipo
      localStorage.setItem('token', this.userLogin.token)
      localStorage.setItem('foto', this.userLogin.foto)


      this.router.navigate(['/inicio'])
      }, erro => { 
        if (erro.status==500){
          this.alertas.showAlertDanger('Usuario ou senha estão incorretas')
        }
      
    } )
  }
   
 


}
