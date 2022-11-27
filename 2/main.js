window.addEventListener("DOMContentLoaded", function () {
  const cardsTitles = {
    desktop: ["Виджеты", "Dashboard", "Skype Аудит", "35 дней"],
    mobile: ["Skype аудит", "30 виджетов", "Dashboard", "Месяц аmoCRM"],
  };

  function createTitles(device) {
    const titles = document.querySelectorAll(
      ".main__consultation-service-title"
    );
    let i = 0;
    titles.forEach((element) => {
      element.innerHTML = cardsTitles[device][i];
      i++;
    });
  }

  function checkWindowsize() {
    const width = document.body.clientWidth;
    if (width < 740) {
      createTitles("mobile");
    } else {
      createTitles("desktop");
    }
  }

  checkWindowsize();

  window.onresize = checkWindowsize;
});
