import { Groupeanim } from './../model/groupeanim.model';
import { Component } from '@angular/core';
import { AnimauxService } from '../services/animaux.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Animaux } from '../model/animaux.model';

@Component({
  selector: 'app-updtae-animaux',
  templateUrl: './updtae-animaux.component.html',
  styleUrls: ['./updtae-animaux.component.css']
})
export class UpdtaeAnimauxComponent {

currentanimaux = new Animaux();
grp! : Groupeanim[];
updatedGrpId!: number;
constructor(private activatedRoute: ActivatedRoute,
  private router : Router,
  private animauxService:AnimauxService){

}
ngOnInit(): void {
  this.animauxService.listegroup().
  subscribe(grp => {this.grp = grp;
  console.log(grp);
  });
  this.animauxService.consulterAnimaux(this.activatedRoute.snapshot.params['id']).
  subscribe( prod =>{ this.currentanimaux = prod;
  this.updatedGrpId =this.currentanimaux.groupe.idGrp;
  } ) ;
  }

updateanimaux()
{ this.currentanimaux.groupe = this.grp.
  find(grp => grp.idGrp == this.updatedGrpId)!;
 this.animauxService.updateAnimaux(this.currentanimaux).subscribe(anim => {
 this.router.navigate(['animaux']); }
 );
}
}