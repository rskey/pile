var Walker = function() {
    this.x = width/2;
    this.y = height/2;
};

Walker.prototype.display = function() {
    strokeWeight(3);
    stroke(0, 0, 0);
    point(this.x, this.y);
};

Walker.prototype.walk = function() {
 
    var xStepSize = random(-5, 5);
    var yStepSize = random(-5, 5);
    
    this.x += xStepSize;
    this.y += yStepSize;
};

var w = new Walker();

var draw = function() {
    w.walk();
    w.display();
};
