import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthService } from './core/auth.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { routing } from './app.routes';

@NgModule({
  declarations: [
    // 顶层组件
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
  ],
  providers: [
    {
      provide: 'auth',
      useClass: AuthService,
    }
  ],
  bootstrap: [AppComponent] // 指明引导性组件
})
export class AppModule { }
