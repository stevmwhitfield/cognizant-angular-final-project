export class Category {
    categoryId: number;
    categoryName: string;
    description: string;

    constructor(categoryId: number, categoryName: string, description: string) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.description = description;
    }
}
