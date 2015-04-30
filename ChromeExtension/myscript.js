var divInputText, compose, buttonSend;


function displayTag(e) {
    e.stopPropagation();
    document.getElementById('LiveTag').style.display = "";
    //divInputText.innerHTML= '<br><br><img id="LiveTag" border="0" width="600" height="200" id="ecx_x0000_i1051" src="http://www.adestra.com/wp-content/uploads/2013/09/live-intent-logo.png">';

    console.log(document.getElementById('LiveTag'));
}


function insertHiddenLiveTag(e) {
    console.log('hi');
    setTimeout( function() {
        divInputText = document.querySelector(".Am.Al.editable.LW-avf");
        divInputText.innerHTML= '<br><br><img id="LiveTag" style="display:none" border="0" width="600" height="200" id="ecx_x0000_i1051" src="http://akim-adserver.herokuapp.com/ads">';

    }, 1000);
}

// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
compose = document.querySelector('.T-I.J-J5-Ji.T-I-KE.L3');
compose.addEventListener('click', insertHiddenLiveTag);

//console.log(compose);

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

document.addEventListener("DOMNodeInserted", function (ev) {
  var node = ev.target;
  if (hasClass(node, 'L3')) {
      console.log("node created :", node);
      buttonSend = document.querySelector(".T-I.J-J5-Ji.aoO.T-I-atl.L3");
      buttonSend.addEventListener('click', displayTag);
  }
});