input.onButtonPressed(Button.A, function () {
    led.setBrightness(led.brightness() + 15)
})
input.onButtonPressed(Button.B, function () {
    led.setBrightness(led.brightness() - 15)
})
led.setBrightness(150)
basic.showLeds(`
    . . . . .
    . . # . .
    . # # # .
    . . # . .
    . . . . .
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
        if (led.brightness() > 200) {
            led.plot(0, 0)
            led.plot(4, 0)
            led.plot(0, 4)
            led.plot(4, 4)
        } else {
            led.unplot(0, 0)
            led.unplot(4, 0)
            led.unplot(0, 4)
            led.unplot(4, 4)
        }
    }
})
