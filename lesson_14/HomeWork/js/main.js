$(document).ready(function() {

  const showModal = () => {
    $('.modal').slideDown('slow');
    $('.overlay').fadeIn('slow');
  };

  $('.close').on('click', () => {
    $('.modal').slideUp('slow');
    $('.overlay').fadeOut('slow');
  });

  $('.main_btna').on('click', () => {
    showModal();
  });

  $('.main_btn').on('click', () => {
    showModal();
  });

  $('nav > ul > li:eq(1)').on('click', () => {
    showModal();
  });
});