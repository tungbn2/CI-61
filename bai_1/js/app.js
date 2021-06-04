import { Meme } from "./meme.js";

class MemeCollection {
    id;
    name;
    owner;
    memes;
    constructor(id, name, owner, memes) {
        this.id = id;
        this.name = name;
        this.owner = owner;
        this.memes = memes;
    };
    add(meme) {
        if (meme instanceof Meme) {
            this.memes.push(meme);
            meme.show ();
        } else {
            console.log('Nhập sai rồi');
        }
    };
    update(id, data) {
        for (let i = 0; i < this.memes.length; i++) {
            if (id == this.memes[i].id) {
                this.memes[i].name = data.name;
                this.memes[i].image = data.image;
            } else {
                console.log('Không tìm thấy dữ liệu');
            };
        };
    };
    delete(id) {
        for (let i = 0; i < this.memes.length; i++) {
            if (id == this.memes[i].id) {
                this.memes.splice(i, 1);
            };
        };
        this.show;
    }
    show() {
        console.log(this);
        for (let i = 0; i < this.memes.length; i++) {
            this.memes[i].show ();
            console.log("show");
        }
    }
};

let end = new Meme('m1', 'End', './img/meme1.jpg', '4/6/2021');
let rep = new Meme('m2', 'Rep','./img/meme1.jpg', '4/6/2021');
let collection1 = new MemeCollection('meme', 'Meme 1', 'Tungbn', [end]);
collection1.show();
collection1.add(rep);
