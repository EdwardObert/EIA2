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
    var Anti = /** @class */ (function (_super) {
        __extends(Anti, _super);
        function Anti(_size, _position) {
            var _this = this;
            console.log("Virus constructor");
            _this = _super.call(this, _position) || this;
            if (_position)
                _this.position = _position;
            else
                _this.position = new L10_Inheritance.Vector(0, 0);
            _this.velocity = new L10_Inheritance.Vector(0, 0);
            _this.velocity.random(100, 200);
            return _this;
        }
        Anti.prototype.draw = function () {
            console.log("Anti Anti!");
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.moveTo(150, 150);
            L10_Inheritance.crc2.lineTo(150 + 22, 150 - 12);
            L10_Inheritance.crc2.lineWidth = 2.5;
            L10_Inheritance.crc2.strokeStyle = "gold";
            L10_Inheritance.crc2.stroke();
            L10_Inheritance.crc2.closePath();
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.arc(150 + 31, 200 - 18, 12, 0.7, 1.4 * Math.PI);
            L10_Inheritance.crc2.stroke();
            L10_Inheritance.crc2.closePath();
            L10_Inheritance.crc2.save();
            L10_Inheritance.crc2.translate(150, 150);
            L10_Inheritance.crc2.restore();
            L10_Inheritance.crc2.resetTransform();
            L10_Inheritance.crc2.translate(this.position.x, this.position.y);
            L10_Inheritance.crc2.restore();
        };
        return Anti;
    }(L10_Inheritance.Move));
    L10_Inheritance.Anti = Anti;
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=Antibodies.js.map