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
    var Part = /** @class */ (function (_super) {
        __extends(Part, _super);
        function Part(_size, _position) {
            var _this = this;
            console.log("Particle constructor");
            _this = _super.call(this, _position) || this;
            if (_position)
                _this.position = _position;
            else
                _this.position = new L10_Inheritance.Vector(0, 0);
            _this.velocity = new L10_Inheritance.Vector(0, 0);
            _this.velocity.random(100, 200);
            ;
            return _this;
        }
        Part.prototype.draw = function () {
            console.log("Particlez");
            var radiusParticle = 5;
            var particle = new Path2D();
            var gradient = L10_Inheritance.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "#FFFFFF");
            gradient.addColorStop(0, "#FFFFFF");
            gradient.addColorStop(0, "#FFFFFF");
            gradient.addColorStop(1, "#D9E8F5");
            L10_Inheritance.crc2.resetTransform();
            L10_Inheritance.crc2.translate(this.position.x, this.position.y);
            L10_Inheritance.crc2.fillStyle = gradient;
            L10_Inheritance.crc2.fill(particle);
            L10_Inheritance.crc2.restore();
        };
        return Part;
    }(L10_Inheritance.Move));
    L10_Inheritance.Part = Part;
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=Particles.js.map