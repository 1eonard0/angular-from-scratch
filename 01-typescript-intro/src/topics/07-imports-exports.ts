import { Product, taxCalculation } from "./06-function-destructuring";


const shoppingCart: Product [] = [
    {
        description: "Nokia 5100",
        price: 55.5
    },
    {
        description: "IPad Air",
        price: 500.0
    }
];

const [total, tax] = taxCalculation({
    tax: 0.15,
    products: shoppingCart
});

console.log(`Total ${total}`);
console.log(`Tax ${tax}`);