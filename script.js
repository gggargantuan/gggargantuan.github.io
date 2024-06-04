function openModal() {
   document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }

  fetch('C:\Users\vnaza\Documents\Website_f104518\MOCK_DATA.json') // Replace 'path/to/MOCK_DATA.json' with the actual path to your JSON file
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(games => {
        const catalogue = document.getElementById('catalogue');
        games.forEach(game => {
            const gameBox = document.createElement('div');
            gameBox.className = 'game-box';

            const title = document.createElement('h2');
            title.textContent = game.game_title;

            const year = document.createElement('p');
            year.textContent = `Year: ${game.release_year}`;

            const platform = document.createElement('p');
            platform.textContent = `Platform: ${game.platform}`;

            const genre = document.createElement('p');
            genre.textContent = `Genre: ${game.genre}`;

            const developer = document.createElement('p');
            developer.textContent = `Developer: ${game.developer}`;

            gameBox.appendChild(title);
            gameBox.appendChild(year);
            gameBox.appendChild(platform);
            gameBox.appendChild(genre);
            gameBox.appendChild(developer);

            catalogue.appendChild(gameBox);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
