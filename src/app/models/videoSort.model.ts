export class VideoSort {
    homePage = [];
    productPage = [];
    musicPage = [];
    commercialPage = [];
    promoPage = [];
    eventsPage = [];
    viralPage = [];


    constructor(home : string[], product : string[], music: string[], commercial: string[], promo: string[], events: string[], viral: string[]) {
        this.homePage = home || [];
        this.productPage = product || [];
        this.musicPage = music || [];
        this.commercialPage = commercial || [];
        this.promoPage = promo || [];
        this.eventsPage = events || [];
        this.viralPage = viral || [];
    }

}