import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  saveCity() {
    console.log("Данные отправлены: ", this.cityData);
    this.router.navigate(['/result'], {state: {data: this.cityData } });
  }
}
