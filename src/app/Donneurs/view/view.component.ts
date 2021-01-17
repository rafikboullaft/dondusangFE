import { Component, OnInit } from '@angular/core';
import {Donneur} from '../donneur';
import {DonneursService} from '../donneurs.service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id: number;
  donneur: Donneur = new Donneur();
  constructor(
    public donneurService: DonneursService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.idDonneur;

    this.donneurService.find(this.id).subscribe((data: Donneur) => {
      this.donneur = data;
    });
  }
}
