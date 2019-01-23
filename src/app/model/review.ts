export class Review {
  constructor(public id: number,
              public productId: Number,
              public timestamp: Date,
              public user: string,
              public rating: number,
              public comment: string,
              ) {}
}
