const ELEMENTS_SELECTOR = {
  textContainer: "[data-show-more-container]",
  openBtn: "[data-show-more-toggle]",
};

const CLASSES = {
  textContainerOpen: "show-more--open",
};

export default function () {
  $(document).on("click", ELEMENTS_SELECTOR.openBtn, function () {
    const $container = $(this).closest(ELEMENTS_SELECTOR.textContainer);
    $container.toggleClass(CLASSES.textContainerOpen);
    if ($container.hasClass(CLASSES.textContainerOpen)) {
      $(this).contents()[0].data = "Скрыть";
    } else {
      $(this).contents()[0].data = "Показать еще";
    }
  });
}
