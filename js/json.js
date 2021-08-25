//JavaScript Object Notation
//JSON

const user = {
    id: 10,
    name: 'Chris Pratt',
    job: 'actor'
};
const stringified = JSON.stringify(user);
// console.log(stringified);
// console.log(user);

const shop = {
    name: 'Whole Food',
    address: 'Dhaka',
    products: ['laptop', 'mobile', 'pepsi', 'cloths'],
    profit: 70000,
    owner: {
        name: 'Jeremy Renner',
        profession: 'actor',
    },
    isExpensive: false
};
// console.log(shop);
const shopStringified = JSON.stringify(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);
console.log(converted.owner);