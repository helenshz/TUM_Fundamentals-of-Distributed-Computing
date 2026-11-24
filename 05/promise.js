
// example fuction that performs an asynchronous operation
// and calls either the resolveFunction or the rejectFunction
// after a timeout of 1 second
function myFunction(resolveFunction, rejectFunction) {
  setTimeout(() => {
    const r = Math.random();
    if (r < 0.5) {
      resolveFunction("Operation completed successfully.");
    } else {
      rejectFunction("Operation failed.");

    }
  }, 1000);
}

// Create a new promise, passing in the function that is executed immediately in the background
new Promise(myFunction)
  .then(text => console.log("THEN:", text))
  .catch(text => console.log("CATCH:", text));

console.log("Program started.");
