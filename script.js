
//About us display
function toggleAboutUsDisplay(id) {
  const bannerContent = document.getElementById('banner-content');
  const targetElement = document.getElementById(id);

  if (targetElement.style.display === 'none' || targetElement.style.display === '') {
      bannerContent.style.display = 'none';
      targetElement.style.display = 'block';
  } else {
      bannerContent.style.display = 'flex';
      targetElement.style.display = 'none';
  }
}



//Product Page slider

let images = ["img/product-slider1.png", "img/product-slider2.png", "img/product-slider3.png","img/product-slider2.png", "img/product-slider4.png"];
let currentIndex = 0;

function slide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  updateMainImage();
}

function updateMainImage() {
  document.getElementById("main-image").src = images[currentIndex];
}

function setMainImage(index) {
  currentIndex = index;
  updateMainImage();
}

document.addEventListener('DOMContentLoaded', (event) => {
  let thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => setMainImage(index));
  });
});

//Product Page dropdown information

let clickedState = {
  'ingredientsList': false,
  'goodToKnowList': false
};

function toggleInfoOnHover(id) {
    if (!clickedState[id]) {
        let element = document.getElementById(id);
        element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
    }
}

function toggleInfoOnClick(id) {
    let element = document.getElementById(id);
    clickedState[id] = !clickedState[id];
    element.style.display = 'block';
}


// Phone hamburger menue 

document.getElementById('menu-icon').addEventListener('click', function() {
  var nav = document.querySelector('.navigation-container');
  if (nav.style.display === 'none' || nav.style.display === '') {
      nav.style.display = 'block';
  } else {
      nav.style.display = 'none';
  }
});
