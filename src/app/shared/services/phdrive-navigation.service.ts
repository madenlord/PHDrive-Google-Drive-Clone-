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

  createFolder(folderPath: string): Observable<FolderEntity> {
    const options = folderPath ?
          {params: new HttpParams().append("path", folderPath)} : {};
    return this.httpClient.post<FolderEntity>(this.operations.post, options);
  }

  getFolderContent(folderPath: string): Observable<FolderEntity> {
    const options = folderPath ?
          {params: new HttpParams().append("path", folderPath)} : {};
    return this.httpClient.get<FolderEntity>(this.operations.get, options);
  }

  deleteFolder(folderPath: string): Observable<FolderEntity> {
    const options = folderPath ?
          {params: new HttpParams().append("path", folderPath)} : {};
    return this.httpClient.delete<FolderEntity>(this.operations.delete, options);
  }
}
