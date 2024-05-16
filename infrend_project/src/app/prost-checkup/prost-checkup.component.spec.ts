import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProstCheckupComponent } from './prost-checkup.component';

describe('ProstCheckupComponent', () => {
  let component: ProstCheckupComponent;
  let fixture: ComponentFixture<ProstCheckupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProstCheckupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProstCheckupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
