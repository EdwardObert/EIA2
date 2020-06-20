namespace l09_Classes {
    export class Anti {
        position: Vector;
        velocity: Vector;
        type: number;
        size: number;

        constructor(_size: number, _position?: Vector) {
            console.log("Virus constructor");

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);
                
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);

            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
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
        
            crc2.scale(this.size, this.size)
                
                crc2.restore();
            }
            
    
        }
    
        }