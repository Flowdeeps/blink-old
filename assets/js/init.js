window.onload = function() {

	var addBadBlink = function() {

		var body = document.getElementsByTagName( "body" ),
				bodyText = body[0].innerHTML,
				blink1 = /<blink>/g,
				blink2 = /<\/blink>/g;

				bodyTextNew = bodyText.replace( blink1, "<span class=\"blink\">").replace( blink2, "</span>");

				console.log(bodyText, bodyTextNew);

				body[0].innerHTML = bodyTextNew;

	}();

};
