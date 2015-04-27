var s = document.createElement('script');
// TODO: add "myscript.js" to web_accessible_resources in manifest.json
s.src = chrome.extension.getURL('myscript.js');
s.onload = function() {
    this.parentNode.removeChild(this);
};
var head = document.getElementsByTagName("head")[0];

head.insertBefore(s, head.firstChild);
//(document.title||document.documentElement).appendChild(s);