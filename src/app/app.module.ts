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
