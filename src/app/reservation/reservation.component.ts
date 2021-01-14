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
  si7ati:"";
  constructor(private DonneurService:DonneurService) { }

  ngOnInit(): void {
    
  }
  rechercheDonneur(si7ati:string){
    return this.DonneurService.rechercheDonneur(si7ati).subscribe(data=>{
      if(data!=null){
        this.donneur=data;
      }
      this.lemessage="desoler cette votre premier fois";
    },error=>console.log(error));
  }
  trouverladate(){
    if(this.donneur.sexe=="homme"){
      this.ladatederesrvation= new Date(this.donneur.dernier_don.getTime() + (1000 * 60 * 60 * 24 * 8 *7));
    }
    else{
      this.ladatederesrvation= new Date(this.donneur.dernier_don.getTime() + (1000 * 60 * 60 * 24 * 12 *7));

    }
  }


}
