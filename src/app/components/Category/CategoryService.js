// Category Services

// Initially selected Category
export const initialCategory = 'websites';

export class CategoryService {

//   addCategory() {

//   }

//   deleteCategory() {

//   }

  getCategories() {
    return {
      websites: {title: 'Websites', id: 'websites'},
      books: {title: 'Books', id: 'books'},
      podcasts: {title: 'Podcasts', id: 'podcasts'}
    };
  }

}

