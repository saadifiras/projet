import { Component, OnInit } from '@angular/core';
import { Animaux } from '../model/animaux.model';
import { AnimauxService } from '../services/animaux.service';

@Component({
  selector: 'app-animaux',
  templateUrl: './animaux.component.html',
  
})
export class AnimauxComponent implements OnInit{
animaux : Animaux[];
private animauxservice =new AnimauxService();
constructor(){ 
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


