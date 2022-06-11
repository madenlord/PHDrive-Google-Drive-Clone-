import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhdriveContentComponent } from './phdrive-content.component';

describe('PhdriveContentComponent', () => {
  let component: PhdriveContentComponent;
  let fixture: ComponentFixture<PhdriveContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhdriveContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhdriveContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
