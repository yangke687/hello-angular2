import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div>
      <input #usernameRef type="text" placeholder="Username">
      <br/>
      <input #passwordRef type="password" placeholder="Password">
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

  onClick(username,password) {
    console.log(
      this.service.loginWithCredentials(username, password)
    );
  }
}
