window.addEventListener("DOMContentLoaded", function () {
  // map
  ymaps.ready(init);
  function init() {
    const myMap = new ymaps.Map("map", {
      center: [55.76000097157971, 37.61914554765636],
      zoom: 13.5,
    });
    const myPlacemark = new ymaps.Placemark(
      [55.769615527017194, 37.63843107709135],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "img/svg/sprite.svg#point",
        iconImageSize: [12, 12],
        iconImageOffset: [0, 0],
      }
    );
    myMap.geoObjects.add(myPlacemark);
    const mapCopyright = document.querySelector(".ymaps-copyrights-pane");
    const mapHelp = document.querySelector("iframe");
    mapCopyright.style = "z-index: 0";
    mapHelp.style = "display: none";
  }

  // map menu

  function animateFadeLeft() {
    if (progress > 0) {
      progress -= 6;
    }
    if (coverOpacity > 0) coverOpacity -= 0.04;
    mapCover.style.width = progress + "px";
    mapCover.style.opacity = coverOpacity;
    if ((progress <= 0) & (coverOpacity <= 0)) {
      mapClose.style.visibility = "hidden";
      mapOpen.style.display = "block";
      mapOpen.style.top = "50%";
      mapOpen.style.left = "-9px";
      return;
    }
    requestAnimationFrame(animateFadeLeft);
  }

  function animateFadeRight() {
    if (progress < 410) {
      progress += 16;
    }
    if (coverOpacity < 1) coverOpacity += 0.05;
    mapCover.style.width = progress + "px";
    mapCover.style.opacity = coverOpacity;
    if ((progress >= 410) & (coverOpacity >= 1)) {
      return;
    }
    requestAnimationFrame(animateFadeRight);
  }

  function animateFadeDown() {
    if (progress > 0) {
      progress -= 3;
    }
    if (coverOpacity > 0) coverOpacity -= 0.04;
    mapCover.style.height = progress + "px";
    mapCover.style.opacity = coverOpacity;
    if ((progress <= 0) & (coverOpacity <= 0)) {
      mapClose.style.visibility = "hidden";
      mapOpen.style.display = "block";
      mapOpen.style.left = "50%";
      mapOpen.style.top = "98%";
      mapOpen.style.transform = "rotate(-135deg)";
      return;
    }
    requestAnimationFrame(animateFadeDown);
  }

  function animateFadeUp() {
    if (progress < 156) {
      progress += 6;
    }
    if (coverOpacity < 1) coverOpacity += 0.03;
    mapCover.style.height = progress + "px";
    mapCover.style.opacity = coverOpacity;
    if ((progress >= 156) & (coverOpacity >= 1)) {
      return;
    }
    requestAnimationFrame(animateFadeUp);
  }

  let coverOpacity, progress;

  const mapClose = document.querySelector(".contacts__map-close");
  const mapCover = document.querySelector(".contacts__map-cover");
  const mapOpen = document.querySelector(".contacts__map-open");

  mapClose.addEventListener("click", () => {
    const screenWidth = document.body.clientWidth;
    coverOpacity = 1;
    if (screenWidth > 1200) {
      mapCover.style.paddingLeft = "0";
      progress = mapCover.offsetWidth;
      requestAnimationFrame(animateFadeLeft);
    } else {
      mapCover.style.paddingTop = "0";
      progress = mapCover.offsetHeight;
      requestAnimationFrame(animateFadeDown);
    }
  });

  mapOpen.addEventListener("click", () => {
    const screenWidth = document.body.clientWidth;
    coverOpacity = 0;
    mapOpen.style.display = "none";
    mapClose.style.visibility = "visible";
    if (screenWidth > 1200) {
      mapCover.style.paddingLeft = "60px";
      requestAnimationFrame(animateFadeRight);
    } else {
      mapCover.style.paddingTop = "20px";
      requestAnimationFrame(animateFadeUp);
    }
  });

  //header search bar

  const openBar = document.querySelector(".header__search-open");
  const closeBar = document.querySelector(".header__search-close");
  const searchBar = document.querySelector(".header__search-input");

  let barWidth = 0,
    rightTranslate = 0,
    barOpacity = 1;

  function showBar() {
    if (barWidth < 308) barWidth += 4;
    if (rightTranslate < 342) rightTranslate += 9;
    searchBar.style.width = barWidth + "px";
    searchBar.style.transform = `translateX(-${rightTranslate}px)`;
    if ((rightTranslate == 342) & (barWidth == 308)) {
      return;
    }

    requestAnimationFrame(showBar);
  }

  function hideBar() {
    if (barWidth > 0) barWidth -= 7;
    if (rightTranslate > 0) rightTranslate -= 9;
    if (barOpacity > 0) barOpacity -= 0.05;

    searchBar.style.width = barWidth + "px";
    searchBar.style.transform = `translateX(-${rightTranslate}px)`;
    searchBar.style.opacity = barOpacity;
    if ((rightTranslate == 0) & (barWidth == 0)) {
      searchBar.style.visibility = "hidden";
      return;
    }

    requestAnimationFrame(hideBar);
  }

  openBar.addEventListener("click", (e) => {
    e.preventDefault();
    searchBar.style.visibility = "visible";
    barOpacity = 1;
    searchBar.style.opacity = barOpacity;

    requestAnimationFrame(showBar);
    openBar.style.display = "none";
    closeBar.style.display = "block";
  });

  closeBar.addEventListener("click", (e) => {
    e.preventDefault();
    requestAnimationFrame(hideBar);
    closeBar.style.display = "none";
    openBar.style.display = "block";
  });

  //card text

  function createCardText(version) {
    const cards = document.querySelectorAll("[data-text-change]");
    let i = 0;
    cards.forEach((element) => {
      const p = document.createElement("p");
      const data = element.querySelector(".card__data");
      p.classList.add("card__descr", "text-lh-22");
      const node = document.createTextNode(cardTitles[version][i]);
      p.appendChild(node);
      element.removeChild(element.querySelector("p"));
      element.insertBefore(p, data);
      i++;
    });
  }

  function checkScreen() {
    const screenWidth = document.body.clientWidth;
    if ((screenWidth > 970) & (screenWidth < 1200)) {
      createCardText("v2");
    } else {
      createCardText("v1");
    }
  }

  const cardTitles = {
    v1: [
      "Синтетически, смешаны с не уникальными данными до степени…",
      "В своём стремлении улучшить опыт мы упускаем, что явные...",
      "Равным образом, высокое качество позиционных…",
    ],
    v2: [
      "Синтетически, смешаны с не уникальными…",
      "В своём стремлении улучшить опыт мы…",
      "Равным образом, высокое качество позиционных высокотехнологичная концепция общественного уклада",
    ],
  };

  checkScreen();

  //work example img width

  const workExample = document.querySelector(".work-example");
  const text = workExample.querySelector("h3");
  const image = workExample.querySelector(".work-example__img");

  function setImgHeight() {
    const textMargin = window
      .getComputedStyle(text)
      .marginBottom.replace("px", "");
    const textHeight = text.offsetHeight;
    const workExampleHeight = workExample.offsetHeight;
    image.style.height = workExampleHeight - textHeight - textMargin + "px";
  }

  setImgHeight();

  window.addEventListener("resize", () => {
    setImgHeight();
    checkScreen();
  });

  //burger menu

  const burgerLabel = document.querySelector(".header__burger-container");
  const burgerCheckbox = document.querySelector("#open-burger");
  const body = document.querySelector("body");
  burgerLabel.addEventListener("click", () => {
    if (burgerCheckbox.checked) {
      body.style.overflow = "visible";
    } else {
      body.style.overflow = "hidden";
    }
  });
});
