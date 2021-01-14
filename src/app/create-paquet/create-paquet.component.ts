import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paquet } from '../paquet';
import { PaquetService } from '../paquet.service';

@Component({
  selector: 'app-create-paquet',
  templateUrl: './create-paquet.component.html',
  styleUrls: ['./create-paquet.component.css']
})
export class CreatePaquetComponent implements OnInit {
  
  paquet: Paquet = new Paquet();
  constructor(private paquetService:PaquetService,
    private router: Router) { }

  ngOnInit(): void {
  }
  savePaquet(){
    this.paquetService.createPaquet(this.paquet).subscribe(data=>{
      console.log(data);
      this.goToPaquetList();
    },
    error => console.log(error)
    
    );
  }
  goToPaquetList(){
    this.router.navigate(['/stock']);
  }
  ajouterPaquet(){
    console.log(this.paquet);
    this.savePaquet();
    
   
  }

}
