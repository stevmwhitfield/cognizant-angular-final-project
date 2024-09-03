import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import {
    HttpTestingController,
    provideHttpClientTesting,
} from '@angular/common/http/testing';
import { CategoryService } from './category.service';
import { Category } from './category';

describe('CategoryService', () => {
    let service: CategoryService;
    let http: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CategoryService,
                provideHttpClient(),
                provideHttpClientTesting(),
            ],
        });
        service = TestBed.inject(CategoryService);
        http = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return all categories', () => {
        const mockResponse = [
            new Category(1, 'Category 1', 'Category 1 description'),
            new Category(2, 'Category 2', 'Category 2 description'),
        ];

        service.getAllCategories().subscribe((categories) => {
            console.log('CATEGORIES', categories);
            console.log('MOCK RESPONSE', mockResponse);
            console.log(categories === mockResponse);
            expect(categories.length).toBeGreaterThan(0);
            expect(categories).toEqual(mockResponse);
        });

        const req = http.expectOne(`${service.baseUrl}/categories`);
        expect(req.request.method).toBe('GET');
        req.flush(mockResponse);
    });
});
