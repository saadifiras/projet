import { Injectable } from '@angular/core';
import { Animaux } from '../model/animaux.model';
import { groupeanim } from '../model/groupeanim.model';

@Injectable({
  providedIn: 'root'
})
export class AnimauxService {
animaux : Animaux[];
anim!: Animaux;

groupeanim! : groupeanim[];
  constructor() { 

    this.groupeanim=
    [
      {idanim : 1 , nomanim : "raya"},
      {idanim : 2 , nomanim : "rex"}
    ];
    this.animaux = [
    
      { idAnimal: 1, nomAnimal: "Rex", espece: "Chien", dateNaissance: new Date("01/14/2011"),groupeanim : {idanim : 1 , nomanim : "mamiphere"}  },
      { idAnimal: 2, nomAnimal: "Whiskers", espece: "Chat", dateNaissance: new Date("12/17/2010"),groupeanim : {idanim : 2 , nomanim : "mamiphere"} },
      { idAnimal: 3, nomAnimal: "Simba", espece: "Lion", dateNaissance: new Date("02/20/2020"),groupeanim: {idanim : 3 , nomanim : "mamiphere"} }
  
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

  updateAnimaux(a :Animaux)
  {
  
  this.supprimerAnnimaux(a);
  this.addAnimaux(a);
  }

  listegroup():groupeanim[] {
    return this.groupeanim;
    }

    consulterCategorie(id:number):groupeanim{
      return this.groupeanim.find(cat => cat.idanim == id)!;
      }


    
  
  
}
