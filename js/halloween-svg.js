function ElementSVG(arr) {
	this.arr = arr;
}

ElementSVG.prototype.randomElement = function() {
	var r = Math.floor((Math.random() * 11) + 0);
	return this.arr[r];
}

var svg = [	
	'cat2',
	'cross3',
	'creepy',
	'flying6',
	'halloween42',
	'halloween43',
	'halloween46',
	'halloween47',
	'halloween42',
	'halloween60',
	'pumpkin2',
	'spider4'
];

icons = new ElementSVG(svg);