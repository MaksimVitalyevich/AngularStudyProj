import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-result',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './result.component.html',
    styleUrl: "./result.component.scss"
})
export class ResultComponent {
    cityEntries: { label: string, value: string }[] = [];

    constructor(private router: Router) {
        const nav = this.router.getCurrentNavigation();
        const data = nav?.extras.state?.['data'];

        if (data) {
            // Преобразуем в массив для ngFor
            this.cityEntries = [
                { label: 'Страна', value: data.country },
                { label: 'Область/Регион', value: data.region },
                { label: 'Город', value: data.cityName },
                { label: 'Код города', value: data.cityCode },
                { label: 'Номер региона', value: data.regionNumber }
            ];
        }
    }
}