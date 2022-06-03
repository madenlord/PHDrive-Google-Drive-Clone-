import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { FolderEntity } from './shared/models/folderEntity';
import { PhdriveNavigationService } from './shared/services/phdrive-navigation.service';
import { PhdriveStorageService } from './shared/services/phdrive-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private folderPath!: string;
  private folderContent!: FolderEntity;

  constructor(
    private logger: NGXLogger,
    private folderService: PhdriveNavigationService,
    private fileService: PhdriveStorageService,
  ) {}

  ngOnInit(): void {
    this.folderPath = "";
    this.folderService.getFolderContent(this.folderPath)
                      .subscribe((folderContent: FolderEntity) =>
    {
      this.folderContent = folderContent;
      this.logger.log(this.folderContent);
    });
  }
}
