window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    let introSection = document.getElementById('intro')
    introSection.setAttribute('class', 'disappear')
    game.init('canvas');
  };



};