// Encapsulcation of some simple jQuery methods that are not handy in vanilla JavaScript but not as good as the real jQuery

class JQ {
    constructor(selector) {
        this.selector = (/^#/).test(selector) ? document.querySelector(selector) : document.querySelectorAll(selector); // Not working on identifiers like $(li#li)
    }

    append(child) {
        switch (typeof child) {
            case 'string':
                this.selector.innerHTML += child;
                break;
            case 'object':
                this.selector.appendChild(child);
                break;
            default:
                console.log('Wrong child data type');
        }
    }

    html(content) {
        switch (typeof content) {
            case 'string':
                this.selector.innerHTML = content;
                break;
            case 'undefined':
                this.selector.innerHTML = this.selector.innerHTML;
                break;
            default:
                console.log('Argument must be STRING or leave it empty');
        }
        return this.selector.innerHTML;
    }

    on(e, handler) {
        return this.selector.addEventListener(e, handler);
    }

    val() {
        return this.selector.value;
    }
}
const $ = function (selector) {
    return new JQ(selector);
}

class List extends JQ {

}
