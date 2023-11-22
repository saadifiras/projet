import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimauxComponent } from './animaux/animaux.component';
import { AddanimauxComponent } from './add-animaux/addanimaux.component';
import { UpdtaeAnimauxComponent } from './updtae-animaux/updtae-animaux.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
{path : "animaux" , component : AnimauxComponent }
, 
{path : "addanimaux", component : AddanimauxComponent }
,
{ path: "", redirectTo: "animaux", pathMatch: "full" },

{path :"updateanimaux/:id",component  :UpdtaeAnimauxComponent},
{path: 'login', component: LoginComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
