import { Component, OnInit, Input } from '@angular/core';
import { WatchListService } from 'src/app/watch-list/watchList.service';
import { Movie } from '../../movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() imagePath: string;
  @Input() title: string;
  @Input() description: string;
  @Input() index: number;

  constructor(
    private watchListService: WatchListService
  ) { }

  ngOnInit(): void {
  }

  onAddWatchlist() {
    this.watchListService.addMovie(this.index)
  }

}
