// L08  bearbeitet von mir.
var L10_Inheritance;
(function (L10_Inheritance) {
    window.addEventListener("load", handleLoad);
    var movable = [];
    function handleLoad(_event) {
        console.log("Corona breitet sich aus");
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L10_Inheritance.crc2 = canvas.getContext("2d");
        drawBackground();
        createVirus(18);
        window.setInterval(update, 20);
        createCell(11);
        createAnti(50);
        createPart(80);
    }
    function drawBackground() {
        console.log("Background");
        L10_Inheritance.crc2.resetTransform();
        var gradient = L10_Inheritance.crc2.createLinearGradient(0, 0, 0, L10_Inheritance.crc2.canvas.height);
        gradient.addColorStop(0, "orange");
        gradient.addColorStop(1, "darkred");
        L10_Inheritance.crc2.fillStyle = gradient;
        L10_Inheritance.crc2.fillRect(0, 0, L10_Inheritance.crc2.canvas.width, L10_Inheritance.crc2.canvas.height);
    }
    function createVirus(_nVirus) {
        console.log("Create Virus");
        for (var i = 0; i < _nVirus; i++) {
            var virus = new L10_Inheritance.Virus(1.0);
            movable.push(virus);
        }
    }
    function createCell(_nCell) {
        console.log("Create Cell");
        for (var i = 0; i < _nCell; i++) {
            var cell = new L10_Inheritance.Cell(1.0);
            movable.push(cell);
        }
    }
    function createAnti(_nCell) {
        console.log("Create Antikörperz");
        for (var i = 0; i < _nCell; i++) {
            var anti = new L10_Inheritance.Anti(1.0);
            movable.push(anti);
        }
    }
    function createPart(_nCell) {
        console.log("Create Antikörperz");
        for (var i = 0; i < _nCell; i++) {
            var part = new L10_Inheritance.Part(1.0);
            movable.push(part);
        }
    }
    function update() {
        console.log("Update");
        drawBackground();
        for (var _i = 0, movable_1 = movable; _i < movable_1.length; _i++) {
            var virus = movable_1[_i];
            virus.move(1 / 120);
            virus.draw();
        }
        for (var _a = 0, movable_2 = movable; _a < movable_2.length; _a++) {
            var cell = movable_2[_a];
            cell.move(1 / 140);
            cell.draw();
        }
        for (var _b = 0, movable_3 = movable; _b < movable_3.length; _b++) {
            var anti = movable_3[_b];
            anti.move(1 / 105);
            anti.draw();
        }
        for (var _c = 0, movable_4 = movable; _c < movable_4.length; _c++) {
            var part = movable_4[_c];
            part.move(1 / 250);
            part.draw();
        }
    }
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=main.js.map