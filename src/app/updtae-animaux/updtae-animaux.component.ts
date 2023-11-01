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
constructor(private activatedRoute: ActivatedRoute,
  private router : Router,
  private animauxtService:AnimauxService){

}
ngOnInit()
{
 
  console.log(this.activatedRoute.snapshot.params['id']);
  this.currentanimaux=this.animauxtService.consulterAnnimaux(this.activatedRoute.snapshot.params['id']);
  console.log(this.currentanimaux);
}

updateanimaux()
{ this.animauxtService.updateAnimaux(this.currentanimaux);
  this.router.navigate(['animaux']);
  }
  

}
