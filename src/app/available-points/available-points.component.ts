import { Component, OnInit } from '@angular/core';
import { PointStoreService } from '../point-store.service';

@Component({
  selector: 'available-points',
  templateUrl: './available-points.component.html',
  styleUrls: ['./available-points.component.css']
})
export class AvailablePointsComponent implements OnInit {
  points: PointStoreService;

  constructor(points: PointStoreService) {
    this.points = points;
  }

  ngOnInit() {
  }

}
