class Mouse {
    x;
    y;
    block = null;

    update() {
        //console.log(this.block)
        this.x = mouseX;
        this.y = mouseY;
        if (this.block != null) {
            this.block.x = this.x - functSize / 2;
            this.block.y = this.y - functSize / 2;
            this.block.draw();
        }
    }

    press() {
        var gettedBlock = null;
        if (this.getBlock(gridss) != null) {
            gettedBlock = gridss[this.getBlock(gridss)[0]][this.getBlock(gridss)[1]];
        }
        if (gettedBlock == null && this.getBlock(toolsBlock) != null) {
            gettedBlock = toolsBlock[this.getBlock(toolsBlock)[0]][this.getBlock(toolsBlock)[1]];
        }

        this.block = Object.assign(Object.create(Object.getPrototypeOf(gettedBlock)), gettedBlock);

        //gettedBlock.change(Object.create(FuncBlock))
        //Object.assign(gettedBlock,Object.create( FuncBlock));
        //console.log("get", this.block);
    }

    release() {
        //console.log("release", this.block);
        let gettedBlockIndex = this.getBlock(gridss);

        if (this.block != null && gettedBlockIndex != null) {
            //console.log("change");
            let tx = gridss[gettedBlockIndex[0]][gettedBlockIndex[1]].x;
            let ty = gridss[gettedBlockIndex[0]][gettedBlockIndex[1]].y;
            gridss[gettedBlockIndex[0]][gettedBlockIndex[1]] = this.block;
            gridss[gettedBlockIndex[0]][gettedBlockIndex[1]].x = tx;
            gridss[gettedBlockIndex[0]][gettedBlockIndex[1]].y = ty;
        }
        delete this.block;
    }

    getBlock(blockss) {
        for (let i = 0; i < blockss.length; i++) {
            const blocks = blockss[i];
            for (let j = 0; j < blocks.length; j++) {
                const block = blocks[j];
                if (this.isGetThisBlock(blockss[i][j])) return [i, j];
            }
        }
        return null;
    }

    isGetThisBlock(FuncBlock) {
        if (FuncBlock.x < this.x && FuncBlock.x + FuncBlock.width > this.x && FuncBlock.y < this.y && FuncBlock.y + FuncBlock.width > this.y) {
            return true;
        } else return false;
    }



};


