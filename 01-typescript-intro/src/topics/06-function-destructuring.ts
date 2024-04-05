export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Nokia 5100",
    price: 55.5
};

const tablet: Product = {
    description: "IPad Air",
    price: 500.0
};


interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export const taxCalculation = ( options: TaxCalculationOptions ) : number[] => {
    let total = 0;
    const { tax } = options;
    options.products.forEach( ({ price }) => {
        total += price;
    });

    return [total, total * tax];
}


const shoppingCart: Product[] = [phone, tablet];
const tax: number = 0.15;

const [total, taxCalculated] = taxCalculation({
    tax,
    products: shoppingCart
});

console.log(`Total: ${total}`);
console.log(`Tax: ${taxCalculated}`);
