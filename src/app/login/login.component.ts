import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div>
      <input [(ngModel)]="username" type="text" placeholder="Username">
      <br/>
      <input [(ngModel)]="password" type="password" placeholder="Password">
      <br/>
      <button (click)="onClick(usernameRef.value,passwordRef.value)">Login</button>
    </div>
  `,
  styles: [
    'input { border: 1px solid #ccc; }',
  ],
})
export class LoginComponent implements OnInit {

  constructor(@Inject('auth') private service) { }

  ngOnInit() {
  }

  username: "";
  password: "";

  onClick(username,password) {
    console.log(
      this.service.loginWithCredentials(this.username, this.password)
    );
  }
}
