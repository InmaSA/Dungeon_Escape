


window.onload = function() {

  let history = document.getElementsByTagName('p')[0]
  console.log(history)

  document.getElementById("start-button").onclick = function() {
    document.getElementById('dungeon-music').play()
    let introSection = document.getElementById('intro')
    introSection.setAttribute('class', 'disappear')
    game.init('canvas');
  };



};