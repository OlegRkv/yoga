$(function(){
  $('.menu__button').on('click', function(){
    $('.menu__button').toggleClass('menu__button--active'),
    $('.menu__list').toggleClass('menu__list--active'),
    $('body').toggleClass('lock-scroll')
  })
})