// guests accordion

const accordion = document.querySelectorAll(".guests__category-accordion");
accordion.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.dataset.open == "false") {
      accordion.forEach((item) => {
        item.dataset.open = "false";
      });
      item.dataset.open = "true";
    } else {
      item.dataset.open = "false";
    }
  });
});

// play btn

let currentlyPlaying;
const playBtn = document.querySelectorAll(
  ".playlists__card, .header__play-btn, .podcast__card-btn"
);
playBtn.forEach((item) =>
  item.addEventListener("click", () => {
    if (item.dataset.playing == "true") {
      pausePlaying(item);
    } else {
      checkCurrentPlay();
      currentlyPlaying = item;
      startPlaying(item);
    }
  })
);

function pausePlaying(btn) {
  btn.querySelectorAll("rect").forEach((item) => (item.style.display = "none"));
  btn.querySelector("path").style.display = "inline";
  btn.dataset.playing = "false";
}

function startPlaying(btn) {
  btn.querySelector("path").style.display = "none";
  btn
    .querySelectorAll("rect")
    .forEach((item) => (item.style.display = "inline"));
  btn.dataset.playing = "true";
}

function checkCurrentPlay() {
  if (currentlyPlaying != undefined) {
    pausePlaying(currentlyPlaying);
  }
}

// modal window

const body = document.querySelector("body"),
  modalWindow = document.querySelector(".login"),
  openModal = document.querySelector(".header__login-btn"),
  closeModalBtn = document.querySelector(".login__window-close");

openModal.addEventListener("click", () => {
  body.style.overflow = "hidden";
  modalWindow.style.display = "block";
});

closeModalBtn.addEventListener("click", () => closeModal());

modalWindow.addEventListener("click", (e) => {
  if (e.target.classList.value == "login") {
    closeModal();
  }
});

function closeModal() {
  body.style.overflow = "visible";
  modalWindow.style.display = "none";
}

// header search bar

const searchBar = document.querySelector(".header__input"),
  openSearchBtn = document.querySelector(".header__form-btn");

openSearchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchBar.classList.add("header__input--open");
});

document.addEventListener("click", function (e) {
  let target = e.target;
  let input = document.querySelector(".header__input");
  if (!target.closest(".header__form")) {
    input.classList.remove("header__input--open");
    input.value = "";
  }
});

// playlist stats

const statBtn = document.querySelectorAll(".podcast__card-stat svg");
statBtn.forEach((element) => {
  element.addEventListener("click", () => {
    let currentScore = element.nextElementSibling.innerHTML;
    if (element.dataset.clicked == "true") {
      element.dataset.clicked = "false";
      element.nextElementSibling.innerHTML = +currentScore - 1;
    } else {
      element.dataset.clicked = "true";
      element.nextElementSibling.innerHTML = +currentScore + 1;
    }
  });
});

// get guests info

async function getData(url) {
  const result = await fetch(url);
  if (!result.ok) {
    throw new Error("gay appocalipse");
  }

  return await result.json();
}

class Guest {
  constructor(name, imgpath, descr, altimg, socialLinks, brodcastsWithGuest) {
    this.name = name;
    this.imgPath = imgpath;
    this.descr = descr;
    this.altimg = altimg;
    [this.inst, this.facebook, this.twitter] = socialLinks;
    this.brodcastsWithGuest = brodcastsWithGuest;
  }

  render() {
    const parent = document.querySelector(".guests__person");
    parent.innerHTML = `<figure class="guests__person-img">
    <img src="${this.imgPath}" alt="${this.altimg}" />
  </figure>
  <div class="guests__person-socials">
    <a href="${this.inst}" class="guests__person-icon socials-icon"
      ><svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_24531_5305)">
          <path
            d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"
            fill="#A1A6B4"
          />
        </g>
      </svg> </a
    ><a href="${this.facebook}" class="guests__person-icon socials-icon"
      ><svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_24531_5308)">
          <path
            d="M15.78 22V14.26H18.3722L18.76 11.2511H15.78V9.33111C15.78 8.46 16.0222 7.86556 17.2711 7.86556H18.8644V5.17444C18.0931 5.09261 17.3179 5.05292 16.5422 5.05556C14.2456 5.05556 12.6733 6.45778 12.6733 9.03333V11.2511H10.0756V14.26H12.6733V22H3.11111C2.81643 22 2.53381 21.8829 2.32544 21.6746C2.11706 21.4662 2 21.1836 2 20.8889V3.11111C2 2.81643 2.11706 2.53381 2.32544 2.32544C2.53381 2.11706 2.81643 2 3.11111 2H20.8889C21.1836 2 21.4662 2.11706 21.6746 2.32544C21.8829 2.53381 22 2.81643 22 3.11111V20.8889C22 21.1836 21.8829 21.4662 21.6746 21.6746C21.4662 21.8829 21.1836 22 20.8889 22H15.78Z"
            fill="#A1A6B4"
          />
        </g>
      </svg> </a
    ><a href="${this.twitter}" class="guests__person-icon socials-icon"
      ><svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_24531_5311)">
          <path
            d="M22.1621 5.65593C21.3986 5.99362 20.589 6.2154 19.7601 6.31393C20.6338 5.79136 21.2878 4.96894 21.6001 3.99993C20.7801 4.48793 19.8811 4.82993 18.9441 5.01493C18.3147 4.34151 17.4804 3.89489 16.571 3.74451C15.6616 3.59413 14.728 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0772 6.14972C11.6979 6.98983 11.6068 7.93171 11.8181 8.82893C10.1552 8.74558 8.52838 8.31345 7.04334 7.56059C5.55829 6.80773 4.24818 5.75097 3.19805 4.45893C2.82634 5.09738 2.63101 5.82315 2.63205 6.56193C2.63205 8.01193 3.37005 9.29293 4.49205 10.0429C3.82806 10.022 3.17869 9.84271 2.59805 9.51993V9.57193C2.59825 10.5376 2.93242 11.4735 3.5439 12.221C4.15538 12.9684 5.00653 13.4814 5.95305 13.6729C5.33667 13.84 4.69036 13.8646 4.06305 13.7449C4.32992 14.5762 4.85006 15.3031 5.55064 15.824C6.25123 16.3449 7.09718 16.6337 7.97005 16.6499C7.10253 17.3313 6.10923 17.8349 5.04693 18.1321C3.98464 18.4293 2.87418 18.5142 1.77905 18.3819C3.69075 19.6114 5.91615 20.264 8.18905 20.2619C15.8821 20.2619 20.0891 13.8889 20.0891 8.36193C20.0891 8.18193 20.0841 7.99993 20.0761 7.82193C20.8949 7.23009 21.6017 6.49695 22.1631 5.65693L22.1621 5.65593Z"
            fill="#A1A6B4"
          />
        </g>
      </svg>
    </a>
  </div>
  <h4 class="guests__person-name">${this.name}</h4>
  <p class="guests__person-descr">
    ${this.descr}
  </p>
  <a href="${this.brodcastsWithGuest}" class="guests__person-link medium-btn"
    >Эфиры с гостем</a
  >`;
  }
}

let activedGuestLink = document.querySelector(
  ".guests__category-person--active"
);
const guestsLinks = document.querySelectorAll(".guests__category-person");
guestsLinks.forEach((item) => {
  item.addEventListener("click", () => {
    showGuest(item);
  });
});

function showGuest(item) {
  if (activedGuestLink) {
    activedGuestLink.classList.remove("guests__category-person--active");
  }
  item.classList.add("guests__category-person--active");
  activedGuestLink = item;
  // getData("http://localhost:3000/guests").then((data) => {
  //   const { name, imgpath, descr, altimg, socialLinks, brodcastsWithGuest } =
  //     data[item.innerHTML];
  //   new Guest(
  //     name,
  //     imgpath,
  //     descr,
  //     altimg,
  //     socialLinks,
  //     brodcastsWithGuest
  //   ).render();});
}

// slider

const prev = document.querySelector(".about-us__slider-prev"),
  next = document.querySelector(".about-us__slider-next"),
  slides = document.querySelectorAll(".about-us__slide").length,
  sliderContent = document.querySelector(".about-us__slider-content");
let offsetSlider = 0;

next.addEventListener("click", () => {
  const [slidesInFocus, slideWidth] = [...slidesInfo()];
  if (offsetSlider == slideWidth * (slides - slidesInFocus)) {
    offsetSlider = 0;
  } else {
    offsetSlider += slideWidth;
  }
  sliderContent.style.transform = `translateX(-${offsetSlider}px)`;
});

prev.addEventListener("click", () => {
  const [slidesInFocus, slideWidth] = [...slidesInfo()];
  if (offsetSlider == 0) {
    offsetSlider = slideWidth * (slides - slidesInFocus);
  } else {
    offsetSlider -= slideWidth;
  }
  sliderContent.style.transform = `translateX(-${offsetSlider}px)`;
});

function slidesInfo() {
  const slide = document.querySelector(".about-us__slide").offsetWidth + 30;
  return [
    Math.round(
      document.querySelector(".about-us__slider-wrapper").offsetWidth / slide
    ),
    slide,
  ];
}

window.addEventListener("resize", () => {
  offsetSlider = 0;
  sliderContent.style.transform = `translateX(-${offsetSlider}px)`;
});

// swipe

function swipeElement(start, end, limit, offset) {
  offset -= end - start;
  if (offset < 0) {
    offset = 0;
  } else if (offset > limit) {
    offset = limit;
  }
  return offset;
}

const slider = document.querySelector(".about-us__slider"),
  genreContent = document.querySelector(".playlists__genres-list"),
  genreWrapper = document.querySelector(".playlists__genres");
let startX,
  endX,
  offsetGenre = 0;

slider.addEventListener("touchstart", (e) => {
  startX = e.changedTouches[0].clientX;
});

slider.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  if (window.screen.width <= 650) {
    offsetSlider = swipeElement(
      startX,
      endX,
      sliderContent.scrollWidth - slider.offsetWidth,
      offsetSlider
    );
    sliderContent.style.transform = `translateX(-${offsetSlider}px)`;
  }
});

genreContent.addEventListener("touchstart", (e) => {
  startX = e.changedTouches[0].clientX;
});

genreContent.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  offsetGenre = swipeElement(
    startX,
    endX,
    genreContent.scrollWidth - genreWrapper.offsetWidth,
    offsetGenre
  );
  genreContent.style.transform = `translateX(-${offsetGenre}px)`;
});

// burger

const burger = document.querySelector(".header__burger-container"),
  checkbox = document.querySelector("#open-burger"),
  bottomNav = document.querySelector(".header__bottom-nav"),
  burgerItems = document.querySelectorAll(
    ".header__bottom-item",
    ".header__top-item"
  );
burger.addEventListener("click", () => {
  if (!checkbox.checked) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "visible";
  }

  if (window.screen.width <= 600) {
    bottomNav.classList.toggle("header__bottom-nav--open");
  }
});

burgerItems.forEach((item) => {
  item.addEventListener("click", () => {
    body.style.overflow = "visible";
    checkbox.checked = false;
    bottomNav.classList.remove("header__bottom-nav--open");
  });
});
// select

const options = document.querySelectorAll("option"),
  select = document.querySelector(".brodcast__author-select"),
  dropdown = document.createElement("div");

dropdown.classList.add(
  "brodcast__author-dropdown",
  "brodcast__author-dropdown--hidden"
);

function createSelect(pickedOption) {
  options.forEach((option) => {
    const newOption = document.createElement("div");
    newOption.classList.add("brodcast__author-option");
    newOption.innerHTML = option.innerHTML;

    if (newOption.innerHTML == pickedOption) {
      newOption.classList.add("brodcast__author-selected-option");
      select.appendChild(newOption);
      newOption.addEventListener("click", () => {
        select.classList.toggle("brodcast__author-select--open");
        dropdown.classList.toggle("brodcast__author-dropdown--hidden");
      });
    } else {
      newOption.setAttribute("tabindex", "0");
      dropdown.appendChild(newOption);
      newOption.addEventListener("click", () => {
        clearSelect();
        dropdown.classList.toggle("brodcast__author-dropdown--hidden");
        createSelect(newOption.innerHTML);
      });
    }
  });
  select.appendChild(dropdown);
}

function clearSelect() {
  select.removeChild(select.children[1]);
  while (dropdown.hasChildNodes()) {
    dropdown.removeChild(dropdown.children[0]);
  }
}

createSelect(options[0].innerHTML);

// valdation input
const inputName = document.querySelector(
    ".about-us__form .form-input[name='name']"
  ),
  inputEmail = document.querySelector(
    ".about-us__form .form-input[name='email']"
  ),
  [nameError, emailError] = document.querySelectorAll(".about-us__error-label");

inputName.addEventListener("change", () => {
  const reg = /\d+/;
  if (reg.test(inputName.value)) {
    console.log("Error");
    showError(inputName, nameError);
  }
});

inputName.addEventListener("input", () => {
  hideError(inputName, nameError);
});

inputEmail.addEventListener("change", () => {
  const reg = /^\S+@\S+\.\S+$/;
  if (!reg.test(inputEmail.value)) {
    showError(inputEmail, emailError);
  }
});

inputEmail.addEventListener("input", () => {
  hideError(inputEmail, emailError);
});

function showError(input, error) {
  error.classList.remove("about-us__error-label--hidden");
  input.classList.add("about-us__form-input--invalid");
}

function hideError(input, error) {
  error.classList.add("about-us__error-label--hidden");
  input.classList.remove("about-us__form-input--invalid");
}

// air menu

const airBtn = document.querySelector(".header__air-menu-btn"),
  airMenu = document.querySelector(".header__air-menu");

airBtn.addEventListener("click", () => {
  airMenu.classList.toggle("header__air-menu--open");
});
