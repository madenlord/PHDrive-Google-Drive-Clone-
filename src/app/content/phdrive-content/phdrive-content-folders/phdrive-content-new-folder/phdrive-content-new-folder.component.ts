import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-phdrive-content-new-folder',
  templateUrl: './phdrive-content-new-folder.component.html',
  styleUrls: ['./phdrive-content-new-folder.component.scss']
})
export class PhdriveContentNewFolderComponent implements OnInit {

  @Output() onCreate: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  submit(folderName: string): void {
    this.onCreate.emit(folderName);
  }
}
