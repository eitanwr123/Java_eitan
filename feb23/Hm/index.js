function init() {
  moviesArray.forEach(movie => createMovieCard(movie, "card-group", 1));
}
init()