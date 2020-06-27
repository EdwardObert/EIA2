namespace L10_Inheritance {
    export class Virus extends Move {
        position: Vector;
        velocity: Vector;


        constructor(_size: number, _position?: Vector) {
            console.log("Virus constructor");

            super(_position);

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);
                
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);
        
        }

        draw(): void {
            console.log("Virus");
            let radiusParticle: number = 35;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
    
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "#BED95F");
            gradient.addColorStop(0.3, "#620003");
            gradient.addColorStop(0.5, "#620003");
            gradient.addColorStop(0.7, "#620003");
            gradient.addColorStop(1, "lightgreen");
    
        
            crc2.resetTransform();
    
            crc2.translate(this.position.x, this.position.y);
    
            crc2.fillStyle = gradient;
    
                
                
                
                crc2.fill(particle);
                crc2.restore();
            }
            
    
        }
    
        }