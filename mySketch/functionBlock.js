var Colors = {
    black: function () { fill(0, 0, 0) },
    null: function () { fill(150); },
    funcFor: function () { fill(100, 100, 10); },
    right: function () { fill(255, 0, 0,); },
    left: function () { fill(0, 255, 255); },
    back: function () { fill(0, 0, 255); },
    forward: function () { fill(100, 100, 100); }
}

function copyFunc(funcBlock) {
    var anofuncBlock = funcBlock;
    return anofuncBlock;
}

class FuncBlock {
    size = functSize;
    width = this.size;
    height = this.size;
    text = "";


    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    color = Colors.black;

    change(funcBlock) {
        let tx = this.x;
        let ty = this.y;
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
        }
        Object.assign(this, funcBlock);
        this.x = tx;
        this.y = ty;
    }

    draw() {
        push();

        this.color();
        stroke(0.1);
        rect(this.x, this.y, this.size, this.size);
        textSize(this.size / 2)
        text(this.text, this.x, this.y, this.x + this.size, this.y + this.size);
        pop();
    }

    func() {

    }
}

class FuncNull extends FuncBlock {
    color = Colors.null;


}

class FuncFor extends FuncBlock {
    text = "f";
    color = Colors.funcFor;

    func() {
        moveMents.push(blockFuncs.forLoop);
    }
}

class FuncForward extends FuncBlock {
    text = "↑";
    color = Colors.forward;

    func() {
        moveMents.push(blockFuncs.forward);

    }
}

class FuncBack extends FuncBlock {
    text = "↓";
    color = Colors.back;

    func() {
        moveMents.push(blockFuncs.backward);
    }
}

class FuncRight extends FuncBlock {
    text = "→";
    color = Colors.right;

    func() {
        moveMents.push(blockFuncs.rightward);
    }
}

class FuncLeft extends FuncBlock {
    text = "←";
    color = Colors.left;

    func() {
        moveMents.push(blockFuncs.leftward);
    }
}