import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardCheckupComponent } from './standard-checkup.component';

describe('StandardCheckupComponent', () => {
  let component: StandardCheckupComponent;
  let fixture: ComponentFixture<StandardCheckupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardCheckupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandardCheckupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
