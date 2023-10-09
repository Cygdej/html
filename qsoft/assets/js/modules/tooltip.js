import tippy from "tippy.js";

const ELEMENTS_SELECTOR = {
  tooltip: "[data-tooltip]",
};

export default function () {
  $(document)
    .find(ELEMENTS_SELECTOR.tooltip)
    .each((index, btn) => {
      const content = $(btn).data("tooltip");
      tippy(btn, {
        content: content,
        arrow: false,
        animation: "swift-away",
        duration: 100,
        theme: "light",
      });
    });
}
