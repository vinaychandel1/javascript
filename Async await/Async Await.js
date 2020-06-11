async function call(){
 	console.log("inside function");
 	const response=await fetch('https://api.github.com/users');
 	console.log(response);
 	console.log("Before Response");
 	const users=await response.json();
 	console.log("users resolved")
 	return users;
 }
 console.log("Before calling");
 let a=call();
 console.log("After calling");
 console.log(a);
 a.then(data=>console.log(data));
 console.log("Last call");
