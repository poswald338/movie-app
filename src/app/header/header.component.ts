import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Navigation, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnChanges {
  show = false
  isOpen = false
  private subs = new Subscription()

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subs.add(
      this.router.events.subscribe((y: NavigationEnd) => {
        if(y instanceof NavigationEnd) {
          if (this.router.url === "/" || this.router.url === "/home") {
            this.show = false
          } else {
            this.show = true
          }
        }
      })
    )
  }

  ngOnChanges() {

  }


}
