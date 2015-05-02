var divInputText, buttonCompose, buttonSend, tagContent;

tagContent = '<br><br>' +
    '<div id="LiveTag" valign="bottom" align="center" style="display:none; position:absolute; border-top:1px solid #c0c0c0;padding:15px 5px;">' +
      '<table cellspacing="0" cellpadding="0" border="0">' +
          '<tbody>' +
            '<tr><td colspan="2"><a target="_blank" rel="nofollow" href="http://akim-adserver.herokuapp.com" style="display:block;width:300px;height:250px;"><img width="300" border="0" height="250" src="http://akim-adserver.herokuapp.com/ads"></a></td></tr>' +
            '<tr><td align="left"><a target="_blank" rel="nofollow" href="http://akim-adserver.herokuapp.com"><img border="0" src="http://akim-adserver.herokuapp.com/images/poweredby.png"></a></td><td align="right"><a target="_blank" rel="nofollow" href="http://akim-adserver.herokuapp.com"><img border="0" src="http://akim-adserver.herokuapp.com/images/adchoices.png"></a></td></tr>' +
          '</tbody>' +
      '</table>' +
    '</div>';


function displayTag(e) {
    e.stopPropagation();
    document.getElementById('LiveTag').style.display = "";

    console.log("LiveTag toggled:" , document.getElementById('LiveTag'));
}


function insertHiddenLiveTag(e) {
    console.log('LiveTag inserted but hidden');
    setTimeout( function() {
        divInputText = document.querySelector(".Am.Al.editable.LW-avf");
        divInputText.innerHTML = tagContent;
    }, 1000);
}

// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
buttonCompose = document.querySelector('.T-I.J-J5-Ji.T-I-KE.L3');
buttonCompose.addEventListener('click', insertHiddenLiveTag);

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

document.addEventListener("DOMNodeInserted", function (ev) {
  var node = ev.target;
  if (hasClass(node, 'L3')) {
      console.log("node inserted :", node);
      buttonSend = document.querySelector(".T-I.J-J5-Ji.aoO.T-I-atl.L3");
      buttonSend.addEventListener('click', displayTag);
  }
});