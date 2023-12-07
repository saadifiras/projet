import { AnimauxService } from './../services/animaux.service';
import { Component,OnInit } from '@angular/core';
import { Animaux } from '../model/animaux.model';
import { Groupeanim } from '../model/groupeanim.model';

@Component({
  selector: 'app-recherche-par-animaux',
  templateUrl: './recherche-par-animaux.component.html',
  styleUrls: ['./recherche-par-animaux.component.css']
})
export class RechercheParAnimauxComponent {
[x: string]: any;

  
  Animaux! : Animaux[];
  idAnimal! : number;
  groupeanimaux!: Groupeanim[];

  constructor(private animauxService : AnimauxService)
  {

  }

  ngOnInit(): void {
    this.animauxService.listegroup().subscribe(anims => {this.groupeanimaux=anims;
      console.log(anims); 
      });
  }

onChange()
{
  if (this.idAnimal!== undefined && !isNaN(this.idAnimal)) {
    this.animauxService.rechercheParGroupe(this.idAnimal)
      .subscribe(anims => {
        this.Animaux = anims;
      });
  } else {
    console.error('idAnimal is not a valid number');
  }
}


}


 
