import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGalleryPageComponent } from '../app/Home/GalleryPage/gallery.component';
import { AppHomePageComponent } from './Home/home.component';

const Router: Routes = [
  {
    path: 'gallery',
    component: AppGalleryPageComponent
  },
  {
    path: '',
    component: AppHomePageComponent
  }
];


@NgModule({
  imports: [
      [RouterModule.forRoot(Router)]
    ],
  exports: [RouterModule],
  providers: []
})
export class HomePageRouting {}
