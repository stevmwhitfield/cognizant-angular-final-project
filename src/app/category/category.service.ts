import { Injectable } from '@angular/core';
import { Category } from './category';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    private categories: Category[] = [];

    constructor() {
        this.categories = [
            {
                categoryId: 1,
                categoryName: 'Electronics',
                description: 'Electronic devices and gadgets',
            },
            {
                categoryId: 2,
                categoryName: 'Fashion',
                description: 'Clothing, shoes, and accessories',
            },
            {
                categoryId: 3,
                categoryName: 'Home and Garden',
                description: 'Furniture, decor, and household items',
            },
            {
                categoryId: 4,
                categoryName: 'Sports and Outdoors',
                description:
                    'Equipment, apparel, and gear for outdoor activities',
            },
            {
                categoryId: 5,
                categoryName: 'Books and Media',
                description: 'Books, music, movies, and video games',
            },
        ];
    }

    getAll(): Category[] {
        return this.categories;
    }
}
