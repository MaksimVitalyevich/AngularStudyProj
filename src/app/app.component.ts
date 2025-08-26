import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HeadernavComponent } from './headernav/headernav.component';
import { FigureOneComponent } from './figure-one/figure-one.component';
import { FormComponent } from './form/form.component';
import { FigureTwoComponent } from './figure-two/figure-two.component';
import { FooterComponent } from './footer/footer.component';
import { ResultComponent } from './result/result.component';
import { ResultTwoComponent } from './result-two/result-two.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [RouterOutlet,
  RouterModule, 
  HeadernavComponent, 
  FigureOneComponent, 
  FormComponent,
  ResultComponent,
  ResultTwoComponent, 
  FigureTwoComponent, 
  FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'CityVisitCard';
}
