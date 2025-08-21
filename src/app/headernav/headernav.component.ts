import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-headernav',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './headernav.component.html',
  styleUrl: './headernav.component.scss'
})
export class HeadernavComponent {
  IsloggedIn: boolean = false;

  login() {
    this.IsloggedIn = true;
    alert("Вы успешно вошли на сайт!");
  }

  logout() {
    this.IsloggedIn = false;
    alert("Выход выполнен!");
  }

  reloadPage() {
    window.location.reload();
  }
}
