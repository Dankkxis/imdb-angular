import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title: string = "";

  constructor(private stService: StorageService, private route: Router, private movieService: MovieService) { }

  ngOnInit(): void {
  }

  findByTitle() {
    console.log(this.title);
    this.movieService.findByTitle(this.title).subscribe(data => {
      console.log(data);
    })
  }

  logout() {
    this.stService.deleteSesion();
    this.route.navigate(['login']);
  }

}
