const startEvents = () => {
    console.log(location);

    document.getElementById("existing-acc").onclick = () => {
        location.href = "/TW_ManagingWater/login/login.html";
    }

    document.getElementById("new-acc").onclick = () => {
        location.href = "/TW_ManagingWater/signIn/signIn.html";
    }

    randomClouds();
}

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const randomClouds = () => {
    picture = document.getElementById("image1");

    spaceW = -400 - picture.height;
    spaceH = 500 - picture.width;

    moveIt();
    Init2();
    Init3();
    Init4();
}

const Init2 = () => {
    picture = document.getElementById("image2");

    spaceW = -400 - picture.height;
    spaceH = 500 - picture.width;
    if (spaceH < 0) spaceH = 10;

    moveIt();
}

const Init3 = () => {
    picture = document.getElementById("image3");

    spaceW = 600 - picture.height;
    spaceH = 500 - picture.width;
    if (spaceH < 0) spaceH = 10;
    if (spaceW < 0) spaceW = 10;

    moveIt();
}

const Init4 = () => {
    picture = document.getElementById("image4");

    spaceW = 600 - picture.height;
    spaceH = 500 - picture.width;

    moveIt();
}

const moveIt = () => {
    picture.style.top = Math.round(Math.random() * spaceH) + 'px';
    picture.style.left = Math.round(Math.random() * spaceW) + 'px';
}