class MoviesApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
    this.cachedMovies = null;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    if (this.cachedMovies) {
      return Promise.resolve(this.cachedMovies);
    }

    return fetch(`${this.baseUrl}`, {
      method: "GET",
      headers: this.headers,
    })
      .then(this._checkResponse)
      .then((data) => {
        this.cachedMovies = data;
        return data;
      });
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-Type": "application/json",
  },
});
