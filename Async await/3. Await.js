/*
The keyword await makes JavaScript wait until that promise settles and returns its result.

Here’s an example with a promise that resolves in 3 second:*/
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();


/*

The function execution “pauses” at the line (*) and resumes when the promise settles, 
with result becoming its result. So the code above shows “done!” in one second.

Let’s emphasize: await literally makes JavaScript wait until the promise settles, and then go on with the result. That doesn’t cost any CPU resources, because the engine can do other jobs in the meantime: execute other scripts, handle events, etc.

It’s just a more elegant syntax of getting the promise result than promise.then, easier to read and write.



Can’t use await in regular functions
If we try to use await in non-async function, there would be a syntax error:




function f() {
  let promise = Promise.resolve(1);
  let result = await promise; // Syntax error
}
We will get this error if we do not put async before a function. As said, await only works inside an async function.

*/
