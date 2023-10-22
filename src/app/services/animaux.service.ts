import { Injectable } from '@angular/core';
import { Animaux } from '../model/animaux.model';

@Injectable({
  providedIn: 'root'
})
export class AnimauxService {
animaux : Animaux[];
anim!: Animaux;
  constructor() { 
    this.animaux = [
    
      { idAnimal: 1, nomAnimal: "Rex", espece: "Chien", dateNaissance: new Date("01/14/2011") },
      { idAnimal: 2, nomAnimal: "Whiskers", espece: "Chat", dateNaissance: new Date("12/17/2010") },
      { idAnimal: 3, nomAnimal: "Simba", espece: "Lion", dateNaissance: new Date("02/20/2020") }
  
     ];
  }
  listeAnimaux(): Animaux []
  {
    return this.animaux;

  }
  addAnimaux(animaux: Animaux)
  {
    this.animaux.push(animaux);
  }

  supprimerAnnimaux( anim : Animaux){
   
    const index = this.animaux.indexOf(anim, 0);
    if (index > -1) {
    this.animaux.splice(index, 1);
    }
    

}

consulterAnnimaux(id: number):Animaux{
  this.anim = this.animaux.find(p => p.idAnimal == id)!;
  return this.anim;
  }

  updateanimaux(a :Animaux)
  {
  // console.log(p);
  this.supprimerAnnimaux(a);
  this.addAnimaux(a);
  }
  
  
}
