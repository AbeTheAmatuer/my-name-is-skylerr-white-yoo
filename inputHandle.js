
addEventListener("keydown", function(e){
    if(e.code == 'KeyA') vxl = -1.5;
    if(e.code == 'KeyD') vxr = 1.5;
    if(e.code == 'KeyW') vyU = -1.5;
    if(e.code == 'KeyS') vyD = 1.5
})

addEventListener('keyup', function(e){
    if(e.code == 'KeyA') vxl = 0;
    if(e.code == 'KeyD') vxr = 0;
    if(e.code == 'KeyW') vyU = 0; 
    if(e.code == 'KeyS') vyD = 0;
})

function playSound(){
    var audio = new Audio('my-name-is-skyler-white-yo.mp3');
    audio.play();
}