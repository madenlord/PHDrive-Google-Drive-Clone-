import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { saveAs } from 'file-saver';
import { FileEntity } from 'src/app/shared/models/fileEntity';
import { PhdriveStorageService } from 'src/app/shared/services/phdrive-storage.service';

@Component({
  selector: 'app-phdrive-content-files',
  templateUrl: './phdrive-content-files.component.html',
  styleUrls: ['./phdrive-content-files.component.scss']
})
export class PhdriveContentFilesComponent implements OnInit {

  @Input() files!: string[];
  @Output() filesChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Input() folderPath!: string;

  constructor(
    private logger: NGXLogger,
    private storageService: PhdriveStorageService
  ) { }

  ngOnInit(): void {
  }

  downloadFile(fileName: string): void {
    this.logger.log(this.folderPath + "/" + fileName);
    this.storageService.downloadFile(this.folderPath + "/" + fileName).subscribe(response => {
      this.logger.log(response);
      saveAs(new File([response.body!], fileName,
             {type: `${response.headers.get('Content-Type')};charset=utf-8`}));
    }
    );
  }

  uploadFile(event: any): void {
    const file: File = event.target.files[0];
    const formData = new FormData();
    let fileInfo: FileEntity;

    formData.append("file", file, file.name);
    formData.append("path", this.folderPath + "/");
    if(file) {
      this.storageService.uploadFile(formData).subscribe((httpResponse: HttpResponse<Object>) => {
        fileInfo = httpResponse.body as FileEntity;
        this.files.push(fileInfo.filename);
      }
      );
    }
  }

}
