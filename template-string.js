const firstName = 'Minhajul';
const lastName = 'Islam';


const fullName = `My name is ${firstName}`;
// console.log(fullName);

const giveMe = `Give me ${(1232) * 2} taka for buy a shirt and pant 
if you don't give this money , i will kill you now`;
// console.log(giveMe);

const fullname = `${firstName} ${lastName}`;
// console.log(fullname);


function getcardHTML(name, description, price) {
  const div = `
  <div class="card>"
    <h2>${name}</h2>
    <p>Price:$ ${price}</p>
    <p>${description}</p>
  </div>
  
  `;

  console.log(div);
}

getcardHTML('Iphone', 'I want to buy this phone', 120000);

