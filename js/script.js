const id = $('#heading');
console.log(id);

const listItems = $('.listItems');
console.log(listItems);

const element = $('p');
console.log(element);

    $('#heading').click(function() {
      let currentHeading = $(this).text();
      $(this).text(currentHeading + ' has been clicked');
      // console.log($(this).text());
      // $('p').hide();

    })

    $('.listItems').click(function() {
      $(this).hide();
      $('p').show();
    });

    $('#blueBtn').click(function() {
      $('.blue').toggle();
    })

    $('#greyBtn').click(function() {
      $('.grey').toggle();
    })

    $('#greenBtn').click(function() {
      $('.green').toggle();
    })

    $('#hideBtn').click(function() {
      $('.blue').hide();
      $('.grey').hide();
      $('.green').hide();
    })

    $('#showBtn').click(function() {
      $('.blue').show();
      $('.grey').show();
      $('.green').show();
    })
