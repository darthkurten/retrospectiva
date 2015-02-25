var waypoint = new Waypoint({
  element: document.getElementById('#oito'),
  handler: function(direction) {
    console.log('Scrolled to waypoint!');
  }
})