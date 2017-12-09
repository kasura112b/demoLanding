import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppGalleryPageComponent } from './GalleryPage/gallery.component';

@NgModule({
    declarations: [
        AppGalleryPageComponent
     ],

    imports: [
        BrowserModule,
    ],

    entryComponents: [
     // import popup
    ],
    providers: [ ],
    bootstrap: []

 })
 export class HomeModule { }
