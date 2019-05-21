$(document).ready(function() {

  const showModal = () => {
    $('.modal').slideDown('slow');
    $('.overlay').fadeIn('slow');
  };

  $('.close').on('click', () => {
    $('.modal').slideUp('slow');
    $('.overlay').fadeOut('slow');
  });

  $('.main_btna, .main_btn, [href = "#sheldure"]').on('click', () => {
    showModal();
  });
});