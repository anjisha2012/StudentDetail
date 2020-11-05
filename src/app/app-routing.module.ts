import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './pages/students/edit/edit.component';
import{StudentsComponent} from './pages/students/students.component';


const routes: Routes = [
  {
    path :"",
    component : StudentsComponent
  },
  {
    path :"student/add/:id",
    component : EditComponent
  },
  {
    path :"student/edit/:id",
    component : EditComponent
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
