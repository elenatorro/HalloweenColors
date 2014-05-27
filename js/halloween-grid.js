function Grid(container,elements) {
	this.container = container;
	this.elements = elements;
}

Grid.prototype.addElement = function(id,content,color) {
	/*creates the halloween-element*/

	}

Grid.prototype.deleteElement = function(id) {
	document.getElementById(id).innerHTML = "";
}

Grid.prototype.uploadScore = function(score) {
	document.getElementById('score').innerHTML = "Score: "+score+" points.";
}

Grid.prototype.uploadBest = function(score) {
	document.getElementById('best').innerHTML = "Best: "+score+" points.";
}


Grid.prototype.initGrid = function() {
	var color;
	for (var i = 0; i < this.elements.length; i++) {
			this.elements[i].onclick = function() {
				this.style.transition = 'color 0.6s';
				this.style.WebkitTransition = 'color 0.6s';
				this.style.MozTransition = 'color 0.6s';
				color = colors.randomColor();
				this.style.color = color;
				game.getMatrix().getElementById(this.id).changeColor(color);
				game.reload(this.id,color);
			}
		}
}

Grid.prototype.uploadGrid = function() {
		for (var i = 0; i < this.elements.length; i++) {
			this.elements[i].innerHTML = "<i class='icons flaticon-"+game.getMatrix().getElementById(this.elements[i].id).getType()+"'></i>";
			this.elements[i].style.color = game.getMatrix().getElementById(this.elements[i].id).getColor();
		}
}