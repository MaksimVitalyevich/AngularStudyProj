import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CityInfoPipe } from '../city-info.pipe';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CityInfoPipe],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  cityData = {
    country: '',
    region: '',
    cityName: '',
    population: 0,
    cityCode: 0,
    regionNumber: 0,
    founded: 0
  }

  cityCardData: string = '';

  saveCity() {
    const pipe = new CityInfoPipe();
    console.log("Данные отправлены: ", this.cityData);
    this.cityCardData = pipe.transform(this.cityData);
    alert("Данные записаны в строку успешно! Проверь строку ниже...");
  }
}
