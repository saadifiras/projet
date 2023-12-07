import { Animaux } from './../model/animaux.model';
import { Injectable } from '@angular/core';

import { Groupeanim } from '../model/groupeanim.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class AnimauxService {
animaux! : Animaux[];
anim!: Animaux;

groupeanim! : Groupeanim[];
apiURL: string = 'http://localhost:8080/Anims/api';
constructor(private http : HttpClient) {
}
/*
  constructor() { 
    

    this.groupeanim=
    [
      {idGrp : 1 , nomGroupe : "homnivore"},
      {idGrp : 2 , nomGroupe : "herbivore"}

    ];
    this.animaux = [
      { idAnimal: 1, nomAnimal: "Rex", espece: "tigre", dateNaissance: new Date("01/14/2011"),groupeanim : {idGrp : 1 , nomGroupe : "homnivore"}  },
      { idAnimal: 2, nomAnimal: "Whiskers", espece: "lion", dateNaissance: new Date("12/17/2010"),groupeanim : {idGrp : 1 , nomGroupe : "homnivore"} },
      { idAnimal: 3, nomAnimal: "Simba", espece: "vache", dateNaissance: new Date("02/20/2020"),groupeanim: {idGrp : 2 , nomGroupe : "herbivore"}},
      { idAnimal: 4, nomAnimal: "boyka", espece: "chien", dateNaissance: new Date("06/18/2018"),groupeanim : {idGrp : 1 , nomGroupe : "homnivore"}  },
      
     ];
     
  }
  */
  listeAnimaux(): Observable<Animaux[]>{
    return this.http.get<Animaux[]>(this.apiURL);

  }


  addAnimaux( anim: Animaux):Observable<Animaux>{
    return this.http.post<Animaux>(this.apiURL, anim, httpOptions);
    }
    

  //supprimerAnnimaux( anim : Animaux){
   
    //const index = this.animaux.indexOf(anim, 0);
    //if (index > -1) {
    //this.animaux.splice(index, 1);
    //}
    

//}

supprimerAnimaux(id : number) {
  const url = `${this.apiURL}/${id}`;
  return this.http.delete(url, httpOptions);
  }

consulterAnimaux(id: number):Observable<Animaux>{
  const url = `${this.apiURL}/${id}`;
  return this.http.get<Animaux>(url);
  }

  updateAnimaux(a :Animaux)
  {
  
    return this.http.put<Animaux>(this.apiURL,a, httpOptions);

  }



    listegroup():Observable<Groupeanim[]>{
      return this.http.get<Groupeanim[]>(this.apiURL+"/grp");
      }

    consulterGroupe(id:number):Groupeanim{
      return this.groupeanim.find(cat => cat.idGrp == id)!;
      }

      rechercheParGroupe( id:number):Observable <Animaux[]> {
          const url = `${this.apiURL}/prodscat/${id}`;
          return this.http.get<Animaux[]>(url);
      }

      /* rechercherParNom(nom: string):Observable< Animaux[]> {
        const url = `${this.apiURL}/animsByName/${nom}`;
        return this.http.get<Animaux[]>(url);
        } */
     }

      
  
  

