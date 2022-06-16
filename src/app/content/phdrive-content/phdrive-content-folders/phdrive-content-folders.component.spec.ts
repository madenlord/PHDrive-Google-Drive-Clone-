import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhdriveContentFoldersComponent } from './phdrive-content-folders.component';

describe('PhdriveContentFoldersComponent', () => {
  let component: PhdriveContentFoldersComponent;
  let fixture: ComponentFixture<PhdriveContentFoldersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhdriveContentFoldersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhdriveContentFoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
