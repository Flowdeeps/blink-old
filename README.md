# Blink v1.0

Why? Nothing quite defines the early web like the <[https://www.w3.org/wiki/HTML/Elements/blink](blink)> tag. Apart from perhaps tables and marquees (which gives me an idea…)
Blink is such a quintessentially 90s web idea that has a wonderful origin story [http://www.montulli.org/theoriginofthe%3Cblink%3Etag](attached to it) that it's a genuine shame that it's not 
allowed anymore. This is the sort of thing in tech that could have only happened in its early days. With this project I'm bring it back.

Markup : !(-_-)[https://github.com/Flowdeeps/blink/raw/master/assets/images/blink.gif]

How? There are two ways of using it, either just the css3 animation or for some reason you want to use a more semantic span and the .blink class you can include the js. Be warned though, 
blink loads the entire body tree into memory, alters the string and then quirts it back into the body so any actions you're expecting to fire probably 
won't unless you reload them after blink.

## Installation

$npm install

$bower install

$grunt build

$grunt watch

I use python's SimpleHTTPServer for most front-end 
projects which you can use by navigating to the folder 
holding your index and typing:

$python -m SimpleHTTPServer

## License
MIT
