import { Component, OnInit, Optional } from '@angular/core';
import { Donneur } from '../donneur';
import { DonneurService } from '../donneur.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  donneur:Donneur;
  donneurs:Donneur[];

  datesdispo=[
  
    ];
  serverparsi7ati={date:null,message:""}
  serverparsi7ati2={date:null,message:""}
  constructor(private DonneurService:DonneurService) { }

  ngOnInit(): void {  
  }

  rechercheDonneur(){
    this.trouverladate();
    this.datesdispo[0]=this.serverparsi7ati2;
  }
  trouverladate(){
    return this.DonneurService.rechercheDonneur(this.serverparsi7ati.message).subscribe(data=>{
      if(data!=null){
      console.log(data);
      this.donneur=data;
      console.log(this.donneur);
      
      if(this.donneur.sexe=="homme"){
        this.serverparsi7ati2.message="Mr."+this.donneur.prenom+" vous pouvez donez le sang apres cette date:";

        this.serverparsi7ati2.date=this.donneur.dernier_don.setDate(this.donneur.dernier_don.getDate()+4*7);
       }
      else{
        this.serverparsi7ati2.message="Madame "+this.donneur.prenom+" vous pouvez donez le sang apres cette date:";
        this.serverparsi7ati2.date=new Date(this.donneur.dernier_don).getTime() + 5;
      }
      }else{
        this.serverparsi7ati2.message="votre code SI7ATI incorecte ou c'est votre premier fois";
      }
     
  },error=>console.log(error));
    // if(this.donneur.sexe=="homme"){

    //   this.ladatederesrvation= new Date(this.donneur.dernier_don.getTime() + (1000 * 60 * 60 * 24 * 8 *7));
    // }
    // else{
    //   this.ladatederesrvation= new Date(this.donneur.dernier_don.getTime() + (1000 * 60 * 60 * 24 * 12 *7));

    // }
  }


}
