$(document).ready(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
    animationSpeed: 800,
    slideshowSpeed: 5000,
    directionNav: true
  });

  $('[data-js-open-modal]').click(function() {
      openModal();
  });

  $('[data-js-modal-close]').click(function() {
      closeModal();
  });
});

function openModal() {
    $('body').addClass('modalIsOpen');
    $('[data-js-modal]').addClass('isOpen');
}

function closeModal() {
    $('body').removeClass('modalIsOpen');
    $('[data-js-modal]').removeClass('isOpen');
}
