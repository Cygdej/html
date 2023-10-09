import select2 from "select2";
import niceScroll from "jquery.nicescroll";

const ELEMENTS_SELECTOR = {
  selectBox: "[data-select]",
  selectControl: "[data-select-control]",
};

export default function () {
  const baseOptions = {};

  $(ELEMENTS_SELECTOR.selectControl).each(function (index, select) {
    const $selectBox = $(select).closest(ELEMENTS_SELECTOR.selectBox),
      $placeholder = $(select).data("placeholder"),
      currentOptions = {
        ...baseOptions,
        $placeholder,
        dropdownParent: $selectBox,
      };

    $(select)
      .select2(currentOptions)
      .on("select2:open", function () {
        $(".select2-results__options").niceScroll({
          cursorcolor: "#BBC4D6",
          cursorwidth: "4px",
          autohidemode: false,
          cursorborder: "1px solid #BBC4D6",
          horizrailenabled: false,
        });
      });
  });
}
