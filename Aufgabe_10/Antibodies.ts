namespace L10_Inheritance {
    export class Anti extends Move {
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
            console.log("Anti Anti!");
            crc2.beginPath();
            crc2.moveTo(150, 150);
            crc2.lineTo(150 + 22, 150 - 12);
            crc2.lineWidth = 2.5;
            crc2.strokeStyle = "gold";
            crc2.stroke();
            crc2.closePath();
    
            crc2.beginPath();
            crc2.arc(150 + 31, 200 - 18, 12, 0.7, 1.4 * Math.PI);
            crc2.stroke();
            crc2.closePath();
    
            crc2.save();
    
            crc2.translate(150, 150);
    
    
            crc2.restore();
        
    
    
    
    
            crc2.resetTransform();
    
            crc2.translate(this.position.x, this.position.y);
                
                crc2.restore();
            }
            
    
        }
    
        }