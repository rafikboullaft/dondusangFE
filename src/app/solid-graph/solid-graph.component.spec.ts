import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidGraphComponent } from './solid-graph.component';

describe('SolidGraphComponent', () => {
  let component: SolidGraphComponent;
  let fixture: ComponentFixture<SolidGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolidGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolidGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
