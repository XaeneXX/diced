let numberdice = 0
input.onGesture(Gesture.Shake, function () {
    numberdice = randint(1, 3)
    if (numberdice == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    } else if (numberdice == 2) {
        basic.showLeds(`
            . # # # .
            # . . . #
            . . . # .
            . # # . .
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . # # . .
            # . . # .
            . . # . .
            # . . # .
            . # # . .
            `)
    }
    basic.pause(100)
})
