var l09_Classes;
(function (l09_Classes) {
    var Part = /** @class */ (function () {
        function Part(_size, _position) {
            console.log("Particle constructor");
            if (_position)
                this.position = _position;
            else
                this.position = new l09_Classes.Vector(0, 0);
            this.velocity = new l09_Classes.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        Part.prototype.move = function (_timeslice) {
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
        Part.prototype.draw = function () {
            console.log("Virus");
            var radiusParticle = 5;
            var particle = new Path2D();
            var gradient = l09_Classes.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "#FFFFFF");
            gradient.addColorStop(0, "#FFFFFF");
            gradient.addColorStop(0, "#FFFFFF");
            gradient.addColorStop(1, "#D9E8F5");
            l09_Classes.crc2.resetTransform();
            l09_Classes.crc2.translate(this.position.x, this.position.y);
            l09_Classes.crc2.fillStyle = gradient;
            l09_Classes.crc2.scale(this.size, this.size);
            l09_Classes.crc2.fill(particle);
            l09_Classes.crc2.restore();
        };
        return Part;
    }());
    l09_Classes.Part = Part;
})(l09_Classes || (l09_Classes = {}));
//# sourceMappingURL=Particles.js.map