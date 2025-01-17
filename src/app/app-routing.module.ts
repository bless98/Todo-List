import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodoListComponent } from './todo-list/todo-list.component';



const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent},
  { path:'list', component: TodoListComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
