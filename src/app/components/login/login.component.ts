import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private route: Router, private stService: StorageService) { }

  ngOnInit(): void {
  }

  login() {
    const admin = { username: this.username, password: this.password };
    this.loginService.login(admin).subscribe(data => {
      console.log(data);
      this.stService.createSession(data);
      this.route.navigate(['home']);
    });
  }
}
