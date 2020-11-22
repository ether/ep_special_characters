$(document).ready(() => {
  $('.insertSpecialCharacter').click(() => {
    const module = $('#specialCharactersModal');
    if (module.css('display') != 'none') {
      module.slideUp('fast');
    } else {
      module.slideDown('fast');
    }
  });

  $('#cancelspecialCharacters').click(() => {
    $('#specialCharactersModal').slideUp('fast');
  });
  $('#specialCharactersModal').on('click', '.specialChar', function () {
    const char = ($(this).text());
    $('.usedSpecialCharacters').append(this);
    $('.usedSpecialCharactersLabel').show();
    const padeditor = require('ep_etherpad-lite/static/js/pad_editor').padeditor;
    $('#specialCharactersModal').slideUp('fast');
    return padeditor.ace.callWithAce((ace) => {
      rep = ace.ace_getRep();
      ace.ace_replaceRange(rep.selStart, rep.selEnd, char);
      ace.ace_focus();
    }, 'specialCharacters');
  });

  let i = 0;
  const total = 65535;
  while (i <= 5000) {
    $('.specialChars').append(`<li class='specialChar'>&#${i}</li>`);
    i++;
  }
});
