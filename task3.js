function calculateAveragePrice(products) {
    if (products.length === 0) return 0;
    
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        sum += products[i].price;
    }
    
    return sum / products.length;
}

const items = [
    { product: 'рубашка', price: 70 },
    { product: 'футболка', price: 50 },
    { product: 'блюки', price: 110 }
];

const averagePrice = calculateAveragePrice(items);
console.log(`Средняя цена товаров: ${averagePrice}`);