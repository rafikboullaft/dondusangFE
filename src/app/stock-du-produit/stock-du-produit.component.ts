import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Paquet } from '../paquet';
import { PaquetService } from '../paquet.service';

@Component({
  selector: 'app-stock-du-produit',
  templateUrl: './stock-du-produit.component.html',
  styleUrls: ['./stock-du-produit.component.css']
})
export class StockDuProduitComponent implements OnInit {
  lesGloubules:Paquet[];
  plasma:Paquet[];
  lesPlaquetes:Paquet[];
  //les gloubules rouges
  gr_aplus:Paquet[];
  gr_amoins:Paquet[];
  gr_bplus:Paquet[];
  gr_bmoins:Paquet[];
  gr_abplus:Paquet[];
  gr_abmoins:Paquet[];
  gr_oplus:Paquet[];
  gr_omoins:Paquet[];
  //plasma
  plasma_aplus:Paquet[];
  plasma_amoins:Paquet[];
  plasma_bplus:Paquet[];
  plasma_bmoins:Paquet[];
  plasma_abplus:Paquet[];
  plasma_abmoins:Paquet[];
  plasma_oplus:Paquet[];
  plasma_omoins:Paquet[];
  //les plaquetes
  plaquetes_aplus:Paquet[];
  plaquetes_amoins:Paquet[];
  plaquetes_bplus:Paquet[];
  plaquetes_bmoins:Paquet[];
  plaquetes_abplus:Paquet[];
  plaquetes_abmoins:Paquet[];
  plaquetes_oplus:Paquet[];
  plaquetes_omoins:Paquet[];
  constructor(private paquetService:PaquetService) { }

  ngOnInit(): void {
    this.nombresDePaquetsGR();
    this.nombresDePaquetsPlaquetes();
    this.nombresDePaquetsplasma();
    this.stock_gr_abmoins();
    this.stock_gr_abplus();
    this.stock_gr_amoins();
    this.stock_gr_aplus();
    this.stock_gr_bmoins();
    this.stock_gr_bplus();
    this.stock_gr_omoins();
    this.stock_gr_oplus();
    //plquetes
    this.stock_plaquetes_abmoins();
    this.stock_plaquetes_abplus();
    this.stock_plaquetes_amoins();
    this.stock_plaquetes_aplus();
    this.stock_plaquetes_bmoins();
    this.stock_plaquetes_bplus();
    this.stock_plaquetes_omoins();
    this.stock_plaquetes_oplus();
    //plasma
    this.stock_plasma_abmoins();
    this.stock_plasma_abplus();
    this.stock_plasma_amoins();
    this.stock_plasma_aplus();
    this.stock_plasma_bmoins();
    this.stock_plasma_bplus();
    this.stock_plasma_omoins();
    this.stock_plasma_oplus();
  }
  nombresDePaquetsplasma(){
    this.paquetService.nombrePaquetsParType("plasma").subscribe(data=>{
      this.plasma=data;
    })
  }
  nombresDePaquetsPlaquetes(){
    this.paquetService.nombrePaquetsParType("plaquetes").subscribe(data=>{
      this.lesPlaquetes=data;
    })
  }
  nombresDePaquetsGR(){
    this.paquetService.nombrePaquetsParType("globules rouges").subscribe(data=>{
      this.lesGloubules=data;
    })
  }
  //
  //les function gr 
  stock_gr_oplus(){
    this.paquetService.nombredepaquet("globules rouges","O+").subscribe(data=>{
      this.gr_oplus=data;
    })

  }
  stock_gr_omoins(){
    this.paquetService.nombredepaquet("globules rouges","O-").subscribe(data=>{
      this.gr_omoins=data;
    })
  }
  stock_gr_aplus(){
    this.paquetService.nombredepaquet("globules rouges","A+").subscribe(data=>{
      this.gr_aplus=data;
    })
  }
  stock_gr_amoins(){
    this.paquetService.nombredepaquet("globules rouges","A-").subscribe(data=>{
      this.gr_amoins=data;
    })
    
  }
  stock_gr_bplus(){
    this.paquetService.nombredepaquet("globules rouges","B+").subscribe(data=>{
      this.gr_bplus=data;
    })
  }
  stock_gr_bmoins(){
    this.paquetService.nombredepaquet("globules rouges","B-").subscribe(data=>{
      this.gr_bmoins=data;
    })
    
  }
  stock_gr_abplus(){
    this.paquetService.nombredepaquet("globules rouges","AB+").subscribe(data=>{
      this.gr_abplus=data;
    })
  }
  stock_gr_abmoins(){
    this.paquetService.nombredepaquet("globules rouges","AB-").subscribe(data=>{
      this.gr_abmoins=data;
    })
  }
  //les fonctions plasma
  stock_plasma_oplus(){
    this.paquetService.nombredepaquet("plasma","O+").subscribe(data=>{
      this.plasma_oplus=data;
    })

  }
  stock_plasma_omoins(){
    this.paquetService.nombredepaquet("plasma","O-").subscribe(data=>{
      this.plasma_omoins=data;
    })
  }
  stock_plasma_aplus(){
    this.paquetService.nombredepaquet("plasma","A+").subscribe(data=>{
      this.plasma_aplus=data;
    })
  }
  stock_plasma_amoins(){
    this.paquetService.nombredepaquet("plasma","A-").subscribe(data=>{
      this.plasma_amoins=data;
    })
    
  }
  stock_plasma_bplus(){
    this.paquetService.nombredepaquet("plasma","B+").subscribe(data=>{
      this.plasma_bplus=data;
    })
  }
  stock_plasma_bmoins(){
    this.paquetService.nombredepaquet("plasma","B-").subscribe(data=>{
      this.plasma_bmoins=data;
    })
    
  }
  stock_plasma_abplus(){
    this.paquetService.nombredepaquet("plasma","AB+").subscribe(data=>{
      this.plasma_abplus=data;
    })
  }
  stock_plasma_abmoins(){
    this.paquetService.nombredepaquet("plasma","AB-").subscribe(data=>{
      this.plasma_abmoins=data;
    })
  }
  //les fonctions plaquetes
  stock_plaquetes_oplus(){
    this.paquetService.nombredepaquet("plaquetes","O+").subscribe(data=>{
      this.plaquetes_oplus=data;
    })

  }
  stock_plaquetes_omoins(){
    this.paquetService.nombredepaquet("plaquetes","O-").subscribe(data=>{
      this.plaquetes_omoins=data;
    })
  }
  stock_plaquetes_aplus(){
    this.paquetService.nombredepaquet("plaquetes","A+").subscribe(data=>{
      this.plaquetes_aplus=data;
    })
  }
  stock_plaquetes_amoins(){
    this.paquetService.nombredepaquet("plaquetes","A-").subscribe(data=>{
      this.plaquetes_amoins=data;
    })
    
  }
  stock_plaquetes_bplus(){
    this.paquetService.nombredepaquet("plaquetes","B+").subscribe(data=>{
      this.plaquetes_bplus=data;
    })
  }
  stock_plaquetes_bmoins(){
    this.paquetService.nombredepaquet("plaquetes","B-").subscribe(data=>{
      this.plaquetes_bmoins=data;
    })
    
  }
  stock_plaquetes_abplus(){
    this.paquetService.nombredepaquet("plaquetes","AB+").subscribe(data=>{
      this.plaquetes_abplus=data;
    })
  }
  stock_plaquetes_abmoins(){
    this.paquetService.nombredepaquet("plaquetes","AB-").subscribe(data=>{
      this.plaquetes_abmoins=data;
    })
  }

  

  

}
