import { Component } from '@angular/core';
import { Category } from '../category/category';
import { CategoryService } from '../category/category.service';

@Component({
    selector: 'app-category-item',
    standalone: true,
    imports: [],
    templateUrl: './category-item.component.html',
})
export class CategoryItemComponent {
    categories: Category[] = [];

    constructor(private categoryService: CategoryService) {
        this.categoryService.getAllCategories().subscribe((categories) => {
            this.categories = categories;
        });
    }
}
