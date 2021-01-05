import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './publicView/home/home.component';
import { ProductComponent } from './publicView/product/product.component';
import { MusicComponent } from './publicView/music/music.component';
import { CommercialComponent } from './publicView/commercial/commercial.component';
import { PromoComponent } from './publicView/promo/promo.component';
import { EventsComponent } from './publicView/events/events.component';
import { ViralComponent } from './publicView/viral/viral.component';
import { AboutComponent } from './publicView/about/about.component';
import { MediaViewerComponent } from './media-viewer/media-viewer.component';
import { NavigationBarComponent } from './publicView/constants/navigation-bar/navigation-bar.component';
import { FooterComponent } from './publicView/constants/footer/footer.component';
import { VideoModalComponent } from './publicView/video-modal/video-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import {FirebaseService} from './services/firebase.service';
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FilesUploadMetadata } from './models/FilesUploadMetadata';
import { DropzoneDirective } from './login/uploadVideos/dropzone.directive';
import { UploaderComponent } from './login/uploadVideos/uploader/uploader.component';
import { UploadTaskComponent } from './login/uploadVideos/upload-task/upload-task.component';
import { EditRemoveMenuComponent } from './login/edit-remove-menu/edit-remove-menu.component';
import { EditRemoveSpecificComponent } from './login/edit-remove-menu/edit-remove-specific/edit-remove-specific.component';
import { AdminNavigationBarComponent } from './login/admin-navigation-bar/admin-navigation-bar.component';
import { HomePageSortComponent } from './login/videosSort/home-page-sort/home-page-sort.component';
import { ProductPageSortComponent } from './login/videosSort/product-page-sort/product-page-sort.component';
import { MusicPageSortComponent } from './login/videosSort/music-page-sort/music-page-sort.component';
import { CommercialPageSortComponent } from './login/videosSort/commercial-page-sort/commercial-page-sort.component';
import { PromoPageSortComponent } from './login/videosSort/promo-page-sort/promo-page-sort.component';
import { EventsPageSortComponent } from './login/videosSort/events-page-sort/events-page-sort.component';
import { ViralPageSortComponent } from './login/videosSort/viral-page-sort/viral-page-sort.component';
import { SortNavigationBarComponent } from './login/videosSort/sort-navigation-bar/sort-navigation-bar.component';
import { VideoTemplateComponent } from './publicView/video-template/video-template.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent,
    MusicComponent,
    CommercialComponent,
    PromoComponent,
    EventsComponent,
    ViralComponent,
    AboutComponent,
    MediaViewerComponent,
    NavigationBarComponent,
    FooterComponent,
    
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent,
    EditRemoveMenuComponent,
    EditRemoveSpecificComponent,
    AdminNavigationBarComponent,
    HomePageSortComponent,
    ProductPageSortComponent,
    MusicPageSortComponent,
    CommercialPageSortComponent,
    PromoPageSortComponent,
    EventsPageSortComponent,
    ViralPageSortComponent,
    SortNavigationBarComponent,
    VideoTemplateComponent,


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    
    
    
    
  ],
  providers: [FirebaseService,VideoModalComponent,FilesUploadMetadata],
  bootstrap: [AppComponent]
})
export class AppModule { }
