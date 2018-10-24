// INFO2180-LAB4
// Web Development
// 620088389

var boundaries;
var end;
var start;
var status;
var mazeBoundary;
var win = false;
var outOfBounds = false;

window.onload = function() {
    boundaries  = document.querySelectorAll(".boundary");
    end         = document.getElementById("end");
    start       = document.getElementById("start");
    status      = document.getElementById("status");
    mazeBoundary= document.getElementById("maze");

    start.onclick = resetGame;
    mazeBoundary.onmouseleave = noCheating;
    end.onmouseover = checkWin;
    for (var i = 0; i < boundaries.length - 1; i++) {
		boundaries[i].onmouseover = overBoundary;
  }
}

function overBoundary(){
	if (!win){
		if(!outOfBounds)
		{
			outOfBounds = true;
			status.innerText = 'You Lose! Select "S" to try again.';
			for (var i = 0; i < boundaries.length - 1; i++) {
			boundaries[i].className += " youlose";
			}
		}
	}
}

function checkWin(){
	if(!outOfBounds){
		win = true;
		status.innerText = 'You Win! Select "S" to try again.';
		}

}

function resetGame(){
	win = false;
	outOfBounds = false;
	status.innerText = 'Move your mouse over the "S" to begin.';
	for (var i = 0; i < boundaries.length - 1; i++) {
		boundaries[i].className = "boundary";
	}
}

function noCheating(){
	if(!win){
		overBoundary();
		}

}
