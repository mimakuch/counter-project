

const Counter = function (selector) {
    const container = document.querySelector(selector)

    if (!container) throw new Error('Container element not found')

    this.selector = selector
    this.container = container
    this.number = 0
}

Counter.prototype.init = function () {
    this.render()
}

Counter.prototype.render = function () {

    this.container.innerText = ''

    const h1 = document.createElement('h1')
    const button = document.createElement('button')

    h1.innerHTML = this.number
    button.innerText = '+'

    button.addEventListener(
        'click',
          () => this.inc()
    )

    this.container.appendChild(h1)
    this.container.appendChild(button)
}

Counter.prototype.inc = function () {
    this.number = this.number + 1
    this.render()
}

Counter.prototype.status = function () {
    console.log('Current number is: ' + this.number)
    return this.number
}

Counter.prototype.toString = function () {
    return 'Current number is ' + this.number
}

Counter.prototype.valueOf = function () {
    return this.number
}