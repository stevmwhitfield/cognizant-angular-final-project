import { Category } from './category';

describe('Category', () => {
    it('should create an instance', () => {
        const category = new Category(
            1,
            'Category 1',
            'Category 1 description'
        );
        expect(category).toBeTruthy();
        expect(category.categoryId).toBe(1);
        expect(category.categoryName).toBe('Category 1');
        expect(category.description).toBe('Category 1 description');
    });
});
