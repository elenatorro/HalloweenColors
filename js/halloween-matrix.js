function Matrix() {
	this.numRows = 0;
	this.numColumns = 0;
	this.maxRows = 5;
	this.maxColumns = 5;
	this.arr = createArray();
	this.grid = new Grid(document.getElementById('board'),document.getElementsByClassName('elements'));
	console.log('New matrix');
}

function createArray() {
	var arr = [];
	var id = "";
	for (var i = 0; i < 5; i++) {
		arr[i] = [];
		for (var j = 0; j < 5; j++) {
			id = i.toString()+j.toString();
			arr[i][j] = new Element(id,null,null,false);
		}
	}
	return arr;
}


Matrix.prototype.getGrid = function() {
	return this.grid;
}

Matrix.prototype.addElement = function(x,y,id) {
	this.arr[x][y] = new Element(id,icons.randomElement(), arrayColors.randomColor(),x,y);
}

Matrix.prototype.editElement = function(x,y,id,type,color,filled) {
	this.arr[x][y].editElement(id,type,color,filled);
}

Matrix.prototype.getElement = function(x,y) {
	return this.arr[x][y];
}

Matrix.prototype.getElementById = function(id) {
	var x = id[0];
	var y = id[1];
	return this.arr[x][y];
	console.log(x+y+" get");
}

Matrix.prototype.removeElement = function(x,y) {
	this.arr[x][y].editElement(this.arr[x][y].id,null,null,false);
	console.log(x+''+y+" element removed");
}

Matrix.prototype.removeElementById = function(id) {
	var x = id[0];
	var y = id[1];
	this.arr[x][y].editElement(this.arr[x][y].id,null,null,false);
	this.getGrid().deleteElement(id);
	console.log(x+''+y+" element removed");
}

Matrix.prototype.showArray = function() {
	var str = "";
	for (var i = 1; i <= this.maxRows; i++) {
		for (var j = 1; j <= this.maxColumns; j++) {
			alert(this.arr[i][j].getId());
		}
	}
}

Matrix.prototype.searchElement = function(id,color) {
	var i = 0;
	var j = 0;
	var aux;
	while (i<this.maxRows) {
		while (j<this.maxColumns) {
			if (this.arr[i][j]!=null) {
				if (this.arr[i][j].getId() == id) {
					this.arr[i][j].changeColor(color);
					return this.arr[i][j];
				}	
			}
			j++;
		}
		i++;
		j=0;
	}
	return null;
}



Matrix.prototype.getMaxRows = function() {
	return this.maxRows;
}

Matrix.prototype.getMaxColumns = function() {
	return this.maxColumns;
}