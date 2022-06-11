import { Component, Input, OnInit } from '@angular/core';
import { FolderEntity } from 'src/app/shared/models/folderEntity';
import { NGXLogger } from 'ngx-logger';
import { PhdriveNavigationService } from 'src/app/shared/services/phdrive-navigation.service';


@Component({
  selector: 'app-phdrive-content',
  templateUrl: './phdrive-content.component.html',
  styleUrls: ['./phdrive-content.component.scss']
})
export class PhdriveContentComponent implements OnInit {

  @Input() folderPath!: string;
  data!: FolderEntity;

  constructor(
    private logger: NGXLogger,
    private folderService: PhdriveNavigationService,
  ) {}

  ngOnInit(): void {
    this.updateData();
  }

  private updateData(): void {
    this.folderService.getFolderContent(this.folderPath).subscribe(folderContent =>
      this.data = folderContent
    );
  }

  goTo(folderName: string): void {
    this.folderPath += "/" + folderName;
    this.updateData();
  }

}
