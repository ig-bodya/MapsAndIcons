import { Component, OnInit } from '@angular/core';
import { MarkerService } from './services/marker.service';
import { Marker } from './models/marker';
import { Point } from './models/point';

const DEFAULT_CENTER: Point = {
  latitude: 49.842957,
  longitude: 24.031111,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  markers: Marker[] = [];
  filteredItems: Marker[] = [];
  center: Point = DEFAULT_CENTER;

  constructor(private markersService: MarkerService) {
  }

  ngOnInit(): void {
    this.markersService.getMarkers().then(icons => {
      this.markers = icons;
      this.filteredItems = [...this.markers];
    });
  }

  chooseMarker(center: Point): void {
    this.center.latitude = center.latitude;
    this.center.longitude = center.longitude;
  }

  filterMarkers(searchedValue: string): void {
    this.markers = this.filteredItems.filter((item: { name: string; }) =>
      item.name.toLocaleLowerCase().includes(searchedValue.toLocaleLowerCase()));
  }
}
