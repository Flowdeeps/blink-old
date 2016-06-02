# Blink v1.0

Why? Nothing quite defines the early web like the <[blink](https://www.w3.org/wiki/HTML/Elements/blink)> tag. Apart from perhaps tables and marquees (which gives me an idea…)

Blink is such a quintessentially 90s web idea that has a wonderful origin story [attached to it](http://www.montulli.org/theoriginofthe%3Cblink%3Etag) that it's a genuine shame that it's not allowed anymore. This is the sort of thing in tech that could have only happened in its early days. With this project I'm bringing it back.

![-_-](https://github.com/Flowdeeps/blink/raw/master/assets/images/blink.gif)

How? There are two ways of using it, either just the CSS3 animation or for some reason you want to use a more semantic span and the .blink class you can include the JS. Be warned though, blink loads the entire body tree into memory, alters the string and then squirts it back into the body so any actions you're expecting to fire probably won't unless you reload them afterwards.

## Set Up Dev Environment

Do I need to do this? Only if you want to extend on the project and send it back. Otherwise, dependent on how you want to implement it, just copy the [assets/css/main.css](https://github.com/Flowdeeps/blink/raw/master/assets/css/main.css) and/or the [assets/js/init.js](https://github.com/Flowdeeps/blink/raw/master/assets/js/init.js) or [assets/js/init.min.js](https://github.com/Flowdeeps/blink/raw/master/assets/js/init.min.js) files and have at it.

Before either of the JS options will work you'll need to read and understand the ramifications of enabling them so open the files and make sure you do.

$npm install

$bower install

$grunt build

$grunt watch

I use python's SimpleHTTPServer for most front-end projects which you can use by navigating to the folder holding your index and typing:

$python -m SimpleHTTPServer

## License
MIT
