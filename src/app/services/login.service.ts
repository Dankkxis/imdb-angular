import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { adminLogin, Session } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  base = environment.UrlAdminDB;

  constructor(private http: HttpClient) { }

  login(admin: adminLogin): Observable<Session> {  
    return this.http.post<Session>(`${this.base}/login`, admin)
  }
}
