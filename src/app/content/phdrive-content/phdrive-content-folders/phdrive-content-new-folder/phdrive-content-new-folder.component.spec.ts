import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhdriveContentNewFolderComponent } from './phdrive-content-new-folder.component';

describe('PhdriveContentNewFolderComponent', () => {
  let component: PhdriveContentNewFolderComponent;
  let fixture: ComponentFixture<PhdriveContentNewFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhdriveContentNewFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhdriveContentNewFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
