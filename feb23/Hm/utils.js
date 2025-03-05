
function createMovieCard(movie, target, f) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.id = movie.Title.replace(/\s+/g, '-').toLowerCase(); // Set ID as the movie name (hyphenated)

  const cardInner = document.createElement('div');
  cardInner.classList.add('card-inner');
  //front of the card
  const front = document.createElement('div');
  front.classList.add('card-front');
  const frontImage = document.createElement('img');
  frontImage.src = movie.Images[0];
  front.appendChild(frontImage);
  //back of the card
  const back = document.createElement('div');
  back.classList.add('card-back');
  back.innerHTML = `
      <h3>${movie.Title}</h3>
      <p><strong>Year:</strong> ${movie.Year}</p>
      <p><strong>IMDb Rating:</strong> ${movie.imdbRating}</p>
      <p><strong>Genre:</strong> ${movie.Genre}</p>
      <p>${movie.Plot}</p>
    `;
  //create a button like we did last hw with the products
  const button = document.createElement('button');
  button.textContent = f ? 'Add' : 'Remove';
  button.addEventListener('click', () => {
    if (f) {
      addCardToFav(movie);
    } else {
      removeFromFav(movie);
    }
  });
  back.appendChild(button);

  cardInner.appendChild(front);
  cardInner.appendChild(back);
  card.appendChild(cardInner);

  //pushing the card to the target div
  document.getElementById(target).appendChild(card);
}

//creates and return an object with the genere stats

function statsObj(MovieList) {
  const stObj = {};
  MovieList.forEach(movie => {
    if (stObj[movie.Type]) {
      stObj[movie.Type] += 1;
    } else {
      stObj[movie.Type] = 1;
    }
  });
  return stObj;
}

//add a card to fav
function addCardToFav(movie) {
  let favorit_array_string = localStorage.getItem("favArray")
  if (favorit_array_string) {
    let favorit_array = JSON.parse(favorit_array_string)
    if (!getMovieByTitle(favorit_array, movie.Title)) {
      favorit_array.push(movie)
      localStorage.setItem("favArray", JSON.stringify(favorit_array))
      Swal.fire({
        title: "Added to favorites!",
        icon: "success",
        draggable: true
      });
      return
    } else {
      Swal.fire({             
        icon: "error",
        title: "Already added",
        text: "Time to try diffrent moivies",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
      return //the function will do nothing because the movie already in favorits
    }
  } else {
    localStorage.setItem("favArray", JSON.stringify([movie])); // Corrected: Store as a JSON string
  }
  return
}

// get movie by title
function getMovieByTitle(movies, title) {
  for (let movie of movies) {
    if (movie.Title === title) {
      return movie;
    }
  }
  return null;
}

//remove card
function removeFromFav(movie) {
  let favorit_array_string = localStorage.getItem("favArray")
  if (favorit_array_string) {
    let favorit_array = JSON.parse(favorit_array_string)
    favorit_array = favorit_array.filter(movie1 => movie1.Title !== movie.Title)
    localStorage.setItem("favArray", JSON.stringify(favorit_array))
  }
}




