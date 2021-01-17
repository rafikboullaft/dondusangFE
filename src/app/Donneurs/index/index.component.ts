import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DonneursService} from '../donneurs.service.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  donneurs: any;
  public donneurService: DonneursService;

  constructor(private httpDonneur: HttpClient , private route: ActivatedRoute,
              private router: Router ) { }

  ngOnInit(): void {
    this.httpDonneur.get('http://localhost:8080/donneurs/').subscribe(data => { // @ts-ignore
      this.donneurs = data;
    }); }
  // private getDonneurs(){
  //   this.donneurService.getDonneurList().subscribe(data => {
  //     this.donneurs = data;
  //   })
  // }
  deleteDonneur(id): void {
    this.donneurService.delete(id).subscribe(res => {
      this.router.navigateByUrl('donneurs');
    });
  }

}
