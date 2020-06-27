var L10_Inheritance;
(function (L10_Inheritance) {
    var Move = /** @class */ (function () {
        function Move(_size, _position) {
            console.log("MOVE constructor");
            if (_position)
                this.position = _position;
            else
                this.position = new L10_Inheritance.Vector(0, 0);
            this.velocity = new L10_Inheritance.Vector(0, 0);
        }
        Move.prototype.move = function (_timeslice) {
            var offset = new L10_Inheritance.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L10_Inheritance.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10_Inheritance.crc2.canvas.height;
            if (this.position.x > L10_Inheritance.crc2.canvas.width)
                this.position.x -= L10_Inheritance.crc2.canvas.width;
            if (this.position.y > L10_Inheritance.crc2.canvas.height)
                this.position.y -= L10_Inheritance.crc2.canvas.height;
        };
        Move.prototype.draw = function () {
            //console.log("draw shiet")
        };
        return Move;
    }());
    L10_Inheritance.Move = Move;
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=Movable.js.map