const DecreasingCounter = function (selector) {
    Counter.call(this, selector)
}

DecreasingCounter.prototype = Object.create(Counter.prototype)
DecreasingCounter.prototype.constructor = DecreasingCounter

DecreasingCounter.prototype.dec = function () {
    this.number = this.number - 1
    this.render()
}

DecreasingCounter.prototype.render = function () {
    Counter.prototype.render.call(this)

    const button = document.createElement('button')

    button.innerText = '-'

    button.addEventListener(
        'click',
          () => this.dec()
    )

    this.container.appendChild(button)
}

