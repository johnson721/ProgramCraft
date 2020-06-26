// play.html line 109 is original dis
// player.js line 73 receive keyboard control
// com L156

// try to replace joy stick with mine
// insert code in player.js L70

// comment touchControl.js
// comment mousedown render.js L78

var world;
var player;
var renderer;
var save;
var canvas = document.getElementById("canvas");

setupChangeModeBtn();
setupProgramBtn();
startedToPlay();

function startedToPlay() {


    world = new World(3);
    player = new Player(world);
    renderer = new Renderer(canvas, world, player);
    //wsave = new Save(world, player);
}

// change mode button
function setupChangeModeBtn() {
    let programBtn = document.getElementById("intoProgram");
    //programBtn.style.position = "absolute";
    programBtn.style.fontSize = 50;
    programBtn.style.width = 100;
    programBtn.style.height = 100;
    programBtn.onclick = function () {
        if (isProgramPage) {
            programPage(false);
            isProgramPage = false;
        } else {
            programPage(true);
            isProgramPage = true;
        }
    }
}

function setupProgramBtn() {
    let programBtn = document.getElementById("startedProgram");
    //programBtn.style.position = "absolute";
    programBtn.style.fontSize = 50;
    programBtn.style.width = 100;
    programBtn.style.height = 100;
    programBtn.style.top = 100;
    programBtn.onclick = function () {
        moveMents = [];
        compileMyBlock();
        //console.log(moveMents);

    }
}

// 

//-----------------------------------my code

blockFuncs = {
    forward: function () {
        //player.position.x++;
        //console.log("gogo")
        //player.keys['w']=true;
        console.log("forward");
        myMove = [0, 10];
    },
    backward: function () {
        myMove = [0, -10];
    },
    rightward: function () {
        myMove = [10, 0];
    },
    leftward: function () {
        myMove = [-10, 0];
    },
    forLoop: function () {

    },
    ifCondi: function () {

    }
}

setInterval(renderer.render.bind(renderer), 15);