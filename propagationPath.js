Event.prototype.propagationPath = function propagationPath() {
    var polyfill = function () {
        var element = this.target || null;
        var pathArr = [element];

        if (!element || !element.parentElement) {
            return [];
        }

        while (element.parentElement) {
            element = element.parentElement;
            pathArr.unshift(element);
        }

        return pathArr;
    }.bind(this);

    return this.path || (this.composedPath && this.composedPath()) || polyfill();
};

