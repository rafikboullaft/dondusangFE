import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePaquetComponent } from './create-paquet/create-paquet.component';
import { DonnerlesangComponent } from './donnerlesang/donnerlesang.component';
import { HomeDonneurComponent } from './home-donneur/home-donneur.component';
import {PaquetListComponent} from './paquet-list/paquet-list.component'
import { ReservationComponent } from './reservation/reservation.component';
import { StockDuProduitComponent } from './stock-du-produit/stock-du-produit.component';
import { UpdatePaquetComponent } from './update-paquet/update-paquet.component';
const routes: Routes = [
  {path: 'stock', component: PaquetListComponent},
  {path: 'create-paquet', component: CreatePaquetComponent},
  {path: 'statistique', component: StockDuProduitComponent},
  {path: 'update-paquet/:id', component: UpdatePaquetComponent},
  {path: 'home', component: HomeDonneurComponent},
  {path: 'home/donnerlesnag', component:DonnerlesangComponent},
  {path: 'home/reserver', component:ReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
