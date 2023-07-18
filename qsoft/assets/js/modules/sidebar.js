const ELEMENTS_SELECTOR = {
  sidebar: "[data-sidebar]",
  sidebarCloseBtn: "[data-sidebar-close]",
  sidebarOpenBtn: "[data-sidebar-open]",
};

const CLASSES = {
  sidebarOpen: "sidebar--open",
};

export default function () {
  $(document).on("click", ELEMENTS_SELECTOR.sidebarOpenBtn, function () {
    $(this).closest(ELEMENTS_SELECTOR.sidebar).addClass(CLASSES.sidebarOpen);
    $(document).find("body").css("overflow", "hidden");
  });
  $(document).on("click", ELEMENTS_SELECTOR.sidebarCloseBtn, function () {
    $(this).closest(ELEMENTS_SELECTOR.sidebar).removeClass(CLASSES.sidebarOpen);
    $(document).find("body").css("overflow", "visible");
  });
}
