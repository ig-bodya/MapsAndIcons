import { Component, Input, OnInit } from '@angular/core';
import { Marker } from '../../models/marker';
import { Point } from '../../models/point';

const DEFAULT_ZOOM = 5;
const DEFAULT_MARKER_ICON = '../../assets/icons/marker.svg';
const CURRENT_MARKER_ICON = '../../assets/icons/current_marker.svg';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  @Input() markers: Marker[];
  @Input() center: Point;

  zoom = DEFAULT_ZOOM;
  carPositionMarker = DEFAULT_MARKER_ICON;
  currentMarker = CURRENT_MARKER_ICON;

  constructor() {
  }

  markerClick(marker: Marker): void {
    this.markers.forEach(item => {
      marker.isClicked = marker.id === item.id;
    });
    this.center.latitude = marker.latitude;
    this.center.longitude = marker.longitude;
  }
}
