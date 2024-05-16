import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MammoCheckupComponent } from './mammo-checkup.component';

describe('MammoCheckupComponent', () => {
  let component: MammoCheckupComponent;
  let fixture: ComponentFixture<MammoCheckupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MammoCheckupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MammoCheckupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
