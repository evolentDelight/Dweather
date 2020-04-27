function draw(){
    var canvas = document.getElementById('circle');

    var ctx = canvas.getContext('2d');


    ctx.globalAlpha = 0.2;

    ctx.fillStyle = 'white';

    ctx.globalCompositeOperation = 'lumosity';

    ctx.beginPath();
    ctx.arc(100, 100, 100, 0, 360);
    ctx.fill();
        
}

draw();