var gridss = [[FuncBlock]];
var toolsBlock = [[FuncBlock]];

const uiPosX = 0, uiPosY = 0, uiWidth = 800, uiHeight = 800;
const gridPosX = 50, gridPosY = uiPosY + 360, gridWidth = 800, gridthHeight = 400, gridSep = 10;
const toolPosX = gridPosX, toolPosY = gridPosY + 300;
const functSize = 60;

// switch program
var isProgramPage;
function programPage(e){
    let mySketch = document.getElementById("defaultCanvas0");
    if (e) {
        mySketch.style.display="inline";
    }else{
        
        mySketch.style.display="none";
    }
}

// set mouse
var myMouse = new Mouse;

function mousePressed() {
    //programPage(false);
    myMouse.press();
}

function mouseReleased() {
    //programPage(true);
    myMouse.release();
}

// img
var img_backPack;

// sketch ----------------------------
function preload() {
    // preload() runs once

    img_backPack = loadImage('img/packup.png');

}

function setup() {


    createCanvas(800, 800);
    var mySketch = select('#canvas');
    
    setUpGrid(gridPosX + 10, gridPosY + 10);
    setUpTool(gridPosX + 10, toolPosY + 10);
    
}

function draw() {
    clear();

    drawBackPack(uiPosX, uiPosY);

    image(img_backPack, uiPosX + 1, uiPosY + 1);
    img_backPack.resize(gridWidth - 2, 0);

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 10; j++) {
            gridss[i][j].draw();
        }
    }

    for (let i = 0; i < toolsBlock[0].length; i++) {
        toolsBlock[0][i].draw();

    }

    myMouse.update();
}

function setUpGrid(x, y) {
    for (let i = 0; i < 5; i++) {
        gridss[i] = [];
        for (let j = 0; j < 10; j++) {
            gridss[i][j] = new FuncNull(j * functSize + x + j * gridSep, i * functSize + y + i * gridSep);
        }
    }
}

function setUpTool(x, y) {
    for (let j = 0; j < 10; j++) {
        if(j==0)toolsBlock[0][0]=new FuncNull(j * functSize + x + j * gridSep, functSize + y);
        //if(j==1) toolsBlock[0][1]=new FuncFor(j * functSize + x + j * gridSep, functSize + y);
        if(j==1)toolsBlock[0][1]=new FuncRight(j * functSize + x + j * gridSep, functSize + y);
        if(j==2)toolsBlock[0][2]=new FuncLeft(j * functSize + x + j * gridSep, functSize + y);
        if(j==3)toolsBlock[0][3]=new FuncBack(j * functSize + x + j * gridSep, functSize + y);
        if(j==4)toolsBlock[0][4]=new FuncForward(j * functSize + x + j * gridSep, functSize + y);
    }

}

function drawBackPack(x, y) {
    fill(198, 198, 198);
    strokeWeight(2)
    rect(x, y, uiWidth, uiHeight, 5);
}

function compileMyBlock(){
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 10; j++) {
            gridss[i][j].func();
        }
    }
}