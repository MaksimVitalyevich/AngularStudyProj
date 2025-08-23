import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface EventItem {
  id?: number;
  title: string;
  date: string;
  place: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class CityEventsService {
  private apiUrl = 'http://localhost:3000/events';

  constructor(private httpClient: HttpClient) {}

  getEventsByCity(cityId: number): Observable<EventItem[]> {
    return this.httpClient.get<EventItem[]>(`${this.apiUrl}?cityId=${cityId}`);
  }

  addEvent(cityId: number, event: EventItem): Observable<EventItem> {
    return this.httpClient.post<EventItem>(this.apiUrl, { ...event, cityId});
  }

  updateEvent(id: number, event: EventItem): Observable<EventItem> {
    return this.httpClient.put<EventItem>(`${this.apiUrl}/${id}`, event);
  }

  deleteEvent(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}
