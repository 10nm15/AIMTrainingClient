
// Класс описывает движущуюся мишень
class MovingTarget extends Target {
    //Движение мишени
    move(x, y) {
        let distX = x - this.x;
        let distY = y - this.y;
        let dist = Math.sqrt(distX * distX + distY * distY);

        if (dist > 0) {
            this.dX = (this.speed / 100) * (x - this.x) / dist;
            this.dY = (this.speed / 100) * (y - this.y) / dist;
        }
        this.timerId = setInterval(() => this.reCalc(), 20); //!!! =>
    }
}