import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendreirComponent } from './calendreir/calendreir.component';
import { CreatePaquetComponent } from './create-paquet/create-paquet.component';
import { DonnerlesangComponent } from './donnerlesang/donnerlesang.component';
import { CreateComponent } from './Donneurs/create/create.component';
import { EditComponent } from './Donneurs/edit/edit.component';
import { IndexComponent } from './Donneurs/index/index.component';
import { ViewComponent } from './Donneurs/view/view.component';
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
  {path: 'home/reserver', component:ReservationComponent},
  {path: 'calendreirs', component: CalendreirComponent},
  {path: 'donneurs', component: IndexComponent },
  {path: 'nouveauDonneur', component:CreateComponent},
  {path: 'donneur/:idDonneur/edit', component:EditComponent},
  {path: 'donneur/:idDonneur/view', component:ViewComponent},
  {path:'calendrier', component:CalendreirComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
