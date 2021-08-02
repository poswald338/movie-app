import { Component, OnInit } from '@angular/core';
import { Movie } from '../movies/movie.model';
import { WatchListService } from '../watch-list/watchList.service';

@Component({
  selector: 'app-watch-again',
  templateUrl: './watch-again.component.html',
  styleUrls: ['./watch-again.component.css']
})
export class WatchAgainComponent implements OnInit {

  constructor(private watchListService: WatchListService) { }

  movies: Movie[];

  ngOnInit(): void {
    this.movies = this.watchListService.getWatchedMovies();
    console.log(this.movies)
  }

}
