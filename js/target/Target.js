
// Класс описывает базовые статичные мишени
class Target {
    params = {
        imgRadius: 115,
        imgName: "js/target/target.png",
        className: 'Target'
    }

    constructor(x, y, id, size = 10, params = this.params) {
        if (!document.getElementById(id)) {
            this.mainDiv = document.createElement('div');
            this.mainDiv.className = 'container';
            this.mainDiv.id = id;
            this.mainDiv.style.left = (x - params.imgRadius) + "px";
            this.mainDiv.style.top = (y - params.imgRadius) + "px";
            document.body.appendChild(this.mainDiv);
        }
        this.imgId = document.createElement('img');
        this.imgId.src = params.imgName;
        this.imgId.className = params.className;
        this.imgId.style.width = size / 10 * params.imgRadius * 2 + "px";
        this.imgId.style.height = size / 10 * params.imgRadius * 2 + "px";
        this.mainDiv = document.getElementById(id);
        this.mainDiv.appendChild(this.imgId);
        this.x = x;
        this.y = y;
        this.size = size;
        this.mainDiv.addEventListener("click", (event) => {
            console.log(event);
            this.shot(event.clientX, event.clientY)
        });;
        console.log(document.body);
    }

    //Выстрел по мишени
    shot(x, y) {
        let distance = 10 * Math.sqrt(Math.pow((this.x - x), 2) + Math.pow((this.y - y), 2)) / this.params.imgRadius;
        let result;
        if (distance < 0.5) {
            console.log(11);
            return 11
        }
        if (distance < 10) {
            result = 10 - Math.trunc(distance) * this.size / 10;
            console.log(result);
            return result;
        }
    }
    //Движение мишени
    move(x, y) {
        this.x = x;
        this.y = y;
    }
}