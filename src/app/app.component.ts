import { Component, OnInit } from '@angular/core';
import { PictureUploaderService } from './services/picture-uploader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedImage: File = null;
  imageToShow = null;
  imageToShowPath = '';

  isLoaded = false;

  constructor(private pictureUploadService: PictureUploaderService) {}

  ngOnInit() {
  }

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
}
