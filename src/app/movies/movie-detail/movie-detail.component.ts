import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movieId: number
  movie: Movie
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) { }

  ngOnInit(): any {
    if (this.route && this.route.snapshot && this.route.snapshot.params && this.route.snapshot.params.id) {
      this.movieId = this.route.snapshot.params.id
      if (this.movieId) {
        this.movieId = +this.movieId
        this.movie = this.moviesService.getmovie(this.movieId);
        return this.movie
      }
    } else {
      this.movieId = null
      this.router.navigate(['movies'])
    }
    return this.movie
  }

}
