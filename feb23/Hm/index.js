
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.id = movie.Title.replace(/\s+/g, '-').toLowerCase(); // Set ID as the movie name (hyphenated)

    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    const front = document.createElement('div');
    front.classList.add('card-front');
    const frontImage = document.createElement('img');
    frontImage.src = movie.Images[0];
    front.appendChild(frontImage);

    const back = document.createElement('div');
    back.classList.add('card-back');
    back.innerHTML = `
      <h3>${movie.Title}</h3>
      <p><strong>Year:</strong> ${movie.Year}</p>
      <p><strong>IMDb Rating:</strong> ${movie.imdbRating}</p>
      <p><strong>Genre:</strong> ${movie.Genre}</p>
      <p>${movie.Plot}</p>
    `;//add "add to favorit" and "delete button//

    cardInner.appendChild(front);
    cardInner.appendChild(back);
    card.appendChild(cardInner);

    document.getElementById('card-group').appendChild(card);
}

// Draw all movies into the card-group div
moviesArray.forEach(createMovieCard);
