namespace L10_Inheritance {
    export class Cell extends Move{
        position: Vector;
        velocity: Vector;

        constructor(_size: number, _position?: Vector) {
            console.log("Cell constructor");

            super(_position);

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);

      
        }

        draw(): void {
            console.log("Cell");
            let radiusParticle: number = 20;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0.3, "#94BDF2");
            gradient.addColorStop(0.5, "#94BDF2");
            gradient.addColorStop(0.7, "#94BDF2");
            gradient.addColorStop(1, "Blue");





            crc2.resetTransform();

            crc2.translate(this.position.x, this.position.y);

            crc2.fillStyle = gradient;



            crc2.fill(particle);
            crc2.restore();
        }


    }

}