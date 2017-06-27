// Resource Services

export class ResourceService {
  constructor() {
    this.vm = {};
    this.vm.websites = [
      {
        id: 0,
        title: 'NPM JS',
        url: 'https://www.npmjs.com',
        author: ''
      },
      {
        id: 1,
        title: 'Fountain JS',
        url: 'http://fountainjs.io',
        author: ''
      }
    ];
    this.vm.books = [
      {
        id: 0,
        title: 'Harry Potter and the Sorcerer\'s Stone',
        url: '',
        author: 'J. K. Rowling'
      },
      {
        id: 1,
        title: 'One Hundred Years of Solitude',
        url: 'https://www.barnesandnoble.com/w/one-hundred-years-of-solitude-gabriel-garc-a-m-rquez/1116668495',
        author: 'Gabriel Garcia Marquez'
      }
    ];
    this.vm.podcasts = [
      {
        id: 0,
        title: 'TED Radio Hour',
        url: 'http://www.npr.org/podcasts/510298/ted-radio-hour',
        author: 'NPR'
      },
      {
        id: 1,
        title: 'Note To Self',
        url: '',
        author: 'Manoush Zomorodi'
      }
    ];
  }
  getResources(category) {
    return this.vm[category];
  }

}

