import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhdriveNavbarComponent } from './phdrive-navbar.component';

describe('PhdriveNavbarComponent', () => {
  let component: PhdriveNavbarComponent;
  let fixture: ComponentFixture<PhdriveNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhdriveNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhdriveNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
