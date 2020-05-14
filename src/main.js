// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");

var randomCoverBtn = document.querySelector(".random-cover-button");



// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
randomCoverBtn.addEventListener("click", showRandomCover);

// Create your event handlers and other functions here 👇
function showRandomCover() {
  currentCover = new Cover(randomizeImage())
}

function randomizeImage() {
  coverImage.src = covers[getRandomIndex(covers)]
}


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

var randomCover = covers[getRandomIndex(covers)]
var randomTitle = titles[getRandomIndex(titles)]
var randomTagline1 = descriptors[getRandomIndex(descriptors)]
var randomTagline2 = descriptors[getRandomIndex(descriptors)]

coverImage.src = randomCover;
coverTitle.innerText = randomTitle;
tagline1.innerText = randomTagline1;
tagline2.innerText = randomTagline2;
