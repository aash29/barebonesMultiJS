/*  Copyright 2012-2016 Sven "underscorediscovery" Bergström

    written by : http://underscorediscovery.ca
    written for : http://buildnewgames.com/real-time-multiplayer/

    MIT Licensed.
*/

	//A window global for our game root variable.
var game = {};

	//When loading, we store references to our
	//drawing canvases, and initiate a game instance.
window.onload = function(){

		//Create our game client instance.
	game = new game_core();

			//Fetch the viewport
		game.viewport = document.getElementById('viewport');

			//Adjust their size
		game.viewport.width = game.world.width;
		game.viewport.height = game.world.height;

			//Fetch the rendering contexts
		game.ctx = game.viewport.getContext('2d');


    function getMousePos(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
     }
    };

      game.viewport.addEventListener('mousemove', function(evt) {
      var mousePos = getMousePos(game.viewport, evt);
      //var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
      game.client_handle_mouse(mousePos)
    }, false);


		game.viewport.addEventListener('mousedown', function(evt) {
		//var mousePos = getMousePos(game.viewport, evt);
		//var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
		game.client_handle_mouseDown()
	}, false);




			//Set the draw style for the font
		game.ctx.font = '11px "Helvetica"';

		//Finally, start the loop
	game.update( new Date().getTime() );

}; //window.onload
