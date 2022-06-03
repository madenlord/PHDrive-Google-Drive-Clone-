import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { FileEntity } from '../models/fileEntity';

@Injectable({
  providedIn: 'root'
})
export class PhdriveStorageService {

  private endpoint: string = "http://localhost:8080/PHDriveSTS/";

  private operations = {
    post: this.endpoint + "upload/",
    get: this.endpoint + "download/",
    delete: this.endpoint + "delete/"
  }

  constructor(private httpClient: HttpClient) { }

  uploadFile(file: File, filePath: string): Observable<FileEntity> {
    filePath = filePath ? filePath : "/";

    const formData = new FormData().append("file", file);

    return this.httpClient.post<FileEntity>(this.operations.post, formData,
           this.httpFileRequestParamBuilder(filePath));
  }

  downloadFile(filePath: string): Observable<File> {
    return this.httpClient.get<File>(this.operations.get,
           this.httpFileRequestParamBuilder(filePath));
  }

  deleteFile(filePath: string): Observable<any> {
    return this.httpClient.delete<FileEntity>(this.operations.delete,
           this.httpFileRequestParamBuilder(filePath));
  }


  private httpFileRequestParamBuilder(filePath: string) {
    return filePath ? {params: new HttpParams().append("path", filePath)} : {};
  }
}
