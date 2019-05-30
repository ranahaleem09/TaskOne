import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './Components/user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { PostComponent } from './Components/post/post.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TodosComponent } from './Components/todos/todos.component';
import { ATodoComponent } from './Components/a-todo/a-todo.component';
import { HeaderTodosComponent } from './Components/header-todos/header-todos.component';
import { AddTodoComponent } from './Components/add-todo/add-todo.component';
import {FormsModule} from '@angular/forms';
import { angularMath } from 'angular-ts-math';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalService} from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    LoginComponent,
    ProfileComponent,
    PostComponent,
    TodosComponent,
    ATodoComponent,
    HeaderTodosComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
