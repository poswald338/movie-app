import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'movie-app';

  ngOnInit() {
  }

  ngOnChanges() {}

  // setMoviesClicked(event: boolean) {
  //   if (event === true) {
  //     this.moviesClicked = true
  //   } else {
  //     this.moviesClicked = false
  //   }
  //   this.watchListClicked = false;
  // }

  // setWatchListClicked(event: boolean){
  //   if (event === true) {
  //     this.watchListClicked = true
  //   } else {
  //     this.watchListClicked = false
  //   }
  //   this.moviesClicked = false;
  // }
}
