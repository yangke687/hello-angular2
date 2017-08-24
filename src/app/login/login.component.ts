import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <form 
      #formRef="ngForm"
      (ngSubmit)="onSubmit(formRef.value)"
    >
    <fieldset ngModelGroup="login">
      <input 
        required
        minlength="3"
        name="username"
        [(ngModel)]="username" 
        type="text" 
        placeholder="Username"
        #usernameRef="ngModel"
      />
      <br/>

      {{usernameRef.valid}}<br/>
      {{usernameRef.errors | json }}

      <br/>
      <br/>

      <div *ngIf="usernameRef.errors?.required">this is required</div>
      <div *ngIf="usernameRef.errors?.minlength">should  be at least 3 characters</div>
      <br/>

      <input
        required 
        name="password"
        [(ngModel)]="password" 
        type="password" 
        placeholder="Password"
        #passwordRef="ngModel"
      />
      <br/>

      {{passwordRef.valid}} <br/>
      {{passwordRef.errors | json }}
      <br/>
      <br/>

      <div *ngIf="passwordRef.errors?.required">this is required</div>

      <br/>
      <button type="submit">Login</button>
    </fieldset>
    </form>
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

  onSubmit(formValue) {
    console.log('form value:', formValue);
    console.log('login results:',this.service.loginWithCredentials(
      formValue.login.username,
      formValue.login.password
    ))
  }
}
