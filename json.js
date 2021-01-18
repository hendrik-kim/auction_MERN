let json = JSON.stringify(true);

console.log(json);

const rabbit = {
  name: 'rabbit',
  color: 'white',
  jump: () => {
    console.log(`${name}`);
  },
};

console.log(JSON.stringify(rabbit));
console.log(JSON.stringify(rabbit, ['name']));

JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value:${value}`);
  return value;
});

console.clear();
