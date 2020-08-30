const baseUrl = 'https://pixabay.com/api/';
const apiKey = '18096168-1a47ddc4f6b43b68eb373a2c6';

export default {
  page: 1,
  query: '',
  fetchArticles() {
    const requestParams = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${apiKey}`;

    return fetch(baseUrl + requestParams)
      .then(resp => resp.json())
      .then(parsedResp => {
        this.incrementPage();

        return parsedResp.hits;
      });
  },

  get searchQuery() {
    return this.query;
  },

  set searchQuery(string) {
    this.query = string;
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },
};
