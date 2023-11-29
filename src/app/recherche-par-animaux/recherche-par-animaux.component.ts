import { AnimauxService } from './../services/animaux.service';
import { Component,OnInit } from '@angular/core';
import { Animaux } from '../model/animaux.model';
import { groupeanim } from '../model/groupeanim.model';

@Component({
  selector: 'app-recherche-par-animaux',
  templateUrl: './recherche-par-animaux.component.html',
  styleUrls: ['./recherche-par-animaux.component.css']
})
export class RechercheParAnimauxComponent {
[x: string]: any;

  
  Animaux! : Animaux[];
  idAnimal! : number;
  groupeanimaux!: groupeanim[];

  constructor(private animauxService : AnimauxService)
  {

  }

  ngOnInit(): void {
    this.groupeanimaux = this.animauxService.listeAnimaux(); 
    console.log(this.groupeanimaux);
  }

onChange()
{

  this.Animaux = this.animauxService.rechercheParType(this.idAnimal);

}


}


 
