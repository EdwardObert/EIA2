"use strict";
var Picture;
(function (Picture) {
    class Figure {
        constructor(_type, _position, _velocity, _rotation, _color, _size) {
            this.position = _position;
            this.rotation = _rotation;
            this.type = _type;
            this.color = _color;
            this.size = _size;
            this.velocity = new Picture.Vector(0, 0);
            this.factor = this.rotation;
            this.velocity = _velocity;
            if (this.velocity.x == 1)
                this.velocity.random(1, 1);
            else if (this.velocity.x == 2)
                this.velocity.random(2, 2);
            else if (this.velocity.x)
                this.velocity.random(3, 3);
            else
                console.log("no velocity");
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += Picture.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += Picture.crc2.canvas.height;
            if (this.position.x > Picture.crc2.canvas.width)
                this.position.x -= Picture.crc2.canvas.width;
            if (this.position.y > Picture.crc2.canvas.height)
                this.position.y -= Picture.crc2.canvas.height;
            //console.log(this.position);
            //console.log(this.velocity);
        }
        rotate() {
            if (this.rotation != 0) {
                //crc2.resetTransform();
                Picture.crc2.translate(this.position.x, this.position.y);
                //console.log(this.position);
                if (this.factor / 100 == 2 + Number((this.rotation / 100).toFixed(2)))
                    this.factor = this.rotation;
                //crc2.rotate(Math.PI * this.factor);
                if (this.rotation == 1) {
                    this.factor += 1;
                }
                else if (this.rotation == 2) {
                    this.factor += 2;
                }
                else if (this.rotation == 4) {
                    this.factor += 4;
                }
                Picture.crc2.rotate(Math.PI * this.factor / 100);
            }
        }
        draw() {
            console.log("drawing circle");
        }
    }
    Picture.Figure = Figure;
})(Picture || (Picture = {}));
//# sourceMappingURL=figure.js.map