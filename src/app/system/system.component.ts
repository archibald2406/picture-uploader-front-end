import { Component } from '@angular/core';
import { PictureUploaderService } from '../services/picture-uploader.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent {
  selectedImage: File = null;
  imageToShow = null;
  imageToShowPath = '';

  isLoaded = false;

  constructor(private pictureUploadService: PictureUploaderService,
              private authService: AuthService) {}

  onFileSelected(event) {
    this.selectedImage = event.target.files[0] as File;
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedImage);

    this.pictureUploadService.uploadPicture(fd)
      .subscribe(responce => console.log(responce));
  }

  browsePicture() {
    this.isLoaded = false;

    this.pictureUploadService.getImage(this.imageToShowPath)
      .subscribe(responce => {
        if (responce.size) {
          this.createImageFromBlob(responce);
        }
      });
  }

  createImageFromBlob(image: Blob) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
       this.imageToShow = reader.result;
       this.isLoaded = true;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  onLogoutButtonClicked() {
    this.authService.logout();
  }
}
