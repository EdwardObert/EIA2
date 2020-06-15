// Die Aufgabe basiert zum großteil auf dem Code von Luzia Gunsenhauser.
namespace l08_CanvasVirus {


    console.log("load");
    interface Vector {
        x: number;
        y: number;
    }

    let crc2: CanvasRenderingContext2D;

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");


        drawBackground();
        drawCoronaV({ x: 350, y: 170 }, { x: 450, y: 450 });
        drawHumanZell({ x: 350, y: 170 }, { x: 450, y: 450 });
        showAntibodies({ x: 250, y: 370 });
        //drawCoronaCell ({x: 150, y: 150}); 
        drawParticles({ x: 190, y: 700 }, { x: 600, y: 600 });

    }

    function drawBackground(): void {
        console.log("Background");

        //Pattern - Hintergrund 
        let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 100;
        pattern.canvas.height = 40;
        pattern.fillStyle = "#F26B76";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(40, 0);
        pattern.lineTo(60, 0);
        pattern.lineTo(100, 20);
        pattern.lineTo(60, 40);
        pattern.lineTo(40, 40);
        pattern.lineTo(20, 20);


        pattern.strokeStyle = "#A65B69";
        pattern.stroke();
        pattern.closePath();

        //Punkt in Zelle
        pattern.beginPath();
        pattern.arc(50, 20, 2, 0, 2 * Math.PI);
        pattern.fillStyle = "#E6573C";
        pattern.fill();

        crc2.fillStyle = <CanvasRenderingContext2D>crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawCoronaV(_position: Vector, _size: Vector): void {

        //Zeichenen der Corona viren 
        console.log("CoronaV", _position, _size);
        let nParticles: number = 40;
        let radiusParticle: number = 20;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "#BED95F");
        gradient.addColorStop(0.3, "#620003");
        gradient.addColorStop(0.5, "#620003");
        gradient.addColorStop(0.7, "#620003");
        gradient.addColorStop(1, "#620003");





        crc2.save();

        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {

            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();

    }



    function drawAntibodies(_position: Vector, _size: Vector): void {


        //Zeichnen der Antikörper 

        crc2.beginPath();
        crc2.moveTo(_position.x, _position.y);
        crc2.lineTo(_position.x + 22, _position.y - 12);
        crc2.lineWidth = 2.5;
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 31, _position.y - 18, 12, 0.7, 1.4 * Math.PI);
        crc2.stroke();
        crc2.closePath();

        crc2.save();

        crc2.translate(_position.x, _position.y);


        crc2.restore();



    }

    function showAntibodies(_position: Vector): void {

        //Dublizieren der Antikörper 

        for (let drawn: number = 0; drawn < 7; drawn++) {
            _position.x = Math.random() * crc2.canvas.width / 1.4; //Variieren der Werte
            _position.y = 450 + (20 * Math.random());

            drawAntibodies(_position, { x: 450, y: 650 });
        }
    }


    //Luftpartikel werden gezeichnet und dubliziert 
    function drawParticles(_position: Vector, _size: Vector): void {

        let nParticles: number = 90;
        let radiusParticle: number = 4;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "#FFFFFF");
        gradient.addColorStop(0, "#FFFFFF");
        gradient.addColorStop(0, "#FFFFFF");
        gradient.addColorStop(1, "#D9E8F5");


        crc2.save();

        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {

            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();

    }



    function drawHumanZell(_position: Vector, _size: Vector): void {

        //Zeichenen der Menschlichen gesunden Zellen 
        console.log("Humanzell", _position, _size);
        let nParticles: number = 40;
        let radiusParticle: number = 20;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0.3, "#94BDF2");
        gradient.addColorStop(0.5, "#94BDF2");
        gradient.addColorStop(0.7, "#94BDF2");
        gradient.addColorStop(1, "#94BDF2");





        crc2.save();

        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {

            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();

    }




}