import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppGalleryPageComponent } from './GalleryPage/gallery.component';
import {  HomePageRouting } from './routing.module';

@NgModule({
    declarations: [
        AppGalleryPageComponent
     ],

    imports: [
        BrowserModule,
        HomePageRouting
    ],

    entryComponents: [
     //import popup
    ],
    providers: [ ],
    bootstrap: []

 })
 export class HomeModule { }
