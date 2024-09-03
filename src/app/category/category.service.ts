import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category } from './category';

interface CategoryResponse {
    categoryid: number;
    categoryname: string;
    description: string;
}

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    private http = inject(HttpClient);
    private categories: Category[] = [];

    baseUrl = 'http://localhost:3000';

    constructor() {}

    /**
     * Get a list of all categories from the server
     * @returns observable of all categories
     */
    getAllCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(`${this.baseUrl}/categories`).pipe(
            map((categories) => {
                const categoryList = categories.map(
                    (json: any) =>
                        new Category(
                            json.categoryid,
                            json.categoryname,
                            json.description
                        )
                );
                this.categories = categoryList;
                return categoryList;
            })
        );
    }
}
