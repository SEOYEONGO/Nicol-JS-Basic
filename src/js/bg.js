const body = document.querySelector("body");

const IMG_NUMBER=20;
/*
function handleImgLoad() {
    console.log('finished loading');
}
*/
function paintImage(imgNumber){
    const image= new Image();
    body.appendChild(image);
    image.src=`src/images/${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    //
    //body.prepend(image);
    //image.addEventListener("loadend", handleImgLoad);
}

function genRandom(){
    const number=Math.floor(Math.random()*IMG_NUMBER+1);
    return number;
}

function init(){
    const randomNumber= genRandom();
    paintImage(randomNumber);
}

init();
