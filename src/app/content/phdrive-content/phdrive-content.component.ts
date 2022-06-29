import { Component, OnInit } from '@angular/core';
import { FolderEntity } from 'src/app/shared/models/folderEntity';
import { NGXLogger } from 'ngx-logger';
import { PhdriveNavigationService } from 'src/app/shared/services/phdrive-navigation.service';
import { PhdriveStorageService } from 'src/app/shared/services/phdrive-storage.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-phdrive-content',
  templateUrl: './phdrive-content.component.html',
  styleUrls: ['./phdrive-content.component.scss']
})
export class PhdriveContentComponent implements OnInit {

  private rootPath: string = ".";
  private encryptPass: string = "encryptPassword1234!";
  folderPath!: string;
  data!: FolderEntity;

  constructor(
    private logger: NGXLogger,
    private route: ActivatedRoute,
    private router: Router,
    private folderService: PhdriveNavigationService,
    private fileService: PhdriveStorageService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.folderPath = typeof(queryParams['path']) !== "undefined" ?
                        this.decryptPath(queryParams['path']) : this.rootPath;
      this.updateData();
    })

  }

  private decryptPath(encPath: string): string {
    const bytes = CryptoJS.AES.decrypt(encPath, this.encryptPass);
    return bytes.toString(CryptoJS.enc.Utf8);
  }

  public updateData(): void {
    this.folderService.getFolderContent(this.folderPath).subscribe(folderContent =>
      this.data = folderContent
    );
  }

  public goTo(path: string): void {
    const encPath = CryptoJS.AES.encrypt(path, this.encryptPass);
    this.router.navigate(['/folder'], {queryParams: {path: encPath}});
  }
}
