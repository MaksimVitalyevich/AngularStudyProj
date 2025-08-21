import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CityInfoPipe } from '../city-info.pipe';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CityInfoPipe],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  onlyTwoDigits = new RegExp(/^\d{1,2}$/);

  cityData = new FormGroup({
    country: new FormControl('', Validators.required),
    region: new FormControl('', Validators.required),
    cityName: new FormControl('', Validators.required),
    population: new FormControl(0),
    cityCode: new FormControl(0),
    regionNumber: new FormControl('', Validators.pattern(this.onlyTwoDigits)),
    founded: new FormControl(1000)
  });

  weatherForm = new FormGroup({
    weatherText: new FormControl('', [Validators.required, Validators.pattern('^[А-ЯЁ][а-яё]+$')]),
    weatherTemp: new FormControl(null, [Validators.required, Validators.min(-50), Validators.max(50)])
  });

  cityCardData: string = '';

  saveCity() {
    const pipe = new CityInfoPipe();
    console.log("Данные отправлены: ", this.cityData.value);
    this.cityCardData = pipe.transform(this.cityData.value);
    alert("Данные записаны в строку успешно! Проверь строку ниже...");
  }

  get formattedWeather(): string {
    const { weatherText, weatherTemp } = this.weatherForm.value;
    if (weatherText && weatherTemp !== null) {
      return `${weatherText} - ${weatherTemp} C*`;
    }
    return '';
  }
}
