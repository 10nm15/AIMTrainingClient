window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

function makeCounter() {
    let count = 0;
    return function () {
        return count++;
    }
};

let counter = makeCounter();

window.onload = function () {
    for (let i = 0; i < 3; i++) {
        let count = counter();
        x = Math.round(Math.random() * window.innerWidth * 0.8);
        y = Math.round(Math.random() * window.innerHeight * 0.67);
        target = new Target(100 + x, 100 + y, count);
        //console.log(x,y);
    }
}
