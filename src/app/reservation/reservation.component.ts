import { Component, OnInit, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { Calendrier } from '../calendrier';
import { CalendrierService } from '../calendrier.service';
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
  Calendrier:Calendrier=new Calendrier();
  count:0;
  

  datesdispo=[];
  serverparsi7ati={date:null,message:""}
  serverparsi7ati2={date:null,message:""}
  constructor(private DonneurService:DonneurService,private CalendrierService:CalendrierService,private router:Router) { }

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
      
      if(this.donneur.sexe!="femme"){
        this.serverparsi7ati2.message="Mr."+this.donneur.prenom+" vous pouvez donez le sang apres cette date:";
        this.serverparsi7ati2.date=new Date(this.donneur.dernier_don).getTime() + 5;
       }
      else{
        this.serverparsi7ati2.message="Madame "+this.donneur.prenom+" vous pouvez donez le sang apres cette date:";
        this.serverparsi7ati2.date=new Date(this.donneur.dernier_don).getTime() + 5;
      }
      }else{
        this.serverparsi7ati2.message="votre code SI7ATI incorecte ou c'est votre premier fois";
      }
     
  },error=>console.log(error));
  }

  saveReservation(){
  
    this.CalendrierService.createReservation(this.Calendrier).subscribe(data=>{
      console.log(data);
      //this.goToPaquetList();
    },
    error => console.log(error)
    
    );
  }
  goToreserver(){
    this.router.navigate(['/home']);
  }
  ajouterReservation(){
  
    this.saveReservation();
    this.goToreserver();

  }


}
