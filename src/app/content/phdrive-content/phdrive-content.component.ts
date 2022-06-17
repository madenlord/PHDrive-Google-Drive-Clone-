import { Component, Input, OnInit } from '@angular/core';
import { FolderEntity } from 'src/app/shared/models/folderEntity';
import { NGXLogger } from 'ngx-logger';
import { PhdriveNavigationService } from 'src/app/shared/services/phdrive-navigation.service';
import { PhdriveStorageService } from 'src/app/shared/services/phdrive-storage.service';

@Component({
  selector: 'app-phdrive-content',
  templateUrl: './phdrive-content.component.html',
  styleUrls: ['./phdrive-content.component.scss']
})
export class PhdriveContentComponent implements OnInit {

  @Input() rootPath!: string;
  folderPath!: string;
  data!: FolderEntity;

  constructor(
    private logger: NGXLogger,
    private folderService: PhdriveNavigationService,
    private fileService: PhdriveStorageService
  ) {}

  ngOnInit(): void {
    this.folderPath = this.rootPath;
    this.updateData();
  }

  public updateData(): void {
    this.folderService.getFolderContent(this.folderPath).subscribe(folderContent =>
      this.data = folderContent
    );
  }
}
