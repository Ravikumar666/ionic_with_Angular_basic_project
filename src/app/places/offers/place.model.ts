export class Place {
  constructor(
    public id: string,
    public title: string,
    public discription: string,
    public imgUrl: string,
    public price: string,
    public availableFrom: Date,
    public availableTo: Date,
    public userId: string
  ) {}
}
