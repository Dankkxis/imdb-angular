import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {
  movie: Movie = new Movie();

  constructor(private movieServices: MovieService) {}

  ngOnInit(): void {
    this.searchMovie();
  }
  saveMovie() {
    this.movieServices.saveMovie(this.movie).subscribe(
      (resp) => {
        console.log(resp);
        this.movie = resp;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  searchMovie() {
    // this.movieServices.searchMovie(sessionStorage.getItem('id')).subscribe(
    this.movieServices.searchMovie('453').subscribe(
      (resp) => {
        console.log(resp);
        this.movie = resp;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}