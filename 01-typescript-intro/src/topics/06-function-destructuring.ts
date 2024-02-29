export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Nokia",
    price: 150.0
}

const tablet: Product = {
    description: "samusu",
    price: 250.0
}


interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

function taxCalculation( options: TaxCalculationOptions): [number, number] {
    
    const  {products, tax} = options;
    let total = 0;
    products.forEach( ({price}) => total += price);
    return [total, total * tax];

}


const shoppingCart: Product[] = [phone, tablet];
const tax: number = 0.10;


const [total, totalTax] = taxCalculation({
    tax: tax,
    products: shoppingCart
});


console.log("Total ", total)

export {};