function Element(id, type, color,filled) {
	this.id = id;
	this.type = type;
	this.color = color;
	this.filled = filled;
	console.log('new element created');
}

Element.prototype.editElement = function(id,type,color,filled) {
	this.id = id;
	this.type = type;
	this.color = color;
	this.filled = filled;
	console.log('element '+id+' edited');
}


Element.prototype.changeColor = function(color) {
	this.color = color;
}

Element.prototype.getColor = function() {
	return this.color;
}

Element.prototype.getType = function() {
	return this.type;
}

Element.prototype.getId = function() {
	return this.id;
}

Element.prototype.getFilled = function() {
	return this.filled;
}