import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimauxComponent } from './animaux/animaux.component';
import { AddanimauxComponent } from './add-animaux/addanimaux.component';
import { FormsModule } from '@angular/forms';
import { UpdtaeAnimauxComponent } from './updtae-animaux/updtae-animaux.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParAnimauxComponent } from './recherche-par-animaux/recherche-par-animaux.component';
@NgModule({
  declarations: [
    AppComponent,
    AnimauxComponent,
    AddanimauxComponent,
    UpdtaeAnimauxComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParAnimauxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
