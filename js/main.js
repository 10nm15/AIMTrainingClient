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

let count = 0;

let IsTraining = false;

let counter = makeCounter();

window.onload = function () {

    document.getElementById("startStatic").addEventListener("click", () => {
        if (!IsTraining) {
            IsTraining = true;
            count = 0;
            createTarget();
            createTarget();
            let timerId = setInterval(() => {
                createTarget();
            }, 1000);
            setTimeout(() => {
                clearInterval(timerId);
                //удаляем оставшиеся элементы
                var targets = document.getElementsByClassName('container');
                while (targets[0]) {
                    targets[0].parentNode.removeChild(targets[0]);
                }
                IsTraining = false;
                //вывод результата
                alert(`Вы набрали ${count} очков!`);
            }, 10000);
        } else {
            alert("Тренировка идёт в данный момент");
        }
    });

    document.getElementById("startMoving").addEventListener("click", () => {
        if (!IsTraining) {
            IsTraining = true;
            count = 0;
            createTarget('moving');
            createTarget('moving');
            let timerId = setInterval(() => {
                createTarget('moving');
            }, 750);
            setTimeout(() => {
                clearInterval(timerId);
                //удаляем оставшиеся элементы
                var targets = document.getElementsByClassName('container');
                while (targets[0]) {
                    targets[0].parentNode.removeChild(targets[0]);
                }
                IsTraining = false;
                //вывод результата
                alert(`Вы набрали ${count} очков!`);
            }, 10000);
        } else {
            alert("Тренировка идёт в данный момент");
        }
    });
}
