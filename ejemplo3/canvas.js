window.addEventListener("load", main);

var canvas, canvasWidth, canvasHeight, ctx, heightScale;

function main(){
    canvas = document.getElementById('canvas');
canvasWidth = canvas.width = window.innerWidth;
canvasHeight = canvas.height = window.innerHeight;
ctx = canvas.getContext('2d');
heightScale = 0.866;

    render();
}




function rnd(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
};


function render() {
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.lineWidth = 1;

    var hueStart = rnd(0, 360);
    var triSide = 40;
    var halfSide = triSide / 2;
    var rowHeight = Math.floor(triSide * heightScale);
    var columns = Math.ceil(canvasWidth / triSide) + 1;
    var rows = Math.ceil(canvasHeight / rowHeight);

    var col, row;
    for (row = 0; row < rows; row++) {
        var hue = hueStart + (row * 3);

        for (col = 0; col < columns; col++) {

            var x = col * triSide;
            var y = row * rowHeight;
            var clr;

            if (row % 2 != 0) {
                x -= halfSide;
            }

            // upward pointing triangle
            clr = 'hsl(' + hue + ', 50%, ' + rnd(0, 60) + '%)';
            ctx.fillStyle = clr;
            ctx.strokeStyle = clr;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + halfSide, y + rowHeight);
            ctx.lineTo(x - halfSide, y + rowHeight);
            ctx.closePath();
            ctx.fill();
            ctx.stroke(); // needed to fill antialiased gaps on edges

            // downward pointing triangle
            clr = 'hsl(' + hue + ', 50%, ' + rnd(0, 60) + '%)';
            ctx.fillStyle = clr;
            ctx.strokeStyle = clr;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + triSide, y);
            ctx.lineTo(x + halfSide, y + rowHeight);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

        };
    };
};

