import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryItemComponent } from './category-item.component';
import { provideHttpClient } from '@angular/common/http';

describe('CategoryItemComponent', () => {
    let component: CategoryItemComponent;
    let fixture: ComponentFixture<CategoryItemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CategoryItemComponent],
            providers: [provideHttpClient()],
        }).compileComponents();

        fixture = TestBed.createComponent(CategoryItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render title', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const title = compiled.querySelector('h2')?.textContent;
        expect(title).toContain('Categories');
    });

    it('should render all categories', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelectorAll('h3').length).toBeGreaterThan(0);
        expect(compiled.querySelectorAll('p').length).toBeGreaterThan(0);
    });

    it('should render category name', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const categoryName = compiled.querySelector('h3')?.textContent;
        console.log('CATEGORY NAME', categoryName);
        expect(categoryName).toBeTruthy();
    });

    it('should render category description', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const categoryDescription = compiled.querySelector('p')?.textContent;
        console.log('CATEGORY DESCRIPTION', categoryDescription);
        expect(categoryDescription).toBeTruthy();
    });
});
