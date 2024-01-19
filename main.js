let canvas = document.getElementById("screen");
let ctx = canvas.getContext("2d")

//Making ze Image

const player = new Image()
player.src = 'https://i1.sndcdn.com/avatars-000508491087-32hktm-t240x240.jpg'
const enemy = new Image()
enemy.src = 'me.png'


//enemy.src = 'me.png'


let score = 50;
let ex = 50;
let x = 0;
let y = 0;
let vxl = 0;
let vxr = 0;
let vyU = 0;
let vyD = 0;
let Pwidth = 10;
let Pheight = 10;
let grounded = false;
ctx.fillStyle = 'green'
ctx.imageSmoothingEnabled = false

//MAIN FUNCTION
function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    x += vxl;
    x += vxr;
    y += vyU;
    y += vyD;
    Collisions()
    ctx.drawImage(enemy, ex, ex, 50, 50)
    ctx.drawImage(player, x, y, Pwidth, Pheight)
    
    requestAnimationFrame(update)
}


//COLLISIONS

function Collisions(){
    if(x+Pwidth >= canvas.width){
        x = canvas.width - Pwidth
        score += 1;
    }else if(x <= -1){
        x = 0
    }
    if(y+Pheight >= canvas.height){
        y = canvas.height - Pheight
        grounded = true
    }else if(y <= 0){
        y = 0
    }


}

update()

