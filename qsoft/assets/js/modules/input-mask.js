import inputmask from "inputmask";

const ELEMENTS_SELECTOR = {
  inputs: "[data-inputmask]",
};

export default function () {
  Inputmask().mask($(ELEMENTS_SELECTOR.inputs));
}
