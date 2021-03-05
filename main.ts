input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # . .
        . # . # .
        . # . # .
        . # # . .
        . # . . .
        `)
    Pitches += 1
    basic.showNumber(Pitches)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    Pitches = 0
    Strikes = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    Strikes += 1
    basic.showNumber(Strikes)
    basic.clearScreen()
})
let Strikes = 0
let Pitches = 0
Pitches = 0
Strikes = 0
basic.forever(function () {
	
})
