// I added the promise to its own JS file and exported it like a Node environment export. However, this is not necessary. This code could simply be repeated in both files and that is fine too.
let isRaining = true;

const weather = new Promise((resolve, reject) => {
  if (!isRaining) {
    resolve("The party will be in the park!");
  } else {
    reject("Oh no! The party will be in my apartment.");
  }
});

weather
  .then(fulfilled => {
    console.log(fulfilled);
  })
  .catch(error => {
    console.log(error);
  });
