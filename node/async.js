// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

const sleepyHello = () => new Promise(resolve => setTimeout(() => {
  console.log('Hello');
  resolve();
}, 1200));

const test = () => {
  sleepyHello() // option 1
    .then(() => {
      console.log('Now this');
    });
};

// const test = () => {
//   await sleepyHello(); // option 2
//   console.log('Now this');
// };

test();