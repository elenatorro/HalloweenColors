/*GAME*/
function Game(time, score) {
	this.time = time;
	this.score = score;
	this.matrix = new Matrix();
	console.log('New game, go!');
}


Game.prototype.getMatrix = function() {
	return this.matrix;
}

Game.prototype.getGrid = function() {
	return this.matrix.getGrid();
}

Game.prototype.getScore = function() {
	return this.score;
}


Game.prototype.reload = function(id,color) {
	var i = 0;
	var j = 0;
	var aux1 = this.getMatrix().getElementById(id);
	var aux2;
	while (i < this.matrix.getMaxRows()) {
		while (j < this.matrix.getMaxColumns()) {
			aux2 = this.getMatrix().getElement(i,j)
			if (aux2.getFilled()) {
				if (compareElements(aux1,aux2)) {
					this.getMatrix().removeElementById(id);
					this.getMatrix().removeElementById(aux2.getId());
					this.score++;
					this.getMatrix().getGrid().uploadScore(this.score);
					console.log("elements deleted");
					break;
				}
			};
			j++;
			}
		i++;
		j=0;
	}
}


function StartGame() {
	game = new Game(0,0);
	addRow();
	game.getMatrix().getGrid().uploadGrid();
	game.getMatrix().getGrid().uploadScore(0);
	game.getMatrix().getGrid().initGrid();
	
	/*set time: every 10 seconds call to addElements*/
}

function FinishGame() {
		window.clearTimeout(started);
		document.getElementById('lost').style.visibility = 'visible';
		document.getElementById('tweet-button').setAttribute("data-text",'I scored '+game.getScore()+' in Halloween Colors');
		document.getElementById('alert-score').innerHTML = 'Score: '+game.getScore();
		
}

function Close(id) {
	document.getElementById(id).style.visibility = 'hidden';
}

function ShowInstructions() {
	document.getElementById('instructions').style.visibility = 'visible';
}
function addRow() {
	started = window.setTimeout(function() {addRow()},3000);
	var count = 0;
	var i = 0;
	var j = 0;
	var id;
	while ((i < game.getMatrix().getMaxRows()) && (count < 5)) {
		while ((j < game.getMatrix().getMaxColumns())  && (count < 5)) {
			if (!game.getMatrix().getElement(i,j).getFilled()) {
				id = i.toString()+j.toString();
				count++;
				game.getMatrix().editElement(i,j,id,icons.randomElement(),colors.randomColor(),true);
			};
			j++;
		}
		i++;
		j=0;
	}
	if (count > 0) {
		game.getMatrix().getGrid().uploadGrid();
	}
	else {
		FinishGame();
	}
}


function compareElements(e1, e2) {
	if ((e1!=null) && (e2!=null)) {
	if ((e1.id!=e2.id) && (e1.type == e2.type) && (e1.color == e2.color)) {
		return true;
	} 
	else {
		return false;
	} 
}
	else return false;
}



function MoonMoveBig() {
	var moon = document.getElementById('moon');
	moon.style.fontSize = '3.3em';
	moon.style.transition = 'font-size 1.8s';
	moon.style.WebkitTransition = 'font-size 1.8s';
	moon.style.MozTransition = 'font-size 1.8s';
	window.setTimeout(function() {MoonMoveSmall()},2000);
}

function MoonMoveSmall() {
	var moon = document.getElementById('moon');
	moon.style.fontSize = '3em';
	moon.style.transition = 'font-size 1.8s';
	moon.style.WebkitTransition = 'font-size 1.8s';
	moon.style.MozTransition = 'font-size 1.8s';
	window.setTimeout(function() {MoonMoveBig()},2000);
}

MoonMoveBig();

