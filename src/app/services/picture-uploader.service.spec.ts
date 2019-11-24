import { TestBed } from '@angular/core/testing';

import { PictureUploaderService } from './picture-uploader.service';

describe('PictureUploaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PictureUploaderService = TestBed.get(PictureUploaderService);
    expect(service).toBeTruthy();
  });
});
