function random_figure(){
    var one = getRandomInt(0, 255);
    var two = getRandomInt(0, 255);
    var three = getRandomInt(0, 255);
    var four = getRandomInt(1, 100);
    var five = getRandomInt(2, 12);
    var six = getRandomInt(150, 400);
    var eight  = getRandomInt(150, 400);

    console.log("#clickFigure", one, two, three, four, five, six, eight);

    var stringBoxShadow = "rgb(" + one + "," + two + " ," + three + ")";

    document.getElementById("krug").style.boxShadow = stringBoxShadow;
    document.getElementById("krug").style.borderRadius = four + "px";
    document.getElementById("krug").style.width = six + "px";
    document.getElementById("krug").style.height = eight + "px";
    document.getElementById("krug").style.border = five + "px solid";
    document.getElementById("krug").style.backgroundColor = "rgb(" + one + "," + two + " ," + three + ")";
}

function getRandomInt(min, max) {
    return Math.floor (Math.random() * (min - max) + max);
  }