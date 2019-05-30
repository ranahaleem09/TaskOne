import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './Components/profile/profile.component';
import { LoginComponent } from './Components/login/login.component';
import { UserComponent } from './Components/user/user.component';
import { PostComponent } from './Components/post/post.component';
import { TodosComponent } from './Components/todos/todos.component';


const routes: Routes = [
{path: 'Login', component: LoginComponent},
{path: 'User', component: UserComponent},
{path: 'Post', component: PostComponent},
{path: 'Profile', component: ProfileComponent, data:{requiresLogin: true}},
{path:'Todo', component: TodosComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
