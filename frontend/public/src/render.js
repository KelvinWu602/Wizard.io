const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

// const playerImage = new Image();
// playerImage.src = '../asset/shadow_dog.png';

let i = 0

function animate(){

    i++

    if (i>1000)
        return;
    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillRect(50,50,100,200);
    requestAnimationFrame(animate);
};

animate();