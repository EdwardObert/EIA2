namespace Hilfsformular2 {

    export interface Item {
        name: string;
        price: number;

    }

    export interface Data {
        [category: string]: Item[];
    }

    export let data: Data = {

        Einkäufe: [
            { name: "Butter", price: 20.00 },
            { name: "Milch", price: 69.00 },
            { name: "Eier", price: 31.00 },
            { name: "Gemüse", price: 7.00 },
            { name: "Fleisch", price: 312 }
        ],
        Geschäft: [
            { name: "Aldi", price: 0.00 },
            { name: "Edeka", price: 0.00 },
            { name: "Lidl", price: 0.00 },
            { name: "Rewe", price: 0.00 }
        ],
        Hausarbeiten: [
            { name: "Putzen", price: 6.00 },
            { name: "Kochen", price: 8.00 },
            { name: "Wäsche", price: 7.00 },
            { name: "Gartenarbeit", price: 12.00 }
        ]
    };
}