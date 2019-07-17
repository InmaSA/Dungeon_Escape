


window.onload = function() {

  let history = document.getElementsByTagName('p')[0]
  console.log(history)

  document.getElementById("start-button").onclick = function() {
    document.getElementsByClassName('dungeon-music')[0].play()
    let introSection = document.getElementById('intro')
    introSection.setAttribute('class', 'disappear')
    game.init('canvas');
  };



};