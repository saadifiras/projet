import { AnimauxService } from './../services/animaux.service';
import { Component, OnInit } from '@angular/core';
import { Animaux } from '../model/animaux.model';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-animaux',
  templateUrl: './animaux.component.html',
  
})
export class AnimauxComponent implements OnInit{
[x: string]: any;
animaux : Animaux[];

constructor(private animauxService : AnimauxService,
  public authService: AuthService)  { 

    this.animaux=[];

    }
    
   /* supprimerAnnimaux(anim : Animaux)
{
  let conf = confirm("Etes-vous sûr ?");
   if (conf)
  this.animauxservice.supprimerAnimaux(anim);
  }*/

  
    
  ngOnInit(): void {
    this.chargerAnimaux();
    }

  chargerAnimaux()
  {
    this.animauxService.listeAnimaux().subscribe(anims => {
      console.log(anims);
      this.animaux = anims;
      });
  }
  supprimerAnimaux(a: Animaux)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.animauxService.supprimerAnimaux(a.idAnim).subscribe(() => {
console.log("animal supprimé");
this.chargerAnimaux();
});
}


}


