import { Routes } from '@angular/router';
import { CategoryItemComponent } from './category-item/category-item.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'shop', component: CategoryItemComponent },
];
