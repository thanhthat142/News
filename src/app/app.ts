import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, FormsModule, CardModule, ButtonModule, NgFor, TableModule, CommonModule, NgClass, NgIf],
  templateUrl: './app.html',
  standalone: true,
  styleUrls: ['./app.scss']
})
export class App {

}
