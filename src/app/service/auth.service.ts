import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../model/User';
import { Observable, of } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { environment } from 'src/environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>(`${environment.server}/usuarios/logar`, userLogin)
  }

  cadastrar(user: User): Observable<User> {
    return this.http.post<User>(`${environment.server}/usuarios/cadastrar`, user)
  }

  atualizar(user: User): Observable<User> {
    return this.http.put<User>(`${environment.server}/usuarios/cadastrar`, user)
  }

  getByIdUser(id: number): Observable<User> {
    return this.http.get<User>(`${environment.server}/usuarios/${id}`)
  }

  logado() {
    let ok: boolean = false

    if (environment.token != '') {
      ok = true
    }

    return ok
  }
   adm(){
    let ok: boolean = false

    if (environment.tipo == 'adm') {
      ok = true
    }

    return ok
  } 
}
