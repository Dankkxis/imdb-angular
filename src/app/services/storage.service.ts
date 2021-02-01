import { Injectable } from '@angular/core';
import { Session } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  createSession(sesion: Session) {
    console.log(sesion.user);
    sessionStorage.setItem('token', sesion.token);
    sessionStorage.setItem('user', JSON.stringify(sesion.user));
  }
  
  deleteSesion() {
    sessionStorage.clear()
  }

  isAuth() {
    if(sessionStorage.getItem('token')) {
      console.log('Estoy logeado');
      return true
    } else {
      console.log('No Estoy logeado');
      return false;
    }
  }
}
