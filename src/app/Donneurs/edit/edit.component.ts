import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { DonneursService } from '../donneurs.service.service';
import { Donneur } from '../donneur';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  donneur: Donneur = new Donneur();
  form: FormGroup;

  constructor(
    public donneurService: DonneursService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idDonneur'];
    this.donneurService.find(this.id).subscribe( data=>{
      this.donneur = data;
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    this.donneurService.update(this.id, this.donneur).subscribe(res => {
      this.router.navigateByUrl('donneurs');
    })
  }

}
