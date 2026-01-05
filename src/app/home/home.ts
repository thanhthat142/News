import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-home',
  imports: [FormsModule, CardModule, ButtonModule, NgFor, TableModule, CommonModule, NgClass, NgIf],
  templateUrl: './home.html',
  standalone: true,
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  cardStyle = {
    width: '25rem',
    overflow: 'hidden'
  };

  nameBtn = 'Click me';
  clickMessage = '';
  bindingMessage = '';

  isActive = true;
  isVisible = false;

  newsList = [
    { image: 'assets/images/koi.jpg', title: 'News 1', content: 'Content for news 1' },
    { image: 'assets/images/koi.jpg', title: 'News 2', content: 'Content for news 2' },
    { image: 'assets/images/koi.jpg', title: 'News 3', content: 'Content for news 3' },
  ];

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}
