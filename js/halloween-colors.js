function ColorPalette(colors) {
	this.colors = colors;
}


ColorPalette.prototype.randomColor = function() {
	var r = Math.floor((Math.random() * 6) + 0);
	return this.colors[r];
}

var array = ['#989dff','#6acb0a','#bf0051','#0073c3','#00ffba','#265a6b','white'];
colors = new ColorPalette(array);

