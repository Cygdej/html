import fancybox from "@fancyapps/fancybox";

export default function () {
  $.fancybox.defaults.btnTpl = {
    smallBtn:
      '<div data-fancybox-close class="fancybox-close"><svg class="fancybox-close-icon icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.4142 11.9998L17.7072 7.70676C18.0982 7.31576 18.0982 6.68376 17.7072 6.29276C17.3162 5.90176 16.6843 5.90176 16.2933 6.29276L12.0002 10.5858L7.70725 6.29276C7.31625 5.90176 6.68425 5.90176 6.29325 6.29276C5.90225 6.68376 5.90225 7.31576 6.29325 7.70676L10.5862 11.9998L6.29325 16.2928C5.90225 16.6838 5.90225 17.3158 6.29325 17.7068C6.48825 17.9018 6.74425 17.9998 7.00025 17.9998C7.25625 17.9998 7.51225 17.9018 7.70725 17.7068L12.0002 13.4138L16.2933 17.7068C16.4883 17.9018 16.7442 17.9998 17.0002 17.9998C17.2562 17.9998 17.5122 17.9018 17.7072 17.7068C18.0982 17.3158 18.0982 16.6838 17.7072 16.2928L13.4142 11.9998Z" fill="CurrentColor"/></svg></div>',
  };
  $.fancybox.defaults.hash = false;
  $.fancybox.defaults.infobar = false;
  $.fancybox.defaults.toolbar = false;
  $.fancybox.defaults.smallBtn = true;
  $.fancybox.defaults.closeExisting = true;
  $.fancybox.defaults.touch = false;
  $.fancybox.defaults.hideScrollbar = true;
  $.fancybox.defaults.fullScreen = false;
  $.fancybox.defaults.backFocus = false;
  $.fancybox.defaults.keyboard = false;
  $.fancybox.defaults.arrows = false;
  $.fancybox.defaults.loop = false;

  $('[data-modal-type="modal"]').fancybox({
    baseClass: "modal",
  });

  $('[data-modal-type="modal-btn-out"]').fancybox({
    baseClass: "modal modal--btn-out",
  });
}
