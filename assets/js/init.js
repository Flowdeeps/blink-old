window.onload = function() {

	var addGoodBlink = function() {

		var elem = document.getElementById( "good_js_blink" ),
				blinks = elem.getElementsByTagName( "blink" ),
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
		}

	}();

	var addBadBlink = function() {

		var elem = document.getElementById( "bad_js_blink" ),
				elemText = elem.innerHTML;
				blink1 = /<blink>/g,
				blink2 = /<\/blink>/g;

				elemTextNew = elemText.replace( blink1, "<span class=\"-_-\">").replace( blink2, "</span>");

				elem.innerHTML = elemTextNew;

	}();

};
