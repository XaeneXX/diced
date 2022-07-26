let numberdice = 0
input.onGesture(Gesture.Shake, function () {
    numberdice = randint(1, 6)
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
    } else if (numberdice == 3) {
        basic.showLeds(`
            . # # . .
            # . . # .
            . . # . .
            # . . # .
            . # # . .
            `)
    } else if (numberdice == 4) {
        basic.showLeds(`
            . . . # .
            . . # # .
            . # . # .
            # # # # #
            . . . # .
            `)
    } else if (numberdice == 5) {
        basic.showLeds(`
            . # # # #
            . # . . .
            . # # # .
            . . . . #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . # # # .
            # . . . .
            # # # . .
            # . . # .
            . # # . .
            `)
    }
    basic.pause(100)
})
