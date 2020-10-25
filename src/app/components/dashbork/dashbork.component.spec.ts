import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashborkComponent } from './dashbork.component';

describe('DashborkComponent', () => {
  let component: DashborkComponent;
  let fixture: ComponentFixture<DashborkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashborkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashborkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
