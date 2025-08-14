import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  cityData = {
    country: '',
    region: '',
    cityName: '',
    cityCode: 0,
    regionNumber: 0
  }

  saveCity() {
    console.log('Город сохранен:', this.cityData);
    alert(`Вы добавили город: ${this.cityData.cityName}, ${this.cityData.country}`);
  }
}
