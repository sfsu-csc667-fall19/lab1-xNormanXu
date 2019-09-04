const promiseExample = () => {
  return new Promise((resolve, reject) => {
    // Do anything you want
    // finishes when resolve() is called
    setTimeout(() => {
      reject();
      resolve(); 
    }, 3000);
  });
};

promiseExample()
  .then((res) => console.log(res))
  .catch((e) => console.log('Something went wrong!'));

console.log('hi');