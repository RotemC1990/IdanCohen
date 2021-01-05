import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  @Input() currentPage:string;
  constructor() { }

  ngOnInit(): void {
    this.setTabColor();
  }

  private setTabColor() {
    switch (this.currentPage) {
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
