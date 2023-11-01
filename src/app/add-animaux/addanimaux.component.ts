import { Component } from '@angular/core';
import { Animaux } from '../model/animaux.model';
import { AnimauxService } from '../services/animaux.service';
import { groupeanim } from '../model/groupeanim.model';

@Component({
  selector: 'app-addanimaux',
  templateUrl: './addanimaux.component.html',
  styleUrls: ['./addanimaux.component.css']
})
export class AddanimauxComponent {
newAnimaux = new Animaux();
  messag?: string;
  groupeanim !:groupeanim[];
constructor(private animauxservice : AnimauxService){

}
 ngOnInit()
 {
  this.groupeanim = this.animauxservice.listegroup();


 }

addAnimaux(){
  this.animauxservice.addAnimaux(this.newAnimaux);
 console.log("from add.ts"+this.newAnimaux);
  this.messag="animeaux " + this.newAnimaux.nomAnimal + " ajouté avec succées" ;
}
  
}
