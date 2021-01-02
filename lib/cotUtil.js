import confetti from 'canvas-confetti'

var colors = ['#bb0000', '#ffffff']

const startFrame = (cb) => {
    var end = Date.now() + (7 * 1000);
    const frame = () => {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        } else {
            cb()
        }
    }
    frame()
}

const listener = () => {
    if (typeof document === 'undefined') {
        return
    }

    let isRunning = false

    document.addEventListener('keydown', function (event) {
        if (isRunning) {
            return;
        }
        // ALT + O combo
        if (event.altKey && event.key === 'o') {
            isRunning = true
            startFrame(() => {
                isRunning = false
                return isRunning
            })
        }
    });
}

export default listener()