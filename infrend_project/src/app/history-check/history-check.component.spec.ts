import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCheckComponent } from './history-check.component';

describe('HistoryCheckComponent', () => {
  let component: HistoryCheckComponent;
  let fixture: ComponentFixture<HistoryCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryCheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
