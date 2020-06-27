var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var L10_Inheritance;
(function (L10_Inheritance) {
    var Cell = /** @class */ (function (_super) {
        __extends(Cell, _super);
        function Cell(_size, _position) {
            var _this = this;
            console.log("Cell constructor");
            _this = _super.call(this, _position) || this;
            if (_position)
                _this.position = _position;
            else
                _this.position = new L10_Inheritance.Vector(0, 0);
            _this.velocity = new L10_Inheritance.Vector(0, 0);
            _this.velocity.random(100, 200);
            return _this;
        }
        Cell.prototype.draw = function () {
            console.log("Cell");
            var radiusParticle = 20;
            var particle = new Path2D();
            var gradient = L10_Inheritance.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0.3, "#94BDF2");
            gradient.addColorStop(0.5, "#94BDF2");
            gradient.addColorStop(0.7, "#94BDF2");
            gradient.addColorStop(1, "Blue");
            L10_Inheritance.crc2.resetTransform();
            L10_Inheritance.crc2.translate(this.position.x, this.position.y);
            L10_Inheritance.crc2.fillStyle = gradient;
            L10_Inheritance.crc2.fill(particle);
            L10_Inheritance.crc2.restore();
        };
        return Cell;
    }(L10_Inheritance.Move));
    L10_Inheritance.Cell = Cell;
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=Cell.js.map