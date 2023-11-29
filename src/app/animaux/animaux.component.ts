import { AnimauxService } from './../services/animaux.service';
import { Component, OnInit } from '@angular/core';
import { Animaux } from '../model/animaux.model';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-animaux',
  templateUrl: './animaux.component.html',
  
})
export class AnimauxComponent implements OnInit{
animaux : Animaux[];

constructor(private animauxservice : AnimauxService,
  public authService: AuthService)  { 

    this.animaux=[];

    }
    
    supprimerAnnimaux(anim : Animaux)
{
  let conf = confirm("Etes-vous sûr ?");
   if (conf)
  this.animauxservice.supprimerAnnimaux(anim);
  }
    
  ngOnInit(): void {
    this.animaux=this.animauxservice.listeAnimaux();
  }
}


