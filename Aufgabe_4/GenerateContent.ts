namespace Hilfsformular2 {
    export function generateContent(_data: Data) {
        console.log(_data);

        for (let category in _data) {
            //  console.log(category);
            let items: Item[] = _data[category];

            let group: HTMLElement | null = null;
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

            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }

    function createMultiple(_items: Item[]): HTMLElement | null {
        return null;
    }
    function createSelect(_items: Item[]): HTMLElement | null {
        return null;
    }
    function createMultiple(_items: Item[]): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");
        for (let item of _items) {
            let checkbox: HTMLInputElement = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.SetAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;

            let label:HTMLLabelElement = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;

            group.appendChild(checkbox);
            group.appendChild(label);
        }
        return group;
    }


}