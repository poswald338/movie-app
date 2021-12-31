import { Component, OnInit, Input } from '@angular/core';
import { WatchListService } from 'src/app/watch-list/watchList.service';
import Swal from 'sweetalert2';
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
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Movie has been added to your watch list!',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
