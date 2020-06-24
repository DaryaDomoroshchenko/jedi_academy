import './scss/main.scss';
import * as $ from 'jquery';

$(() => {

  $('.header__link').click(function(event) {
    const clicked_element_id = $(this).attr('href');
    const destination = $(clicked_element_id).offset().top;
    $('html, body').animate({scrollTop: destination}, 1000);

    return false;
  });

});

