import { AnimauxService } from './../services/animaux.service';
import { Component } from '@angular/core';
import { Animaux } from '../model/animaux.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent {
  Animaux! : Animaux[];
  searchTerm!: string ;
  nomAnim! : string;
constructor( private animauxService : AnimauxService)
{
}

ngOnInit(): void {
  this.animauxService.listeAnimaux().subscribe(anims => {this.Animaux = anims;
    console.log(anims); 
    }
    );
  
}

/* recherchergrps(){
  this.animauxService.rechercherParNom(this.nomAnim).
  subscribe(anims => {
  this.Animaux = anims;
  console.log(anims)});
  } */
 
}
