Event.prototype.propagationPath = function propagationPath() {
    const polyfill = () => {
        let element = this.target;
        const pathArr = [element];

        if (element === null || element.parentElement === null) {
            return [];
        }

        while (element.parentElement !== null) {
            element = element.parentElement;
            pathArr.unshift(element);
        }

        return pathArr;
    };

    return this.path || (this.composedPath && this.composedPath()) || polyfill();
};

