import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadernavComponent } from './headernav/headernav.component';
import { FigureOneComponent } from './figure-one/figure-one.component';
import { FormComponent } from './form/form.component';
import { FigureTwoComponent } from './figure-two/figure-two.component';
import { FooterComponent } from './footer/footer.component';
import { ResultComponent } from './result/result.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [RouterOutlet, 
  HeadernavComponent, 
  FigureOneComponent, 
  FormComponent, 
  FigureTwoComponent, 
  FooterComponent, 
  ResultComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'CityVisitCard';
}
