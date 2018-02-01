var userUpload;

function preload() {
	userUpload = loadImage("Tierra.jpg");
}

function setup() {
	createCanvas(userUpload.width, userUpload.height);
}

function draw() {
	background(0);
	image(userUpload, 0, 0);
	loadPixels();
	for (var row = 0; row < height; row++) {
		for (var col = 0; col < width; col++) {
			var startingIndex = (col + row * width) * 4;
			var r = pixels[startingIndex];
			var g = pixels[startingIndex + 1];
			var b = pixels[startingIndex + 2];
			var a = pixels[startingIndex + 3];
			if (keyIsPressed) {
				if (key == "1") {
					gray_filter(startingIndex, g, a);
				}
				if (key == "2") {
					tierra(startingIndex, r, g, b, a);
				}
				if (key == "3") {
					love(startingIndex, r, g, b, a);
				}
				if (key == "4") {
					colors(startingIndex, r, g, b, a);
				}
				if (key == "5") {
					iloveprogramming(startingIndex, g, a);
				}
				if (key == "6") {
					tierrasmith(startingIndex, r, g, b, a);
				}
				if (key == "7"){
					freestyle(startingIndex, r, g, b, a);
				}
				
				if(key=="8"){
					myown(startingIndex,a);
				}
				
				if(key=="9"){
					goodcolors(startingIndex, r, g, b, a);
				}
				if(key=="q"){
					doingwhatiwant(startingIndex, r, g , b , a);
				}
				
			}
		}
	}
	updatePixels();
}

function gray_filter(startingIndex, g, a) {
	pixels[startingIndex + 0] = g; //red
	pixels[startingIndex + 1] = g; //green
	pixels[startingIndex + 2] = g; //blue
	pixels[startingIndex + 3] = a; //alpha
}

function tierra(startingIndex, r, g, b, a) {
	pixels[startingIndex + 0] = r / 2; //red
	pixels[startingIndex + 1] = g / 2; //green
	pixels[startingIndex + 2] = b / 2; //blue
	pixels[startingIndex + 3] = a; //alpha
}

function love(startingIndex, r, g, b, a) {
	pixels[startingIndex + 0] = r * 2; //red
	pixels[startingIndex + 1] = g * 2; //green
	pixels[startingIndex + 2] = b * 2; //blue
	pixels[startingIndex + 3] = a; //alpha
}

function colors(startingIndex, r, g, b, a) {
	pixels[startingIndex + 0] = 255 - r; //red
	pixels[startingIndex + 1] = 255 - g; //green
	pixels[startingIndex + 2] = 255 - b; //blue
	pixels[startingIndex + 3] = a; //alpha
}

function iloveprogramming(startingIndex, g, a) {
	pixels[startingIndex + 0] = 0; //red
	pixels[startingIndex + 1] = g; //green
	pixels[startingIndex + 2] = 0; //blue
	pixels[startingIndex + 3] = a; //alpha 
}

function tierrasmith(startingIndex, r, g, b, a) {
	pixels[startingIndex + 0] = r; //red
	pixels[startingIndex + 1] = g; //green
	pixels[startingIndex + 2] = b; //blue
	pixels[startingIndex + 3] = a; //alpha 
}

function freestyle(startingIndex, r, g , b , a) {
	pixels[startingIndex + 0] = r- 250; //red
	pixels[startingIndex + 1] = g - 50; //green
	pixels[startingIndex + 2] = b; //blue
	pixels[startingIndex + 3] = a; //alpha 
}

function myown(startingIndex,a ){
    pixels[startingIndex + 0] = 255; //red
	pixels[startingIndex + 1] = 0; //green
	pixels[startingIndex + 2] = 0; //blue
	pixels[startingIndex + 3] = a; //alpha 
}

function goodcolors(startingIndex,r, g, b, a ){
	pixels[startingIndex + 0] = r+150; //red
	pixels[startingIndex + 1] = g+50; //green
	pixels[startingIndex + 2] = b; //blue
	pixels[startingIndex + 3] = a; //alpha 
}

function doingwhatiwant(startingIndex, r, g, b, a){
	pixels[startingIndex + 0] = r - 600; //red
	pixels[startingIndex + 1] = g + 100; //green
	pixels[startingIndex + 2] = b +660; //blue
	pixels[startingIndex + 3] = a; //alpha 
}


