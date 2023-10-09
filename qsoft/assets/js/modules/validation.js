import validate from "jquery-validation";

const ELEMENTS_SELECTOR = {
  form: "[data-form]",
  submitBtn: "[data-form-submit]",
};

export default function () {
  $(document).on("click", ELEMENTS_SELECTOR.submitBtn, function (event) {
    const $form = $(this).closest(ELEMENTS_SELECTOR.form);
    $form.validate({});
    $($form)
      .find(":input")
      .each(function () {
        if ($(this).data("form-name") !== undefined) {
          $(this).rules("add", {
            minlength: 3,
            messages: {
              minlength: "Минимальная длина ввода 3 символа",
              required: "Заполните поле ввода",
            },
          });
        } else if ($(this).data("form-tel") !== undefined) {
          $(this).rules("add", {
            messages: {
              required: "Телефон указан неверно",
            },
          });
        } else if ($(this).data("form-email") !== undefined) {
          $(this).rules("add", {
            email: true,
            messages: {
              email: "Неверно введен email",
              required: "Заполните поле ввода",
            },
          });
        }
      });
  });
}
