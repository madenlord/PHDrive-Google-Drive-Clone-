import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhdriveContentFilesComponent } from './phdrive-content-files.component';

describe('PhdriveContentFilesComponent', () => {
  let component: PhdriveContentFilesComponent;
  let fixture: ComponentFixture<PhdriveContentFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhdriveContentFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhdriveContentFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
