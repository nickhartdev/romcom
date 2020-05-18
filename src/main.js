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
var savedCoversSection = document.querySelector(".saved-covers-section")

//Form input fields
var coverImageInput = document.querySelector("#cover");
var titleInput = document.querySelector("#title");
var descriptor1Input = document.querySelector("#descriptor1");
var descriptor2Input = document.querySelector("#descriptor2");

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
saveCoverBtn.addEventListener("click", saveCover);

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
  showSavedCovers();
}

function showHomePage() {
  savedViewPage.classList.add("hidden");
  formViewPage.classList.add("hidden");
  homeBtn.classList.add("hidden");
  homeViewPage.classList.remove("hidden");
  saveCoverBtn.classList.remove("hidden");
  randomCoverBtn.classList.remove("hidden");
}

function saveCreatedCover() {
  currentCover = new Cover(coverImageInput.value, titleInput.value, descriptor1Input.value, descriptor2Input.value);
  covers.push(coverImageInput.value);
  titles.push(titleInput.value);
  descriptors.push(descriptor1Input.value, descriptor2Input.value);
  displayCreatedCover();
  event.preventDefault();
}

function displayCreatedCover() {
  coverImage.src = coverImageInput.value;
  coverTitle.innerText = titleInput.value;
  tagline1.innerText = descriptor1Input.value;
  tagline2.innerText = descriptor2Input.value;
  showHomePage();
}

function saveCover() {
  currentCover = new Cover(coverImage.src, coverTitle.innerHTML, tagline1.innerHTML, tagline2.innerHTML);
  savedCovers.push(currentCover);
  savedCoversSection.insertAdjacentHTML('afterbegin', `<section class='mini-cover'>
  <img class="cover-image" src=${currentCover.cover}><h2 class="cover-title">${currentCover.title}</h2>
  <h3 class="tagline">A tale of <span class="tagline-1">${currentCover.tagline1}</span> and <span class="tagline-2">${currentCover.tagline2}</span></h3>
  <img class="price-tag" src="./assets/price.png">
  <img class="overlay" src="./assets/overlay.png"></section>`)
}
//
// function showSavedCovers() {
//   for (i = 0; i < savedCovers.length; i++) {
//   }
// }

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// Shows random cover on page reload
coverImage.src = covers[getRandomIndex(covers)];
coverTitle.innerText = titles[getRandomIndex(titles)];
tagline1.innerText = descriptors[getRandomIndex(descriptors)];
tagline2.innerText = descriptors[getRandomIndex(descriptors)];
