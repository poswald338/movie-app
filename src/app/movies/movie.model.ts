export class Movie {
  public name: string;
  public description: string;
  public runTime: number;
  public imagePath: string;

  constructor (name: string, description: string, runTime: number, imagePath: string) {
    this.name = name
    this.description = description
    this.runTime = runTime
    this.imagePath = imagePath
  }
}
