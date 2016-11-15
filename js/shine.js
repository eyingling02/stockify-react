var shine = new Shine(document.getElementsByClassName('outer'));

console.log('shine')

window.addEventListener('mousemove', function(event) {
  shine.light.position.x = event.clientX;
  shine.light.position.y = event.clientY;
  shine.draw();
}, false);
