//literals, properties

const obj1 = {};
const obj2 = new Object();

const hank = { name: 'hank', age: '12' };

//dynamic type
hank.hasJob = true;

//computed properties
console.log(hank.name);

//computed prop, key : string type
console.log(hank['name']);

hank.hasJob = true;

console.log(hank.hasJob);

//use wanting data in runtime
function printValueRuntime(obj, key) {
  console.log(obj[key]);
  console.log(obj.key); // undefined, not computed
}

printValueRuntime(hank, 'name');
printValueRuntime(hank, 'age');

//property value shorthand
const person1 = { name: 'bob', age: '12' };
const person2 = { name: 'bob', age: '12' };
const person3 = { name: 'bob', age: '12' };
const person4 = makePerson('hank', '12');
const person5 = new Person('hendrik', 30);

function makePerson(name, age) {
  return {
    name,
    age,
  };
}

console.log(person4);

function Person(name, age) {
  (this.name = name), (this.age = age);
}

console.log(person5);

//cloning
const user = { name: 'hank', age: 20 };
const user2 = user;

user2.name = 'hendrik';

console.log(user2);

const newUser = { name: 'hank', age: 20, color: 'red' };
const user3 = Object.assign({}, newUser, user2);
const user4 = Object.assign({}, user2, newUser);

console.log(user3);
console.log(user4);
