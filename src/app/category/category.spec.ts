import { Category } from './category';

describe('Category', () => {
    it('should create an instance', () => {
        expect(
            new Category(1, 'Category 1', 'Category 1 description')
        ).toBeTruthy();
    });
});
