import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './login/edit/edit.component';
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
import { VideoModalComponent } from './publicView/video-modal/video-modal.component';
import { UploaderComponent } from './login/uploadVideos/uploader/uploader.component';
import {EditRemoveMenuComponent} from './login/edit-remove-menu/edit-remove-menu.component';
import {EditRemoveSpecificComponent} from './login/edit-remove-menu/edit-remove-specific/edit-remove-specific.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'login' ,component: LoginComponent },
  {path: 'edit' , component: EditComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'product' , component: ProductComponent},
  {path: 'music' , component: MusicComponent},
  {path: 'commercial' , component: CommercialComponent},
  {path: 'promo' , component: PromoComponent},
  {path: 'events' , component: EventsComponent},
  {path: 'viral' , component: ViralComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'mediaViewer' , component: MediaViewerComponent},
  {path: 'videoModal' , component: VideoModalComponent},
  {path: 'uploadVideo' , component: UploaderComponent},
  {path: 'editRemoveMenu' , component: EditRemoveMenuComponent},
  {path: 'editRemoveSpecific', component: EditRemoveSpecificComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
