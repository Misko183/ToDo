import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddToDoComponent } from './ToDo/add-to-do/add-to-do.component';
import { EditToDoComponent } from './ToDo/edit-to-do/edit-to-do.component';

const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'add', component: AddToDoComponent},
  { path: 'edit', component: EditToDoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
