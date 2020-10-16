input.onButtonPressed(Button.A, function () {
    basic.showNumber(_of_peaks)
})
input.onButtonPressed(Button.B, function () {
    _of_peaks = 0
})
let _of_peaks = 0
basic.showString("Alarm")
basic.forever(function () {
    if (_of_peaks == 0) {
        basic.showIcon(IconNames.Angry)
        _of_peaks += 1
    } else {
        basic.clearScreen()
    }
})
