import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { NewItemComponent } from '../shared/new-item/new-item';
import { NewItems } from '../shared/types/type-item';
import { HttpClient } from '@angular/common/http';
import { NewsService } from '../../services/NewsSevice';
import { map, Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  imports: [FormsModule, CardModule, ButtonModule, TableModule, CommonModule, NewItemComponent],
  templateUrl: './home.html',
  standalone: true,
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit, DoCheck, OnDestroy {
  cardStyle = {
    width: '25rem',
    overflow: 'hidden'
  };

  nameBtn = 'Click me';
  clickMessage = '';
  bindingMessage = '';

  isActive = true;
  isVisible = true;

  getBlogAPI: Subscription;

  news: NewItems[] = [
    { id: 1, image: 'assets/images/koi.jpg', title: 'News 1', content: 'Content for news 1' },
    { id: 2, image: 'assets/images/koi.jpg', title: 'News 2', content: 'Content for news 2' },
    { id: 3, image: 'assets/images/koi.jpg', title: 'News 3', content: 'Content for news 3' },
    { id: 4, image: 'assets/images/koi.jpg', title: 'News 4', content: 'Content for news 4' },
  ];

  constructor(private NewsService: NewsService) {
    console.log('HomeComponent initialized');
    this.getBlogAPI = new Subscription();
  }

  ngOnInit(): void {
    // console.log('HomeComponent ngOnInit called');
    this.getBlogAPI = this.NewsService.getNews().pipe(
      map(({ data }) =>
        data.map((item: any) => {
          return {
            ...item,
            name: item.title,
            content: item.body,
            image: 'assets/images/koi.jpg',
          };
        }).filter(news => news.content > 400000)
      ),
    ).subscribe((res) => {
      this.news = res;
    });
  }

  ngOnDestroy(): void {
    if (this.getBlogAPI) {
      this.getBlogAPI.unsubscribe();
      console.log('getBlogAPI unsubscribed');
    }
  }

  ngDoCheck(): void {
    // console.log('HomeComponent ngDoCheck called');
  }

  handleChangeVisible = () => {
    this.isVisible = false;
  }

  handleDelete = (id: number) => {
    // const newsIndex = this.news.findIndex(item => item.id === id);
    // if (newsIndex !== -1) {
    //   this.news.splice(newsIndex, 1);
    //   this.news = [...this.news]; // Cập nhật (thay đổi) tham chiếu để kích hoạt cơ chế phát hiện thay đổi (change detection).
    // }
    this.news = this.news.filter(item => item.id !== id);
  };

  onClickMe() {
    this.clickMessage = 'You are suck!';
  }
}
