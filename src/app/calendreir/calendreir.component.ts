import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {error} from '@angular/compiler/src/util';
import {Donneur} from '../Donneurs/donneur';
import {DonneursService} from '../Donneurs/donneurs.service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-calendreir',
  templateUrl: './calendreir.component.html',
  styleUrls: ['./calendreir.component.css']
})
export class CalendreirComponent implements OnInit {
  donneur: Donneur = new Donneur();
  calendriers: any;

  constructor(private httpCalendries: HttpClient, public donneurService: DonneursService
  ,           private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.httpCalendries.get('http://localhost:8080/calendriers/').subscribe(data => { // @ts-ignore
      this.calendriers = data;

    });
  }

  show(url): void {
    this.httpCalendries.get(url).subscribe(data => {// @ts-ignore

        this.donneur = data;
      
      this.router.navigateByUrl('donneur/' + this.donneur.id + '/view');
    });
  }
  supprimer(id){
    this.httpCalendries.delete('http://localhost:8080/calendriers/' + id).subscribe(data => {
      console.log(data);
      
    });
  }
}