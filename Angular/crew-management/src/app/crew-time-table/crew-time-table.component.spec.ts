import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewTimeTableComponent } from './crew-time-table.component';

describe('CrewTimeTableComponent', () => {
  let component: CrewTimeTableComponent;
  let fixture: ComponentFixture<CrewTimeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrewTimeTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrewTimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
