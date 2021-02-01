import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  base = environment.UrlMovieDB;

  constructor(private http: HttpClient ) { }

  findByTitle(movie: any): Observable<any> {
    return this.http.get<Movie>(`${this.base}/imdb/bytitle`, {
      params: new HttpParams().set('nombrePelicula', movie)
    });
  }
}
