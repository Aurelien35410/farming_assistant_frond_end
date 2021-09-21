import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizerformComponent } from './fertilizerform.component';

describe('FertilizerformComponent', () => {
  let component: FertilizerformComponent;
  let fixture: ComponentFixture<FertilizerformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FertilizerformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FertilizerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
