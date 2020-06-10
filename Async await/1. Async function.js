/*
The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.

For instance, this function returns a resolved promise with the result of 1
*/
async function f() {
  return 1;
}

f().then(alert);
