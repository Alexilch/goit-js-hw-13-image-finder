const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '23976074-1864ef446645d9fee251ba638'
  
  export default class apiServiceImages {
    constructor() {
      this.searchQuery = '';
      this.pageNumber = 1;
    }
    fetchImages() {
      const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.pageNumber}&per_page=12&key=${API_KEY}`
      return fetch(url)
      .then(response => response.json())
      .then(({ hits }) => {
        this.pageNumber += 1;;
        return hits;
      })
    }

    resetPage(){
      this.pageNumber = 1
    }
  
    set query(newQuery) {
      this.searchQuery = newQuery;
    }
  
    get query() {
      return this.searchQuery;
    }
  }
  