function randomClouds() {

    let clouds = document.getElementsByClassName("cloud");

    console.log(clouds);

    for (let cloud of clouds) {
        let spaceWidth = (Math.random() * 200 + 400) - cloud.height;
        let spaceHeight = 500 - cloud.width;

        cloud.style.top = Math.round(Math.random() * spaceHeight) + "px";
        cloud.style.left = Math.round(Math.random() * spaceWidth) + "px";

        console.log(cloud);
    }
}

randomClouds();