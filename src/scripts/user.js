require('jquery');

$(document).ready(() => {
  $('select').material_select();

  $('#new-user-form').on('submit', (e) => {
    e.preventDefault();
    if($('#firstName').val() == '' || $('#lastName').val() == '' || $('#userName').val() == '' || $('#permission').val() == '') {
      $('#error').text('you are missing some info');
    }else if ($('#password').val() == '' || $('#password').val() != $('#passwordConfirm').val()) {
      $('#error').text('the passwords you entered don\'t match');
    }else {
      $('#new-user-form')[0].submit();
    }
  });
});