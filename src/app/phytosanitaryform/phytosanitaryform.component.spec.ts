import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhytosanitaryformComponent } from './phytosanitaryform.component';

describe('PhytosanitaryformComponent', () => {
  let component: PhytosanitaryformComponent;
  let fixture: ComponentFixture<PhytosanitaryformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhytosanitaryformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhytosanitaryformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
