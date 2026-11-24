//the callback function to be executed after the timeout
function myFunction() {
  console.log("3000 ms have passed. Exiting...");
  process.exit();
}

console.log("Starting timeout.");

// setTimeout() schedules execution of a callback function after milliseconds.
// setTimeout() is asynchronous and non-blocking (returns immediately)
// setTimeout() takes two arguments: a function and a delay in milliseconds
// here: call myFunction after 3000 milliseconds
setTimeout(myFunction, 3000);

console.log("Timeout is set to call myFunction after 3s.");

console.log("The main thread is not blocked and continues executing other code.");

console.log("Doing other work...");
// Simulate other work with a loop
for (let i = 0; i < 1000; i++) {
  console.log(`Working... ${i + 1}`);
}
