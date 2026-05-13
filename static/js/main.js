'use strict';

$(document).ready(() => {
  const SPECIAL_CHARACTER_START_CODE_POINT = 0x20;
  const SPECIAL_CHARACTER_END_CODE_POINT = 0x2FF;
  const module = $('#specialCharactersModal');
  const specialChars = $('.specialChars');
  let isSpecialCharactersPopulated = false;

  const populateSpecialCharacters = () => {
    if (isSpecialCharactersPopulated) return;
    const chars = [];
    for (let i = SPECIAL_CHARACTER_START_CODE_POINT; i <= SPECIAL_CHARACTER_END_CODE_POINT; i++) {
      chars.push(`<li class='specialChar'>&#${i}</li>`);
    }
    specialChars.append(chars.join(''));
    isSpecialCharactersPopulated = true;
  };

  $('.insertSpecialCharacter').click(() => {
    populateSpecialCharacters();
    module.toggleClass('popup-show');
  });

  $('#cancelspecialCharacter').click(() => {
    module.toggleClass('popup-show');
  });
  $('#specialCharactersModal').on('click', '.specialChar', function () {
    const char = ($(this).text());
    $('.usedSpecialCharacters').append(this);
    $('.usedSpecialCharactersLabel').show();
    const padeditor = window.padeditor;
    module.toggleClass('popup-show');
    if (!padeditor || !padeditor.ace) return;
    return padeditor.ace.callWithAce((ace) => {
      const rep = ace.ace_getRep();
      ace.ace_replaceRange(rep.selStart, rep.selEnd, char);
      ace.ace_focus();
    }, 'specialCharacters');
  });
});
