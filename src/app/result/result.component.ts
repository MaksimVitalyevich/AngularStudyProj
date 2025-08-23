import { Component, OnInit } from "@angular/core";
import { CityEventsService, EventItem } from "../city-events.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-result',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './result.component.html',
    styleUrl: "./result.component.scss"
})
export class ResultComponent implements OnInit {
    selectedCityId = 1;
    events: EventItem[] = [];
    newEvent: Partial<EventItem> = {};

    constructor(private eventService: CityEventsService) {}

    ngOnInit() {
        this.loadEvents();
    }

    loadEvents(): void {
        this.eventService.getEventsByCity(this.selectedCityId).subscribe(data => {
            console.log('Полученные события: ', data);
            this.events = data;
        });
    }

    switchCity(cityId: string) {
        this.selectedCityId = +cityId
        this.loadEvents();
    }

    addEvent(): void {
        if (!this.newEvent.title || !this.newEvent.date) return;

        const event: EventItem = {
            id: this.selectedCityId,
            title: this.newEvent.title!,
            date: this.newEvent.date!,
            place: this.newEvent.place || '',
            description: this.newEvent.description || ''
        };

        this.eventService.addEvent(this.selectedCityId, event).subscribe(() => {
            this.newEvent = {},
            this.loadEvents();
        });
    }

    deleteEvent(id: number): void {
        this.eventService.deleteEvent(id).subscribe(() => this.loadEvents());
    }

    editEvent(event: EventItem): void {
        const updateTitle = prompt('Новое название: ', event.title);
        if (updateTitle !== null) {
            const updateEvent = { ...event, title: updateTitle };
            this.eventService.updateEvent(event.id!, updateEvent).subscribe(() => this.loadEvents());
        }
    }
}