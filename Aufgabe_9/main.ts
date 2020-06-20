// L08  bearbeitet von mir.
namespace l09_Classes {
    window.addEventListener("load", handleLoad);

    let viruses: Virus[] = [];
    let cells: Cell[] = [];
    let antis: Anti[] = [];
    let particlez: Part[] = [];



    export let crc2: CanvasRenderingContext2D;


    function handleLoad(_event: Event): void {
        console.log("Corona breitet sich aus")
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();

        createVirus(18);
        window.setInterval(update, 20);

        createCell(11);

        createAnti(50);

        createPart(80);

    }



    function drawBackground(): void {
        console.log("Background");

        crc2.resetTransform()
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "orange");
        gradient.addColorStop(1, "darkred");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);


    }

    function createVirus(_nVirus: number): void {
        console.log("Create Virus");
        for (let i: number = 0; i < _nVirus; i++) {
            let virus: Virus = new Virus(1.0);
            viruses.push(virus);
        }
    }

    function createCell(_nCell: number): void {
        console.log("Create Cell");
        for (let i: number = 0; i < _nCell; i++) {
            let cell: Cell = new Cell(1.0);
            cells.push(cell);
        }
    }

    function createAnti(_nCell: number): void {
        console.log("Create Antikörperz");
        for (let i: number = 0; i < _nCell; i++) {
            let anti: Anti = new Anti(1.0);
            antis.push(anti);

        }


    }

    function createPart(_nCell: number): void {
        console.log("Create Antikörperz");
        for (let i: number = 0; i < _nCell; i++) {
            let part: Part = new Part(1.0);
            particlez.push(part);

        }




    }

    function update(): void {
        console.log("Update");
        drawBackground()

        for (let virus of viruses) {
            virus.move(1 / 120);
            virus.draw();

        }

        for (let cell of cells) {
            cell.move(1 / 140);
            cell.draw();
        }

        for (let anti of antis) {
            anti.move(1 / 105);
            anti.draw();
        }

        for (let part of particlez) {
            part.move(1 / 250);
            part.draw();
        }
    }
}