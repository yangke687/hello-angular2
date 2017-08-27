import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AuthService } from './core/auth.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { routing } from './app.routes';
import { TodoComponent } from './todo/todo.component';

import { InMemoryWebApiModule  } from 'angular-in-memory-web-api';
import { InMemoryTodoDbService } from './todo/todo-data';

@NgModule({
  declarations: [
    // 顶层组件
    AppComponent,
    LoginComponent,
    TodoComponent
  ],
  imports: [
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryTodoDbService),
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
