// Resource Services

export class ResourceService {
  /** @ngInject */
  constructor($log) {
    this.$log = $log;
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
    // TODO: Make async
    return this.vm[category];
  }

  save(category, newObj) {
    // TODO: Make async
    // TODO: Validate category

    // Validate new or Update
    if (Object.prototype.hasOwnProperty.call(newObj, 'id')) {
      // Update

      const index = this.vm[category].findIndex(element => element.id === newObj.id);
      if (index === -1) {
        // Error
        throw (new Error('Oh-Oh.. ID not found when trying to update resource'));
      }
      this.vm[category][index] = newObj;
      return;
    }

    // New
    // Generate ID
    let newID = 0;
    if (this.vm[category].length !== 0) {
      // Find max ID and increment
      newID = Math.max.apply(Math, this.vm[category].map(o => {
        return o.id;
      }));
      newID++;
    }
    newObj.id = newID;
    this.vm[category].push(newObj);
  }

  deleteResource(category, id) {
    // TODO: Make async
    const index = this.vm[category].findIndex(element => element.id === id);
    this.vm[category].splice(index, 1);
  }

}

