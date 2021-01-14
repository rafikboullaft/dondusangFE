import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionnerRendezvousComponent } from './selectionner-rendezvous.component';

describe('SelectionnerRendezvousComponent', () => {
  let component: SelectionnerRendezvousComponent;
  let fixture: ComponentFixture<SelectionnerRendezvousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionnerRendezvousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionnerRendezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
