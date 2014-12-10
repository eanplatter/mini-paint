$(document).on('ready', function() {
  console.log('jquery local')
  var color = 'white'
  var colors = 'white green red blue yellow'
  $('.box').on('click', function() {
    $(this).addClass(color);
  })

  $('.box').on('dblclick', function() {
    $(this).removeClass(colors);
  })

  $('#reset').on('click', function() {
    $('.box').removeClass(colors)
  })

  $('#red').on('click', function() {
    color = 'red';
  })

  $('#blue').on('click', function() {
    color = 'blue';
  })

  $('#green').on('click', function() {
    color = 'green';
  })

  $('#yellow').on('click', function() {
    color = 'yellow';
  })

  $('#white').on('click', function() {
    color = 'white';
  })

})











  // $('.box').on('click', function() {
  //   if($(this).hasClass('white')) {
  //     $(this).removeClass('white');
  //     $(this).addClass('yellow');
  //   } else if($(this).hasClass('yellow')) {
  //     $(this).removeClass('yellow');
  //     $(this).addClass('blue');
  //   } else if($(this).hasClass('blue')) {
  //     $(this).removeClass('blue');
  //     $(this).addClass('red');
  //   } else if($(this).hasClass('red')) {
  //     $(this).removeClass('red');
  //     $(this).addClass('green');
  //   } else if($(this).hasClass('green')) {
  //     $(this).removeClass('green');
  //   } else {
  //     $(this).addClass('white');
  //   }
  // });