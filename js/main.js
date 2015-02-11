(function(){
	
	function resizeDomino() {
		var dominoEl = document.querySelector(".domino");
		var width = dominoEl.offsetHeight / 2;
		dominoEl.style.width = width + "px";


		running = false;
	}

	function resize() {
		if(!running) {
			running = true;

			window.requestAnimationFrame(resizeDomino);
		}
	}

	function changeDominoFace() {
		var faces = [ "one", "two", "three", "four", "five", "six" ],
			random,
			dominoEl = document.querySelector(".domino"),
			face1El = dominoEl.querySelector("div:first-of-type"),
			face2El = dominoEl.querySelector("div:last-of-type");

		random = Math.floor( Math.random() * 6 );

		face1El.className = faces[random];

		random = Math.floor( Math.random() * 6 );

		face2El.className = faces[random];
	}

	function rotateDomino(direction) {
		var dominoEl = document.querySelector(".domino"),
			angle = parseInt(dominoEl.getAttribute("data-angle"), 10) || 0,
			style = dominoEl.style;

		angle += ( direction == 0 ? 90 : -90 );
		angle = Math.abs(angle) === 360 ? 0 : angle;

		style["-webkitTransform"] = "rotate(" + (angle.toString()) + "deg)";
		style["-mozTransform"] = "rotate(" + (angle.toString()) + "deg)";
		style["-msTransform"] = "rotate(" + (angle.toString()) + "deg)";
		style.transform = "rotate(" + (angle.toString()) + "deg)";
		dominoEl.setAttribute("data-angle", angle);
	}
		

	var running = true,
		dominoEl = document.querySelector(".domino"),
		actionsEl = document.querySelector(".actions");

	resizeDomino();

	window.addEventListener("resize", resize);

	dominoEl.addEventListener("click", function(e) {
		changeDominoFace();
	});

	actionsEl.addEventListener("click", function(e) {
		var srcEl = e.target,
			direction;
		if(srcEl.tagName == "BUTTON") {
			direction = parseInt(srcEl.getAttribute("data-direction"));
			rotateDomino(direction);
		}
	});

})();
