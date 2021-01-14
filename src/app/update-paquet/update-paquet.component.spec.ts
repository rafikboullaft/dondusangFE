import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePaquetComponent } from './update-paquet.component';

describe('UpdatePaquetComponent', () => {
  let component: UpdatePaquetComponent;
  let fixture: ComponentFixture<UpdatePaquetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePaquetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePaquetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
