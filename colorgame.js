var num = 6;

var colors = generateRandomColor(num);

var squares = document.querySelectorAll(".square");

var pickedcolor = pickColor();
var colordisplay = document.getElementById('colordisplay');
colordisplay.textContent = pickedcolor;
var message = document.querySelector('#message');
var resetbutton = document.querySelector('#reset');
var h1 = document.querySelector('h1');
var easy = document.querySelector('#easy');
var hard = document.querySelector('#hard');

easy.addEventListener('click', function(){
	easy.classList.add('selected');
	hard.classList.remove('selected');
	num = 3;
	colors = generateRandomColor(num);
	pickedcolor = pickColor();
	colordisplay.textContent = pickedcolor;
	for(var i =0;i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});

hard.addEventListener('click', function(){
	hard.classList.add('selected');
	easy.classList.remove('selected');
	num = 6;
	colors = generateRandomColor(num);
	pickedcolor = pickColor();
	colordisplay.textContent = pickedcolor;
	for(var i =0;i < squares.length; i++){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
	}
});

resetbutton.addEventListener('click',function(){
colors = generateRandomColor(6);
pickedcolor = pickColor();
colordisplay.textContent = pickedcolor;
for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
}
h1.style.background = '#232323';
});

for(var i = 0; i< squares.length; i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener('click', function(){
		var clickedcolor = this.style.background;
		clickedcolor = clickedcolor.replace(/\s+/g, '')
		if(clickedcolor === pickedcolor){
		message.textContent='Correct!';
		changecolors(clickedcolor);
		document.querySelector('h1').style.background = pickedcolor;
		resetbutton.textContent = 'Play Again?'
		}else{
		this.style.background = 'black';
		message.textContent='Try Again!'
	}
	});
}

function changecolors(color){
	//All square colors changes to given color
for(var i=0; i<squares.length;i++){
	squares[i].style.background = color;
}
}

function pickColor(){
var random = Math.floor(Math.random() * colors.length);
return colors[random];
}

function generateRandomColor(num){
 var arr = [];
 for(var i = 0; i < num; i++){
 	//get random colors and push to array
 	arr[i] = randomcolor();
 }
 return arr;
}

function randomcolor(){
	//pick red from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick green from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick blue from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + "," + g + "," + b + ")";
}