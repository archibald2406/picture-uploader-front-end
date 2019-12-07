import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import { FormsModule } from '@angular/forms';
import { PictureUploaderService } from '../services/picture-uploader.service';

@NgModule({
  declarations: [SystemComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [PictureUploaderService]
})
export class SystemModule { }
