import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddListComponent } from './add-list/add-list.component';
import { APIDataComponent } from './api-data/api-data.component';
const routes: Routes = [
  { path: 'add-todo', component: AddListComponent },
  { path: 'show-todos', component: TodoListComponent },
  { path: 'show-API-data', component: APIDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
