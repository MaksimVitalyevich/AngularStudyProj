import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CityInfoPipe } from '../city-info.pipe';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CityInfoPipe],
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

  cityCardData: string = '';

  saveCity() {
    const pipe = new CityInfoPipe();
    console.log("Данные отправлены: ", this.cityData.value);
    this.cityCardData = pipe.transform(this.cityData.value);
    alert("Данные записаны в строку успешно! Проверь строку ниже...");
  }
}
