import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './publicView/home/home.component';
import { ProductComponent } from './publicView/product/product.component';
import { MusicComponent } from './publicView/music/music.component';
import { CommercialComponent } from './publicView/commercial/commercial.component';
import { PromoComponent } from './publicView/promo/promo.component';
import { EventsComponent } from './publicView/events/events.component';
import { ViralComponent } from './publicView/viral/viral.component';
import { AboutComponent } from './publicView/about/about.component';
import { UploaderComponent } from './login/uploadVideos/uploader/uploader.component';
import { EditRemoveMenuComponent } from './login/edit-remove-menu/edit-remove-menu.component';
import { EditRemoveSpecificComponent } from './login/edit-remove-menu/edit-remove-specific/edit-remove-specific.component';
import { HomePageSortComponent } from './login/videosSort/home-page-sort/home-page-sort.component';
import { ProductPageSortComponent } from './login/videosSort/product-page-sort/product-page-sort.component';
import { MusicPageSortComponent } from './login/videosSort/music-page-sort/music-page-sort.component';
import { CommercialPageSortComponent } from './login/videosSort/commercial-page-sort/commercial-page-sort.component';
import { PromoPageSortComponent } from './login/videosSort/promo-page-sort/promo-page-sort.component';
import { EventsPageSortComponent } from './login/videosSort/events-page-sort/events-page-sort.component';
import { ViralPageSortComponent } from './login/videosSort/viral-page-sort/viral-page-sort.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorized = () => redirectUnauthorizedTo([ '' ]);

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'product', component: ProductComponent },
	{ path: 'music', component: MusicComponent },
	{ path: 'commercial', component: CommercialComponent },
	{ path: 'promo', component: PromoComponent },
	{ path: 'events', component: EventsComponent },
	{ path: 'viral', component: ViralComponent },
	{ path: 'about', component: AboutComponent },
	{
		path: 'uploadVideo',
		component: UploaderComponent,
		canActivate: [ AngularFireAuthGuard ],
		data: { authGuardPipe: redirectUnauthorized }
	},
	{
		path: 'editRemoveMenu',
		component: EditRemoveMenuComponent,
		canActivate: [ AngularFireAuthGuard ],
		data: { authGuardPipe: redirectUnauthorized }
	},
	{
		path: 'editRemoveSpecific',
		component: EditRemoveSpecificComponent,
		canActivate: [ AngularFireAuthGuard ],
		data: { authGuardPipe: redirectUnauthorized }
	},
	{
		path: 'homeSort',
		component: HomePageSortComponent,
		canActivate: [ AngularFireAuthGuard ],
		data: { authGuardPipe: redirectUnauthorized }
	},
	{
		path: 'productSort',
		component: ProductPageSortComponent,
		canActivate: [ AngularFireAuthGuard ],
		data: { authGuardPipe: redirectUnauthorized }
	},
	{
		path: 'musicSort',
		component: MusicPageSortComponent,
		canActivate: [ AngularFireAuthGuard ],
		data: { authGuardPipe: redirectUnauthorized }
	},
	{
		path: 'commercialSort',
		component: CommercialPageSortComponent,
		canActivate: [ AngularFireAuthGuard ],
		data: { authGuardPipe: redirectUnauthorized }
	},
	{
		path: 'promoSort',
		component: PromoPageSortComponent,
		canActivate: [ AngularFireAuthGuard ],
		data: { authGuardPipe: redirectUnauthorized }
	},
	{
		path: 'eventsSort',
		component: EventsPageSortComponent,
		canActivate: [ AngularFireAuthGuard ],
		data: { authGuardPipe: redirectUnauthorized }
	},
	{
		path: 'viralSort',
		component: ViralPageSortComponent,
		canActivate: [ AngularFireAuthGuard ],
		data: { authGuardPipe: redirectUnauthorized }
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
