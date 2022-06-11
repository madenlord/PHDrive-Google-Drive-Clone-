import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
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

  downloadFile(filePath: string): Observable<HttpResponse<Blob>> {
    return this.httpClient.get(this.operations.get, {
      observe: 'response',
      responseType: 'blob',
      params: new HttpParams().append("file", filePath)
    });
  }

  deleteFile(filePath: string): Observable<any> {
    return this.httpClient.delete<FileEntity>(this.operations.delete,
           this.httpFileRequestParamBuilder(filePath));
  }


  private httpFileRequestParamBuilder(filePath: string): Object {
    return filePath ? {params: new HttpParams().append("path", filePath)} : {};
  }
}
