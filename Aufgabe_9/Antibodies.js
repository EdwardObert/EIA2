var l09_Classes;
(function (l09_Classes) {
    var Anti = /** @class */ (function () {
        function Anti(_size, _position) {
            console.log("Virus constructor");
            if (_position)
                this.position = _position;
            else
                this.position = new l09_Classes.Vector(0, 0);
            this.velocity = new l09_Classes.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        Anti.prototype.move = function (_timeslice) {
            var offset = new l09_Classes.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += l09_Classes.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += l09_Classes.crc2.canvas.height;
            if (this.position.x > l09_Classes.crc2.canvas.width)
                this.position.x -= l09_Classes.crc2.canvas.width;
            if (this.position.y > l09_Classes.crc2.canvas.height)
                this.position.y -= l09_Classes.crc2.canvas.height;
        };
        Anti.prototype.draw = function () {
            console.log("Anti Anti!");
            l09_Classes.crc2.beginPath();
            l09_Classes.crc2.moveTo(150, 150);
            l09_Classes.crc2.lineTo(150 + 22, 150 - 12);
            l09_Classes.crc2.lineWidth = 2.5;
            l09_Classes.crc2.strokeStyle = "gold";
            l09_Classes.crc2.stroke();
            l09_Classes.crc2.closePath();
            l09_Classes.crc2.beginPath();
            l09_Classes.crc2.arc(150 + 31, 200 - 18, 12, 0.7, 1.4 * Math.PI);
            l09_Classes.crc2.stroke();
            l09_Classes.crc2.closePath();
            l09_Classes.crc2.save();
            l09_Classes.crc2.translate(150, 150);
            l09_Classes.crc2.restore();
            l09_Classes.crc2.resetTransform();
            l09_Classes.crc2.translate(this.position.x, this.position.y);
            l09_Classes.crc2.scale(this.size, this.size);
            l09_Classes.crc2.restore();
        };
        return Anti;
    }());
    l09_Classes.Anti = Anti;
})(l09_Classes || (l09_Classes = {}));
//# sourceMappingURL=Antibodies.js.map