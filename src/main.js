// Create variables targetting the relevant DOM elements here 👇

// Book Cover Element
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");

// Button Elements
var randomCoverBtn = document.querySelector(".random-cover-button");
var makeOwnCoverBtn = document.querySelector(".make-new-button");
var saveCoverBtn = document.querySelector(".save-cover-button");
var homeBtn = document.querySelector(".home-button");
var viewSavedBtn = document.querySelector(".view-saved-button");
var createNewBookBtn = document.querySelector(".create-new-book-button");

// Section Elements
var homeViewPage = document.querySelector(".home-view");
var formViewPage = document.querySelector(".form-view");
var savedViewPage = document.querySelector(".saved-view");

//Form input fields
var coverImageInput = document.querySelector("#cover");
var titleInput = document.querySelector("#title");
var descriptor1Input = document.querySelector("#descriptor1");
var descriptor2Input = document.querySelector("#descriptor2");

//global variables

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
randomCoverBtn.addEventListener("click", showRandomCover);
makeOwnCoverBtn.addEventListener("click", showFormPage);
viewSavedBtn.addEventListener("click", showSavedPage);
homeBtn.addEventListener("click", showHomePage);
createNewBookBtn.addEventListener("click", saveCreatedCover);


// Create your event handlers and other functions here 👇

// Randomized Book Cover Functions
function showRandomCover() {
  currentCover = new Cover(randomizeImage(), randomizeTitle(), randomizeTagline1(), randomizeTagline2());
}

function randomizeImage() {
  coverImage.src = covers[getRandomIndex(covers)];
}

function randomizeTitle() {
  coverTitle.innerText = titles[getRandomIndex(titles)];
}

function randomizeTagline1() {
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
}

function randomizeTagline2() {
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
}

// Display functions
function showFormPage() {
  homeViewPage.classList.add("hidden");
  randomCoverBtn.classList.add("hidden");
  saveCoverBtn.classList.add("hidden");
  formViewPage.classList.remove("hidden");
  homeBtn.classList.remove("hidden");
}

function showSavedPage() {
  homeViewPage.classList.add("hidden");
  randomCoverBtn.classList.add("hidden");
  saveCoverBtn.classList.add("hidden");
  savedViewPage.classList.remove("hidden");
  homeBtn.classList.remove("hidden");
}

function showHomePage() {
  savedViewPage.classList.add("hidden");
  formViewPage.classList.add("hidden");
  homeBtn.classList.add("hidden");
  homeViewPage.classList.remove("hidden");
  saveCoverBtn.classList.remove("hidden");
  randomCoverBtn.classList.remove("hidden");
}

function saveCreatedCover(event) {
  event.preventDefault();
  var coverUrl = coverImageInput.value;
  var title = titleInput.value;
  var descriptor1 = descriptor1Input.value;
  var descriptor2 = descriptor2Input.value;
  covers.push(coverUrl);
  titles.push(title);
  descriptors.push(descriptor1, descriptor2);
  currentCover = new Cover(coverUrl, title, descriptor1, descriptor2);
  displayCreatedCover();
}

function displayCreatedCover() {
  var coverUrl = coverImageInput.value;
  var title = titleInput.value;
  var descriptor1 = descriptor1Input.value;
  var descriptor2 = descriptor2Input.value;
  coverImage.src = coverUrl;
  coverTitle.innerText = title;
  tagline1.innerText = descriptor1;
  tagline2.innerText = descriptor2;
  showHomePage()
}



// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

coverImage.src = covers[getRandomIndex(covers)];
coverTitle.innerText = titles[getRandomIndex(titles)];
tagline1.innerText = descriptors[getRandomIndex(descriptors)];
tagline2.innerText = descriptors[getRandomIndex(descriptors)];
