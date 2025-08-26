import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-result-two',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './result-two.component.html',
  styleUrl: './result-two.component.scss'
})
export class ResultTwoComponent {
  weatherForm = new FormGroup({
    weatherText: new FormControl('', [Validators.required, Validators.pattern('^[А-ЯЁ][а-яё]+$')]),
    weatherTemp: new FormControl(null, [Validators.required, Validators.min(-50), Validators.max(50)])
  });

  get formattedWeather(): string {
    const { weatherText, weatherTemp } = this.weatherForm.value;
    if (weatherText && weatherTemp !== null) {
      return `${weatherText} - ${weatherTemp} C*`;
    }
    return '';
  }
}
