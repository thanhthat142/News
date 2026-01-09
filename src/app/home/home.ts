import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { NewItemComponent } from '../shared/new-item/new-item';
import { NewItems } from '../shared/types/type-item';
@Component({
  selector: 'app-home',
  imports: [FormsModule, CardModule, ButtonModule, TableModule, CommonModule, NewItemComponent],
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

  news: NewItems[] = [
    { id: 1, image: 'assets/images/koi.jpg', title: 'News 1', content: 'Content for news 1' },
    { id: 2, image: 'assets/images/koi.jpg', title: 'News 2', content: 'Content for news 2' },
    { id: 3, image: 'assets/images/koi.jpg', title: 'News 3', content: 'Content for news 3' },
    { id: 4, image: 'assets/images/koi.jpg', title: 'News 4', content: 'Content for news 4' },
  ];

  handleDelete = (id: number) => {
    const newsIndex = this.news.findIndex(item => item.id === id);
    if (newsIndex !== -1) {
      this.news.splice(newsIndex, 1);
      this.news = [...this.news]; // Cập nhật (thay đổi) tham chiếu để kích hoạt cơ chế phát hiện thay đổi (change detection).
    }
  };

  onClickMe() {
    this.clickMessage = 'You are suck!';
  }
}
