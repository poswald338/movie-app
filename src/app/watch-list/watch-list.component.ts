import { Component, OnInit } from '@angular/core';
import { Movie } from '../movies/movie.model';
import { WatchListService } from './watchList.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {
  movies: Movie[];


  constructor(private watchListService: WatchListService) { }

  ngOnInit(): void {
    this.movies = this.watchListService.getMovies()
    this.watchListService.watchListMoviesChanged.subscribe(movies => {
      this.movies = movies;
    })
  }

}
