import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { ToastrService } from 'ngx-toastr';
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
    private toastr: ToastrService,
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

    this.navigationService.createFolder(newFolderForm).subscribe((response: HttpResponse<FolderEntity>) => {
      this.folders.push(folderName);
      this.foldersChange.emit(this.folders);
      this.toastr.success("Folder stored successfully", "Success");
    }, (response: HttpResponse<FolderEntity>) => {
      const httpErrorCode: number = response.status;
      let errorMessage: string;
      switch(httpErrorCode) {
        case 406: errorMessage = `Folder name ${folderName} is not valid`; break;
        case 409: errorMessage = `Folder ${folderName} already exists`; break;
        case 500: errorMessage = "Internal server error"; break;
        default: errorMessage = "Unknown error"; break;
      }
      this.toastr.error(errorMessage, "Failure");
    }
    );
  }
}
