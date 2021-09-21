/*
* Problem
It is your birthday and you want to celebrate it with all your friends at the park.
But for that to happen, the weather needs to be good. No raining.
If the weather is not good, your birthday party will happen in your tiny apartment.
Otherwise, you will get to celebrate at the park like you wanted!

How can you create a Promise for that situation?
*/

let isRaining = true;

const weather = new Promise((resolve, reject) => {
    
});

// 1. The promise above is incomplete. On line 14 inside the Promise, create conditions for the promise to resolve or reject. The steps for doing so are below (a-c)
// a) The promise should check if raining is true or false and carry out different code according to the condition (if... else)
// b) If isRaining is false, the promise should resolve with a value of "The party will be in the park!"
// c) Else isRaining is true, so the promise should reject with a value of "Oh no! The party will be in my apartment."

// 2. Consume the promise using then() and catch(). The steps for doing so are below (a-b)
// a) Using weather.then(), take the value passed to .then from the Promise and console log it. 
// b) Using .catch, take the value passed to .catch from the Promise and console log it.
