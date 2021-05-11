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
// счётчик
function makeCounter() {
    let count = 0;
    return function () {
        return count++;
    }
};

function calcCoord({ x, y }, coord = []) {
    if (coord.length === 0) {
        return true;
    }
    coord.forEach(coords => {
        if (Math.abs(coords.x - x) < 300 || Math.abs(coords.y - y) < 300) {
            return false;
        }
    });
}

//функция создания мишени
function createTarget(params) {
    let count = counter();
    // случайно задаём координаты
    x = Math.round(75 + Math.random() * window.innerWidth * 0.85);
    y = Math.round(75 + Math.random() * window.innerHeight * 0.75);
    // создаём мишень
    target = new Target(x, y, count, params);
}

let counter = makeCounter();

window.onload = function () {
    // стартовые мишени
    for (let i = 0; i < 2; i++) {
        if (i % 2 === 0) {
            createTarget();
        } else {
            createTarget('moving');
        }
    }

    // может быть понадобится(нет)
    /*let targets = document.getElementsByClassName('Movingcontainer');
    console.log(targets);*/


    //создание движущихся мишеней
    setInterval(() => createTarget('moving'), 2500);
}
