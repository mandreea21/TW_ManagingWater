function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomClouds() {
    picture = document.getElementById("image1");

    spaceW = -400 - picture.height;
    spaceH = 500 - picture.width;



    moveIt();
    Init2();
    Init3();
    Init4();

}

function Init2() {
    picture = document.getElementById("image2");

    spaceW = -400 - picture.height;
    spaceH = 500 - picture.width;
    if (spaceH < 0) spaceH = 10;


    moveIt();


}

function Init3() {
    picture = document.getElementById("image3");

    spaceW = 600 - picture.height;
    spaceH = 500 - picture.width;
    if (spaceH < 0) spaceH = 10;
    if (spaceW < 0) spaceW = 10;

    moveIt();


}

function Init4() {
    picture = document.getElementById("image4");

    spaceW = 600 - picture.height;
    spaceH = 500 - picture.width;


    moveIt();

}

function moveIt() {
    picture.style.top = Math.round(Math.random() * spaceH) + 'px';
    picture.style.left = Math.round(Math.random() * spaceW) + 'px';
}