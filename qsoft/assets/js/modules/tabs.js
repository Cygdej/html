const ELEMENTS_SELECTOR = {
  tabs: "[data-tabs]",
  tab: "[data-tab]",
  section: "data-tab-section",
};

const CLASSES = {
  tabActive: "tabs__item--active",
  sectionActive: "tabs__block--active",
};

export default function () {
  $(document).on("click", ELEMENTS_SELECTOR.tab, function () {
    let name = $(this).data("tab"),
      container = $(this).closest(ELEMENTS_SELECTOR.tabs);

    container.find(ELEMENTS_SELECTOR.tab).removeClass(CLASSES.tabActive);
    container
      .find(`[${ELEMENTS_SELECTOR.section}]`)
      .removeClass(CLASSES.sectionActive);

    $(this).addClass(CLASSES.tabActive);
    container
      .find(`[${ELEMENTS_SELECTOR.section}="${name}"]`)
      .addClass(CLASSES.sectionActive);
  });
}
