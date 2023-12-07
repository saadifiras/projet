import { Component } from '@angular/core';
import { Animaux } from '../model/animaux.model';
import { AnimauxService } from '../services/animaux.service';
import { Groupeanim } from '../model/groupeanim.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addanimaux',
  templateUrl: './addanimaux.component.html',
  styleUrls: ['./addanimaux.component.css']
})
export class AddanimauxComponent {
newAnimaux = new Animaux();
  messag?: string;
  groupeanim !:Groupeanim[];
  newIdGrp ! : number;
constructor(private animauxservice : AnimauxService ,private router : Router){

}
 ngOnInit() : void
 {
  this.animauxservice.listegroup().
  subscribe(grps => {this.groupeanim = grps;
    console.log("Liste des grps: ",grps);
});


 }

 addAnimaux() {
  this.newAnimaux.groupe = this.groupeanim.find(cat => cat.idGrp == this.newIdGrp)!;
  this.animauxservice.addAnimaux(this.newAnimaux)
      .subscribe(anim => {
          console.log(anim);
          this.router.navigate(['animaux']);
      });
}

  
}
