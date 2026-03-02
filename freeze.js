const king = { name: 'Minhajul', age: 23, Kingdom: 'Dhaka' };

// Object.freeze(king);

Object.seal(king);

delete king.age;
king.name = 'Minhajul Islma';
delete king.Kingdom;
console.log(king);