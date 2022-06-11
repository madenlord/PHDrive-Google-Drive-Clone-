import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { FolderEntity } from './shared/models/folderEntity';
import { homeDir } from './shared/models/mocked-data';
import { PhdriveNavigationService } from './shared/services/phdrive-navigation.service';
import { PhdriveStorageService } from './shared/services/phdrive-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  data!: FolderEntity;
  private homeFolder: FolderEntity = homeDir; // TODO: change for real services.

  constructor(
    private logger: NGXLogger,
    private folderService: PhdriveNavigationService,
    private fileService: PhdriveStorageService,
  ) {}

  ngOnInit(): void {
    this.data = this.homeFolder;
  }
}
