import { Routes } from '@angular/router';
import { App } from './app';
import { HomeComponent } from './home/home';
import { DetailComponent } from './detail/detail';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'detail/:id', component: DetailComponent }
];
