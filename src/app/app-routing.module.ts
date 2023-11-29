import { AnimauxGuard } from './animaux.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimauxComponent } from './animaux/animaux.component';
import { AddanimauxComponent } from './add-animaux/addanimaux.component';
import { UpdtaeAnimauxComponent } from './updtae-animaux/updtae-animaux.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParAnimauxComponent } from './recherche-par-animaux/recherche-par-animaux.component';

const routes: Routes = [
{path : "animaux" , component : AnimauxComponent }
, 
{path : "add-animaux", component : AddanimauxComponent , canActivate:[AnimauxGuard]}
,
{ path: "", redirectTo: "animaux", pathMatch: "full" },

{path :"updateanimaux/:id",component  :UpdtaeAnimauxComponent},
{path: 'login', component: LoginComponent},
{path: 'forbidden', component: ForbiddenComponent},
{path: "rechercheParAnimaux", component : RechercheParAnimauxComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
