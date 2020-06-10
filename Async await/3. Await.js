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
with result becoming its result. So the code above shows “done!” in one second.*/
