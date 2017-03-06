var pic = document.getElementById("vimage");
var b = document.getElementById("b");

var circle = function() {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var xcor = event.clientX;
    var ycor = event.clientY;
    
    c.setAttribute("cx", xcor-10);
    c.setAttribute("cy", ycor-80);
    c.setAttribute("r", 20);
    c.setAttribute("fill", "blue");
    c.setAttribute("stroke", "black");
    return c;
};

var addCircle = function() {
    pic.appendChild(circle());
};

pic.addEventListener("click", addCircle);

var clear = function() {
    if (pic.childNodes.length > 0){
	pic.removeChild(pic.childNodes[0]);
    }
};

b.addEventListener("click", clear);

