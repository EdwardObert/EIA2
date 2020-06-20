// L08  bearbeitet von mir.
var l09_Classes;
(function (l09_Classes) {
    window.addEventListener("load", handleLoad);
    var viruses = [];
    var cells = [];
    var antis = [];
    var particlez = [];
    function handleLoad(_event) {
        console.log("Corona breitet sich aus");
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        l09_Classes.crc2 = canvas.getContext("2d");
        drawBackground();
        createVirus(18);
        window.setInterval(update, 20);
        createCell(11);
        createAnti(50);
        createPart(80);
    }
    function drawBackground() {
        console.log("Background");
        l09_Classes.crc2.resetTransform();
        var gradient = l09_Classes.crc2.createLinearGradient(0, 0, 0, l09_Classes.crc2.canvas.height);
        gradient.addColorStop(0, "orange");
        gradient.addColorStop(1, "darkred");
        l09_Classes.crc2.fillStyle = gradient;
        l09_Classes.crc2.fillRect(0, 0, l09_Classes.crc2.canvas.width, l09_Classes.crc2.canvas.height);
    }
    function createVirus(_nVirus) {
        console.log("Create Virus");
        for (var i = 0; i < _nVirus; i++) {
            var virus = new l09_Classes.Virus(1.0);
            viruses.push(virus);
        }
    }
    function createCell(_nCell) {
        console.log("Create Cell");
        for (var i = 0; i < _nCell; i++) {
            var cell = new l09_Classes.Cell(1.0);
            cells.push(cell);
        }
    }
    function createAnti(_nCell) {
        console.log("Create Antikörperz");
        for (var i = 0; i < _nCell; i++) {
            var anti = new l09_Classes.Anti(1.0);
            antis.push(anti);
        }
    }
    function createPart(_nCell) {
        console.log("Create Antikörperz");
        for (var i = 0; i < _nCell; i++) {
            var part = new l09_Classes.Part(1.0);
            particlez.push(part);
        }
    }
    function update() {
        console.log("Update");
        drawBackground();
        for (var _i = 0, viruses_1 = viruses; _i < viruses_1.length; _i++) {
            var virus = viruses_1[_i];
            virus.move(1 / 120);
            virus.draw();
        }
        for (var _a = 0, cells_1 = cells; _a < cells_1.length; _a++) {
            var cell = cells_1[_a];
            cell.move(1 / 140);
            cell.draw();
        }
        for (var _b = 0, antis_1 = antis; _b < antis_1.length; _b++) {
            var anti = antis_1[_b];
            anti.move(1 / 105);
            anti.draw();
        }
        for (var _c = 0, particlez_1 = particlez; _c < particlez_1.length; _c++) {
            var part = particlez_1[_c];
            part.move(1 / 250);
            part.draw();
        }
    }
})(l09_Classes || (l09_Classes = {}));
//# sourceMappingURL=main.js.map