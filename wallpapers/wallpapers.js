function setWallpaper(val) {
    var img = document.getElementById("trophyroom_img");
    var a = document.getElementById("trophyroom_a");

    var path = "";

    switch(val) {
        case 1:
            path = "furry_trophy_room/Furry's Trophy Room - Clean.png";
            break;
        case 2:
            path = "furry_trophy_room/Furry's Trophy Room - BG.png";
            break;
        case 3:
            path = "furry_trophy_room/Furry's Trophy Room - Clean BG.png";
            break;
        default:
            path = "furry_trophy_room/Furry's Trophy Room.png";
            break;
    }

    img.src = path;
    a.href = path;
}

function updateWallpaper() {
    var blood = document.getElementById("trophyroom_blood").checked;
    var bg = document.getElementById("trophyroom_bg").checked;

    setWallpaper((blood ? 0 : 1) + (bg ? 2 : 0));
}

updateWallpaper()