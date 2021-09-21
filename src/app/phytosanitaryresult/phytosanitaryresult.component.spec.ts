import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhytosanitaryresultComponent } from './phytosanitaryresult.component';

describe('PhytosanitaryresultComponent', () => {
  let component: PhytosanitaryresultComponent;
  let fixture: ComponentFixture<PhytosanitaryresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhytosanitaryresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhytosanitaryresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
