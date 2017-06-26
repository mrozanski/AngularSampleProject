// Category Services

// Initially selected Category
export const initialCategory = 'websites';

// Categories model goes here

export class CategoryService {

//   addCategory() {

//   }

//   deleteCategory() {

//   }

  getCategories() {
    return {
      websites: {title: 'Websites'},
      books: {title: 'Books'},
      podcasts: {title: 'Podcasts'}
    };
  }

}

