$(document).ready(function () {
  $(".insertSpecialCharacter").click(function () {
    var module = $("#specialCharactersModal");
    if (module.css('display') != "none") {
      module.slideUp("fast");
    } else {
      module.slideDown("fast");
    }
  });

  $("#cancelspecialCharacters").click(function () {
    $("#specialCharactersModal").slideUp("fast");
  });
  $("#specialCharactersModal").on('click', '.specialChar', function(){
    var char = ($(this).text());
    $('.usedSpecialCharacters').append(this);
    $('.usedSpecialCharactersLabel').show();
    var padeditor = require('ep_etherpad-lite/static/js/pad_editor').padeditor;
    $("#specialCharactersModal").slideUp("fast");
    return padeditor.ace.callWithAce(function (ace) {
      rep = ace.ace_getRep();
      ace.ace_replaceRange(rep.selStart, rep.selEnd, char);
        ace.ace_focus();
    }, "specialCharacters");
    
  });

  var i = 0;
  var total = 65535;
  while (i <= 5000){
    $('.specialChars').append("<li class='specialChar'>&#"+i+"</li>");
    i++;
  }

});
