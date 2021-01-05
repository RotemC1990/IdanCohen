import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-navigation-bar',
  templateUrl: './sort-navigation-bar.component.html',
  styleUrls: ['./sort-navigation-bar.component.css']
})
export class SortNavigationBarComponent implements OnInit {
  @Input() currentSortPage: string;
  constructor() { }

  ngOnInit(): void {
    this.setTabColor();
  }


  private setTabColor() {
    switch (this.currentSortPage) {
			case 'Product': {
        document.getElementById("product").style.color = "#41b792";
        break;
			}
			case 'Music': {
        document.getElementById("music").style.color = "#41b792";
        break;
			}
			case 'Commercial': {
        document.getElementById("commercial").style.color = "#41b792";
        break;
			}
			case 'Promo': {
        document.getElementById("promo").style.color = "#41b792";
        break;
			}
			case 'Events': {
        document.getElementById("events").style.color = "#41b792";
        break;
			} 
			case 'Viral': {
        document.getElementById("viral").style.color = "#41b792";
        break;
      }
      case 'About': {
        document.getElementById("about").style.color = "#41b792";
        break;
			}
      case 'Home': {
        document.getElementById("home").style.color = "#41b792";
        break;
			}
		}
  }
}
