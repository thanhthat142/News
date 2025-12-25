import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, FormsModule, CardModule, ButtonModule],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.scss'
})
export class App {
  cardStyle = {
    width: '25rem',
    overflow: 'hidden'
  };

  protected readonly title = signal('News');
  description = 'This is an Angular application.';

  nameBtn = 'Click me';
  clickMessage = '';
  bindingMessage = '';
  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
  updateField(): void {
    this.description = 'You have updated the description!';
  }
}
