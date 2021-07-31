export class Movie {
  public movie_id: number;
  public name: string;
  public description: string;
  public imagePath: string;
  public rating?: number

  constructor ({
    id = 0,
    overview = '',
    original_title = '',
    poster_path = '',
    ...rest
  }) {
    Object.assign(this, rest)
    this.movie_id = id;
    this.name = original_title;
    this.description = overview;
    this.imagePath = poster_path;
  }
}
