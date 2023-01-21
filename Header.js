const Header = function (text) {
    this.text = text
}

Header.prototype.render = function () {
    const h1 = document.createElement('h1')

    h1.innerText = this.text

    h1.style.padding = '4px'
    h1.style.margin = '4px'
    h1.style.minWidth = '20px'
    h1.style.fontFamily = 'sans-serif'

    return h1
}