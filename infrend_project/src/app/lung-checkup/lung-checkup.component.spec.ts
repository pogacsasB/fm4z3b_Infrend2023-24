import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LungCheckupComponent } from './lung-checkup.component';

describe('LungCheckupComponent', () => {
  let component: LungCheckupComponent;
  let fixture: ComponentFixture<LungCheckupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LungCheckupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LungCheckupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
