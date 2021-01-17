import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { DonneursService } from '../donneurs.service.service';
import { Donneur } from '../donneur';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;
  donneur: Donneur=new Donneur();
  constructor(
    public donneurService: DonneursService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.form = new FormGroup({
    //   title: new FormControl('', [Validators.required]),
    //   body: new FormControl('', Validators.required)
    // });
  }

  get f(){
    return this.form.controls;
  }

  submit():void{
    // tslint:disable-next-line:no-console
    // console.log(this.form.value);
    this.donneurService.create(this.donneur).subscribe(res => {
      // tslint:disable-next-line:no-console
      console.log('Post created successfully!');
      this.router.navigateByUrl('donneurs');
    });
  }

}
