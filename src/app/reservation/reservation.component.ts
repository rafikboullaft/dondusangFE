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
  lemessage:String;
  ladatederesrvation:Date;
  si7ati:string;

  datesdispo=[
    {date:new Date(), message:"bienvenue"},
    {date:new Date(), message:"bienvenue"}
  
    ];
  serverparsi7ati={date:null,message:""}
  serverparsi7ati2={date:null,message:""}
  constructor(private DonneurService:DonneurService) { }

  ngOnInit(): void {
    
    
  }
  rechercheDonneur(){
    this.datesdispo.push(this.serverparsi7ati);
    this.trouverladate();
    this.datesdispo.push(this.serverparsi7ati);
    this.serverparsi7ati2.date=this.donneur.dernier_don;
    this.datesdispo.push(this.serverparsi7ati);
    this.datesdispo.push(this.serverparsi7ati2);
  }
  trouverladate(){
    return this.DonneurService.rechercheDonneur(this.serverparsi7ati.message).subscribe(data=>{
      this.donneur=data;
  },error=>console.log(error));
    // if(this.donneur.sexe=="homme"){

    //   this.ladatederesrvation= new Date(this.donneur.dernier_don.getTime() + (1000 * 60 * 60 * 24 * 8 *7));
    // }
    // else{
    //   this.ladatederesrvation= new Date(this.donneur.dernier_don.getTime() + (1000 * 60 * 60 * 24 * 12 *7));

    // }
  }


}
