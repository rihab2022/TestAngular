import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShowstudentComponent } from './showstudent/showstudent.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';



const routes: Routes = [

  {path:'',redirectTo:"home",pathMatch:"full"},
  { path:"show",component:ShowstudentComponent},
  { path:"home",component:HomeComponent},
  { path:"student",component:StudentComponent},
  {path:"student/showstudent/:id",component:ShowstudentComponent},
  { path:"addstudent",component:AddstudentComponent},
  {path:"**",component:PagenotfoundComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
