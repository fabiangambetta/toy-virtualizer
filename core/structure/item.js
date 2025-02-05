export class Item {

    _isVisible = false;
    _node = null;
    _index = undefined;
    _width = 0;
    _heigth = 0;

    constructor(index, width, height) {
        this._index = index;
        this._heigth = height;
        this._width = width;
    }

    get index() {
        return this._index;
    }

    get width() {
        return this._width;
    }

    get height(){
        return this._heigth;
    }

    get node() {
        return this._node;
    }

    get isVisble() {
        return this._isVisible;
    }

    set node(value) {
        this._node = value;
    }

    set isVisible(value) {
        this._isVisible = value;
    }

}