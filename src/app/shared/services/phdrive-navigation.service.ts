import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { FolderEntity } from '../models/folderEntity';

@Injectable({
  providedIn: 'root'
})
export class PhdriveNavigationService {

  private endpoint: string = "http://localhost:8080/PHDriveSTS/";

  private operations = {
    post: this.endpoint + "mkdir/",
    get: this.endpoint + "dir/",
    delete: this.endpoint + "rm/"
  }

  constructor(private httpClient: HttpClient) { }

  createFolder(newFolderForm: FormData): Observable<FolderEntity> {
    return this.httpClient.post<FolderEntity>(this.operations.post, newFolderForm);
  }

  getFolderContent(folderPath: string): Observable<FolderEntity> {
    return this.httpClient.get<FolderEntity>(this.operations.get,
           this.httpFolderRequestParamBuilder(folderPath));
  }

  deleteFolder(folderPath: string): Observable<FolderEntity> {
    return this.httpClient.delete<FolderEntity>(this.operations.delete,
           this.httpFolderRequestParamBuilder(folderPath));
  }

  private httpFolderRequestParamBuilder(folderPath: string) {
    if(folderPath === "") folderPath = "/";
    return folderPath ? {params: new HttpParams().append("path", folderPath)} : {};
  }
}
