import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() moviesClicked = false
  @Output() showMovies = new EventEmitter<boolean>();
  @Input() watchListClicked = false
  @Output() showWatchlist = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
  }

  onSelectMovies() {
    this.moviesClicked = !this.moviesClicked
    this.showMovies.emit(this.moviesClicked);
  }

  onSelectWatchlist() {
    this.watchListClicked = !this.watchListClicked
    this.showWatchlist.emit(this.watchListClicked);
  }

}