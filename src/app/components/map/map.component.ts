import { Component, Input, OnInit } from '@angular/core';
import { Marker } from '../../models/marker';
import { Center } from '../../models/center';

const DEFAULT_ZOOM = 5;
const DEFAULT_MARKER_ICON = '../../assets/icons/marker.svg';
const CURRENT_MARKER_ICON = '../../assets/icons/current_marker.svg';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() markers: Marker[];
  @Input() center: Center;

  zoom = DEFAULT_ZOOM;
  carPositionMarker = DEFAULT_MARKER_ICON;
  currentMarker = CURRENT_MARKER_ICON;


  constructor() {
  }

  ngOnInit(): void {
  }

  markerClick(marker: Marker): void {
    this.markers.forEach(item => {
      marker.id === item.id ? marker.isClicked = true : item.isClicked = false;
    })
    this.center.latitude = marker.latitude;
    this.center.longitude = marker.longitude;
  }
}
