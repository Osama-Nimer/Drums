function tom1()
{
    var ad = new Audio("./sounds/tom-1.mp3 ");
    ad.play();
}
function tom2()
{
    var ad = new Audio("./sounds/tom-2.mp3 ");
    ad.play();
}
function tom3()
{
    var ad = new Audio("./sounds/tom-3.mp3 ");
    ad.play();
}
function tom4()
{
    var ad = new Audio("./sounds/tom-4.mp3 ");
    ad.play();
}
function snare()
{
    var ad = new Audio("./sounds/snare.mp3 ");
    ad.play();
}

function crash()
{
    var ad = new Audio("./sounds/crash.mp3 ");
    ad.play();
}

function kick()
{
    var ad = new Audio("./sounds/kick-bass.mp3 ");
    ad.play();
}


document.addEventListener("keydown", () => {
    
    if(event.key === 'w')
        tom1();
    else if(event.key === 'a')
        tom2();
    else if(event.key === 's')
        tom3();
    else if(event.key === 'd')
        tom4();
    else if(event.key === 'j')
        snare();
    else if(event.key === 'k')
        crash();
    else if(event.key === 'l')
        kick();
})