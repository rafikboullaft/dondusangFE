import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockDuProduitComponent } from './stock-du-produit/stock-du-produit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StockByDaysComponent } from './stock-by-days/stock-by-days.component';
import { CalendreirComponent } from './calendreir/calendreir.component';
import { ClientSidebarComponent } from './client-sidebar/client-sidebar.component';
import { PaquetListComponent } from './paquet-list/paquet-list.component';
import { CreatePaquetComponent } from './create-paquet/create-paquet.component';
import { FormsModule } from '@angular/forms';
import { UpdatePaquetComponent } from './update-paquet/update-paquet.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HomeDonneurComponent } from './home-donneur/home-donneur.component';
import { DonnerlesangComponent } from './donnerlesang/donnerlesang.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SelectionnerRendezvousComponent } from './selectionner-rendezvous/selectionner-rendezvous.component';
import { EditComponent } from './Donneurs/edit/edit.component';
import { CreateComponent } from './Donneurs/create/create.component';
import { IndexComponent } from './Donneurs/index/index.component';
import { ViewComponent } from './Donneurs/view/view.component';
@NgModule({
  declarations: [
    AppComponent,
    StockDuProduitComponent,
    NavbarComponent,
    SidebarComponent,
    StockByDaysComponent,
    CalendreirComponent,
    ClientSidebarComponent,
    PaquetListComponent,
    CreatePaquetComponent,
    UpdatePaquetComponent,
    HomeDonneurComponent,
    DonnerlesangComponent,
    ReservationComponent,
    SelectionnerRendezvousComponent,
    EditComponent,
    CreateComponent,
    IndexComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
