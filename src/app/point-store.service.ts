import { Injectable } from '@angular/core';

@Injectable()
export class PointStoreService {

  available: Number = 50;
  received: Number = 0;

  constructor() {
  }

}
