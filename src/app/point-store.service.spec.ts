/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PointStoreService } from './point-store.service';

describe('Service: PointStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PointStoreService]
    });
  });

  it('should ...', inject([PointStoreService], (service: PointStoreService) => {
    expect(service).toBeTruthy();
  }));
});
