import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGalleryPageComponent } from './GalleryPage/gallery.component';

const appRoutes: Routes = [
    { path: ''}
    { path: 'gallery',  component: AppGalleryPageComponent },
    ]
   },

];

@NgModule({
    imports: [
        [RouterModule.forChild(appRoutes)],
    ],
    exports: [ RouterModule ],
    providers: []
})
export class HomePageRouting {}
