/*
We could explicitly return a promise, which would be the same as:
async function f() {
  return 1;
}

f().then(alert);
*/


async function f() {
  return Promise.resolve(1);
}

f().then(alert);


/*
So, async ensures that the function returns a promise, and wraps non-promises in it.
Simple enough, right? But not only that. 
There’s another keyword, await, that works only inside async functions, and it’s pretty cool.
*/
