import { Component , OnInit } from '@angular/core';

import { GallerySerivce } from './gallery.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [GallerySerivce]
})
export class AppGalleryPageComponent implements OnInit {
  public data: any = [];

  constructor(
    private gallerySerivce: GallerySerivce) {}
  ngOnInit() {
    this.getImage();
  }

  getImage() {
    this.gallerySerivce.getData().subscribe(
      result => {
        if (result) {
                console.log(result);
                this.data = result;
        }
    });
  }
}
