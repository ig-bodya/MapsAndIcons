import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Marker } from '../models/marker';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  constructor(private httpClient: HttpClient) { }

  getMarkers(): Promise<Marker[]> {
    return this.httpClient.get<Marker[]>(`${environment.defaultUrl}/locations`).toPromise();
  }
}
