"use strict";
var Hilfsformular2;
(function (Hilfsformular2) {
    function generateContent(_data) {
        console.log(_data);
        for (let category in _data) {
            //  console.log(category);
            let items = _data[category];
            let group = null;
            switch (category) {
                case "Einkäufe":
                    group = createMultiple(items, category);
                    break;
                case "Geschäft":
                    group = createSelect(items);
                    break;
                case "Hausarbeiten":
                    group = createMultiple(items, category);
                    break;
                default:
                    break;
            }
            let fieldset = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }
    Hilfsformular2.generateContent = generateContent;
    function createMultiple(_items) {
        return null;
    }
    function createSelect(_items) {
        return null;
    }
    function createMultiple(_items) {
        let group = document.createElement("div");
        for (let item of _items) {
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.SetAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(checkbox);
            group.appendChild(label);
        }
        return group;
    }
})(Hilfsformular2 || (Hilfsformular2 = {}));
//# sourceMappingURL=GenerateContent.js.map