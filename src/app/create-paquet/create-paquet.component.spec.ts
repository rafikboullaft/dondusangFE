import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePaquetComponent } from './create-paquet.component';

describe('CreatePaquetComponent', () => {
  let component: CreatePaquetComponent;
  let fixture: ComponentFixture<CreatePaquetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePaquetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePaquetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
