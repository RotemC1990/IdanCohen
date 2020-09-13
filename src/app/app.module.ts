import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './login/edit/edit.component';
import { UploadComponent } from './login/upload/upload.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EditComponent,
    UploadComponent,
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
    VideoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
