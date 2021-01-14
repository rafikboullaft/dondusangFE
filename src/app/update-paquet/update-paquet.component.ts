import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paquet } from '../paquet';
import { PaquetService } from '../paquet.service';

@Component({
  selector: 'app-update-paquet',
  templateUrl: './update-paquet.component.html',
  styleUrls: ['./update-paquet.component.css']
})
export class UpdatePaquetComponent implements OnInit {
  id:number;
  paquet: Paquet = new Paquet();
  constructor(private paquetService:PaquetService,
    private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.paquetService.getPaquetById(this.id).subscribe(data=>{
      this.paquet=data;
    },error=>console.log(error));
  }
  updatePaquet(){
    this.paquetService.updatePaquet(this.id,this.paquet).subscribe(data=>{
      console.log(data);
      this.paquet=new Paquet();
      this.goToPaquetList();

    },error=>console.log(error));
  }
  ajouterPaquet(){
    this.updatePaquet();
  }
  goToPaquetList(){
    this.router.navigate(['/stock']);
  }


}
