import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Marker } from '../../models/marker';
import { Point } from '../../models/point';

const DEFAULT_COLOR = '#fff';
const SELECTED_COLOR = '#f8fe94';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {

  @Input() markers: Marker[] = [];
  @Output() emitSearchText: EventEmitter<string> = new EventEmitter<string>();
  @Output() emitChangeCenter: EventEmitter<Point> = new EventEmitter<Point>();
  selectedColor = SELECTED_COLOR;
  defaultColor = DEFAULT_COLOR;

  constructor() {
  }

  chooseMarker(marker: Marker): void {
    this.uncheckMarkers();
    marker.isClicked = true;
    this.setCenter(marker);
  }

  uncheckMarkers(): void {
    this.markers.forEach(marker => {
      marker.isClicked = false;
    });
  }

  setCenter(marker: Marker): void {
    this.emitChangeCenter.emit({
      latitude: marker.latitude,
      longitude: marker.longitude,
    });
  }

  changeSearchText(event: any): void {
    this.emitSearchText.emit(event.target.value);
  }
}
