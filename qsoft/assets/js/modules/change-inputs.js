const ELEMENTS_SELECTOR = {
  form: "[data-form]",
  select: "[data-select-control]",
  inputs: "[data-select-value]",
};

export default function () {
  $(ELEMENTS_SELECTOR.select).each(function () {
    toggleInputs(this);

    $(this).change(function () {
      toggleInputs(this);
    });
  });

  function toggleInputs(el) {
    const $value = $(el).val(),
      $form = $(el).closest(ELEMENTS_SELECTOR.form);

    $form.find(ELEMENTS_SELECTOR.inputs).each(function () {
      if ($(this).data("select-value") == $value) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }
}
