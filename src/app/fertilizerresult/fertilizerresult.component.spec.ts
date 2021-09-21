import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizerresultComponent } from './fertilizerresult.component';

describe('FertilizerresultComponent', () => {
  let component: FertilizerresultComponent;
  let fixture: ComponentFixture<FertilizerresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FertilizerresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FertilizerresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
