import { Component } from '@angular/core';
import { Animaux } from '../model/animaux.model';
import { AnimauxService } from '../services/animaux.service';

@Component({
  selector: 'app-addanimaux',
  templateUrl: './addanimaux.component.html',
  styleUrls: ['./addanimaux.component.css']
})
export class AddanimauxComponent {
newAnimaux = new Animaux();
  messag?: string;
constructor(private animauxservice : AnimauxService){

}
addAnimaux(){
  this.animauxservice.addAnimaux(this.newAnimaux);
 console.log(this.newAnimaux)
  this.messag="animeaux " + this.newAnimaux.nomAnimal + " ajouté avec succées" ;
}
  
}
