import { Component } from '@angular/core';

@Component({
  selector: 'app-headernav',
  standalone: true,
  templateUrl: './headernav.component.html',
  styleUrl: './headernav.component.scss'
})
export class HeadernavComponent {
  logout() {
    alert("Выход выполнен!");
  }
}
