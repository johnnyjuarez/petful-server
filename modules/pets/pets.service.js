const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue(),
};

store.cats.forEach((cat) => pets.cats.enqueue(cat));
store.dogs.forEach((dog) => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    let petObj = {
      cat: pets.cats.show(),
      dog: pets.dogs.show(),
    };
    return petObj;
  },

  dequeue(type) {
    // Remove a pet from the queue.
    if (type === 'cat') {
      console.log('reached cat delete');
      return pets.cats.dequeue();
    }
    if (type === 'dog') {
      console.log('reached dog delete');
      return pets.dogs.dequeue();
    }
  },
};
