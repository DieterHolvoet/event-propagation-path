Event.prototype.propagationPath = function propagationPath() {
    var polyfill = function () {
        var element = this.target || null;
        var pathArr = [element];

        if (element === null || element.parentElement === null) {
            return [];
        }

        while (element.parentElement !== null) {
            element = element.parentElement;
            pathArr.unshift(element);
        }

        return pathArr;
    }.bind(this);

    return this.path || (this.composedPath && this.composedPath()) || polyfill();
};

