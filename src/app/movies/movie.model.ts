export class Movie {
  public name: string;
  public description: string;
  public runTime: number;
  public imagePath: string;
  public isWatched: boolean;

  constructor (name: string, description: string, runTime: number, imagePath: string, isWatched: boolean) {
    this.name = name
    this.description = description
    this.runTime = runTime
    this.imagePath = imagePath
    this.isWatched = isWatched
  }
}
