import { Component, OnInit } from '@angular/core';
import { FolderEntity } from 'src/app/shared/models/folderEntity';
import { NGXLogger } from 'ngx-logger';
import { PhdriveNavigationService } from 'src/app/shared/services/phdrive-navigation.service';
import { PhdriveStorageService } from 'src/app/shared/services/phdrive-storage.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-phdrive-content',
  templateUrl: './phdrive-content.component.html',
  styleUrls: ['./phdrive-content.component.scss']
})
export class PhdriveContentComponent implements OnInit {

  private rootPath: string = ".";
  folderPath!: string;
  data!: FolderEntity;

  constructor(
    private logger: NGXLogger,
    private route: ActivatedRoute,
    private folderService: PhdriveNavigationService,
    private fileService: PhdriveStorageService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.folderPath = typeof(queryParams['path']) !== "undefined" ?
                        queryParams['path'] : this.rootPath;
      this.updateData();
    })

  }

  public updateData(): void {
    this.folderService.getFolderContent(this.folderPath).subscribe(folderContent =>
      this.data = folderContent
    );
  }
}
