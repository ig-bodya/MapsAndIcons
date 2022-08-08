import { Component } from '@angular/core';
import { MarkerService } from './services/marker.service';
import { Marker } from './models/marker';
import { Center } from './models/center';

const DEFAULT_CENTER: Center ={
  latitude: 49.842957,
  longitude: 24.031111
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  markers: Marker[] = [];
  filteredItems: Marker[] = [];
  center: Center = DEFAULT_CENTER

  constructor(private markersService: MarkerService) {
    this.markersService.getMarkers().then(icons => {
        this.markers = icons;
        this.filteredItems = [...this.markers];
        this.filteredItems.forEach(item => item.isClicked = false);
      }
    )
  }

  chooseMarker(center: Center): void {
    this.center.latitude = center.latitude;
    this.center.longitude = center.longitude
  }

  filterMarkers(searchedValue: string): void {
    this.markers = this.filteredItems.filter((item: { name: string; }) =>
      item.name.toLocaleLowerCase().includes(searchedValue.toLocaleLowerCase()));
  }
}
