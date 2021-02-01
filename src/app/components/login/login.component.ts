import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login() {
    const admin = { username: this.username, password: this.password };
    this.loginService.login(admin).subscribe(data => {
      console.log(data);
    });
  }

}
