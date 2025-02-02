class Item {

    _isVisible = false;
    _node = null;
    _index = undefined;
    _width = 0;
    _heigth = 0;

    constructor(index) {
        this._index = index;
    }

    set isVisible(value) {
        this._isVisible = value;
    }
}