// Category Services

// Initially selected Category
export const initialCategory = 'websites';

export class CategoryService {
  constructor() {
    this.categories = {
      websites: {title: 'Websites', id: 'websites'},
      books: {title: 'Books', id: 'books'},
      podcasts: {title: 'Podcasts', id: 'podcasts'}
    };
  }

  getCategories() {
    return this.categories;
  }

  categoryExists(id) {
    return this.categories[id];
  }

}

