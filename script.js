


window.onload = function() {

   document.getElementById("start-button").onclick = function() {

    document.getElementById('intro-music').parentNode.removeChild(document.getElementById('intro-music'))

    document.getElementById('dungeon-music').play()
    let introSection = document.getElementById('intro')
    introSection.setAttribute('class', 'disappear')
    game.init('canvas');
  };



};