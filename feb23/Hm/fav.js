function init() {
  JSON.parse(localStorage.getItem("favArray")).forEach(movie => createMovieCard(movie, "card-group2", null));
}
init()



