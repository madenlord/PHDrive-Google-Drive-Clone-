import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { FolderEntity } from 'src/app/shared/models/folderEntity';
import { PhdriveNavigationService } from 'src/app/shared/services/phdrive-navigation.service';

@Component({
  selector: 'app-phdrive-content-folders',
  templateUrl: './phdrive-content-folders.component.html',
  styleUrls: ['./phdrive-content-folders.component.scss']
})
export class PhdriveContentFoldersComponent implements OnInit {

  @Input() folders!: string[];
  @Output() foldersChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Input() folderPath!: string;
  @Output() folderPathChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private logger: NGXLogger,
    private navigationService: PhdriveNavigationService
  ) { }

  ngOnInit(): void {
  }

  goTo(folderName: string): void {
    this.folderPath += "/" + folderName;
    this.folderPathChange.emit(this.folderPath);
  }

  createFolder(folderName: string): void {
    const folderPath = this.folderPath + "/" + folderName;
    const newFolderForm: FormData = new FormData();
    newFolderForm.append("path", folderPath);

    this.navigationService.createFolder(newFolderForm).subscribe((folderInfo: FolderEntity) => {
      this.folders.push(folderName);
      this.foldersChange.emit(this.folders);
    }
    );
  }
}
