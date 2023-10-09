const ELEMENTS_SELECTOR = {
  accordion: "[data-accrodion]",
  accordionToggle: "[data-accrodion-toggle]",
  accrodionContent: "[data-accrodion-content]",
};

const CLASSES = {
  accordionOpen: "accordion__item--open",
};

export default function () {
  $(document).on("click", ELEMENTS_SELECTOR.accordionToggle, function () {
    const $parent = $(this).closest(ELEMENTS_SELECTOR.accordion),
      $content = $($parent).find(ELEMENTS_SELECTOR.accrodionContent);
    $parent.toggleClass(CLASSES.accordionOpen);
    $content.slideToggle();
  });
}
