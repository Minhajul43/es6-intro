const product = {
  Name: 'iPhone',
  Price: 120000,
  description: 'A product by Apple'
};

const NewPrice = product.Price + 100;
// console.log(NewPrice);


const product1 = { Name: 'iPhone', Price: 12000, Brand: 'Apple' };
// console.log(product1.Name);

const { Name, Price, Brand, camera='12MP' } = { Name: 'iPhone', Price: 12000, Brand: 'Apple',camera:'115MP' };

// console.log(Price);
// console.log(camera);

// destructuring array

const [first, last] = [23, 34, 45, 56, 56, 67];
// console.log(first);

const [a, b, ...z] = [23, 34, 45, 56, 56, 67];
console.log(b);
