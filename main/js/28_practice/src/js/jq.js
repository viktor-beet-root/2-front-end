class Jq {
    constructor(selector) {
        if (this.hasHtml(selector)) {
            this.$ = this.stringToHtml(selector);
        } else {
            this.$ = document.querySelectorAll(selector);
        }
    }

    stringToHtml(string) {
        const div = document.createElement('div');
        div.innerHTML = string;

        return div.childNodes;
    }

    hasHtml(selector) {
        return selector.includes('<');
    }

    addClass(className) {
        this.$.forEach(elem => {
            elem.classList.add(className);
        });

        return this;
    }

    hasClass(className, elemet) {
        return elemet.classList.contains(className);
    }

    eq(index) {
        return this.$[index];
    }

    append(data) {
        if (typeof data === 'string' && this.hasHtml(data)) {
            data = this.stringToHtml(data);
        }
        console.log(data.$)
        if (data.$) {
            data = data.$;
        }

        if (typeof data === 'string') {
            data = document.createTextNode(data);
        }

        this.$.forEach(elem => {
            if (data instanceof NodeList) {
                data.forEach(newElem => elem.append(newElem));
                return;
            }

            elem.append(data);
        });

        return this;
    }
}

export default Jq;
