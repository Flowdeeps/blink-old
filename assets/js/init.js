window.onload = function() {

	// To get either of these to work you'll have to enable one of the functions below
	// moral dilema
	// addGoodBLink();
	// addBadBlink();

	var addBadBlink = function() {

		var body = document.getElementsByTagName( "body" ),
				bodyText = body[0].innerHTML,
				blink1 = /<blink>/g,
				blink2 = /<\/blink>/g;

				bodyTextNew = bodyText.replace( blink1, "<span class=\"blink\">").replace( blink2, "</span>");

				body[0].innerHTML = bodyTextNew;

	}

	var addGoodBlink = function() {

		var blinks = document.getElementsByTagName( "blink" ),
				blinking = false;

		setInterval (function() {
			blinkElems();
		}, 1000);

		var blinkElems = function() {
			if ( blinking == false ) {
				blinking = true;
				for ( i = 0; i < blinks.length ; i++ ) {
					blinks[i].setAttribute( "class", "-_-" );
				}
			} else {
				blinking = false;
				for ( i = 0; i < blinks.length ; i++ ) {
					blinks[i].classList.remove( "-_-" );
				}
			}
			console.log(blinking);
		}

	};

};
