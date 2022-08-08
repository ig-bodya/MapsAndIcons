import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Marker } from '../../models/marker';
import { Center } from '../../models/center';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  @Input() markers: Marker[] = [];
  @Output() emitSearchText: EventEmitter<string> = new EventEmitter<string>();
  @Output() emitCenter: EventEmitter<Center> = new EventEmitter<Center>();
  placeholderText = 'Search';
  selectedColor = '#f8fe94';
  defaultColor = '#fff';

  constructor() {
  }

  ngOnInit(): void {
  }

  chooseMarker(marker: Marker): void {
    this.uncheckMarkers();
    marker.isClicked = true;
    this.setCenter(marker);
  }

  uncheckMarkers(): void {
    this.markers.forEach(marker => {
      marker.isClicked = false;
    })
  }

  setCenter(marker: Marker): void {
    this.emitCenter.emit({
      latitude: marker.latitude,
      longitude: marker.longitude,
    })
  }

  changeSearchText(event: any): void {
    this.emitSearchText.emit(event.target.value);
  }
}
