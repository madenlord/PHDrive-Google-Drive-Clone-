import { Component, Input, OnInit } from '@angular/core';
import { FolderEntity } from 'src/app/shared/models/folderEntity';
import { NGXLogger } from 'ngx-logger';
import { PhdriveNavigationService } from 'src/app/shared/services/phdrive-navigation.service';
import { PhdriveStorageService } from 'src/app/shared/services/phdrive-storage.service';
import { saveAs } from 'file-saver';
import { Event } from '@angular/router';

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
    private fileService: PhdriveStorageService
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

  downloadFile(fileName: string): void {
    this.logger.log(this.folderPath + "/" + fileName);
    this.fileService.downloadFile(this.folderPath + "/" + fileName).subscribe(response => {
      this.logger.log(response);
      saveAs(new File([response.body!], fileName,
             {type: `${response.headers.get('Content-Type')};charset=utf-8`}));
    }
    );
  }

  uploadFile(event: any): void {
    const file: File = event.target.files[0];
    const formData = new FormData();

    formData.append("file", file, file.name);
    formData.append("path", this.folderPath + "/");
    if(file) {
      this.fileService.uploadFile(formData).subscribe(fileInfo =>
          this.logger.log(fileInfo)
        );
    }
  }
}
