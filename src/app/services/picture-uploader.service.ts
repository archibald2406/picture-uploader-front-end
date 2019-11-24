import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PictureUploaderService {
  baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getImage(filename: string) {
    return this.http.get(`${this.baseUrl}images?filename=${filename}`, { responseType: 'blob' });
  }

  uploadPicture(uploadedPicture: FormData) {
    return this.http.post(`${this.baseUrl}images`, uploadedPicture);
  }
}
