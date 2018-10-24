// INFO2180-LAB4
// Web Development
// 620088389

// Global variables
var boundaries;
var end;
var start;
var status;
var mazeBoundary;
var win = false;
var outOfBounds = false;

// Sets up any necessary event handlers on page
window.onload = function() {
  boundaries  = document.querySelectorAll(".boundary" []);
  end         = document.getElementById("end");
  start       = document.getElementById("start");
  status      = document.getElementById("status");
  mazeBoundary= document.getElementById("maze");
}
