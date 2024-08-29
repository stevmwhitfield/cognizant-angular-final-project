import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryItemComponent } from './category-item.component';

describe('CategoryItemComponent', () => {
    let component: CategoryItemComponent;
    let fixture: ComponentFixture<CategoryItemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CategoryItemComponent],
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
        expect(compiled.querySelector('h2')?.textContent).toContain(
            'Categories'
        );
    });

    it('should render all categories', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelectorAll('h3').length).toBe(5);
        expect(compiled.querySelectorAll('p').length).toBe(5);
    });

    it('should render category name', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h3')?.textContent).toBeTruthy();
    });

    it('should render category description', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('p')?.textContent).toBeTruthy();
    });
});
