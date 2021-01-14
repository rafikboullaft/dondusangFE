import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paquet } from '../paquet';
import { PaquetService } from '../paquet.service';

@Component({
  selector: 'app-paquet-list',
  templateUrl: './paquet-list.component.html',
  styleUrls: ['./paquet-list.component.css']
})
export class PaquetListComponent implements OnInit {
  paquets: Paquet[];
  constructor(private paquetService:PaquetService,
    private router:Router ) { }
  
  ngOnInit(): void {
    this.getPaquets();
  }
  private getPaquets(){
    this.paquetService.getPaquetList().subscribe(data => {
      this.paquets = data;
    })
  }
  updatePaquet(id:number){
    this.router.navigate(['update-paquet',id]);
  }
  deletePaquet(id:number){
    this.paquetService.deletePaquet(id).subscribe(data=>{
      console.log(data);
      this.getPaquets();
    },error=>console.log(error));
  }

}
