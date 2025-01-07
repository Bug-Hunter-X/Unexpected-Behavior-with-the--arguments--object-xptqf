function myFunc() {
  // Convert arguments object to a true array
  const argsArray = Array.from(arguments);
  console.log(argsArray);
  console.log(argsArray.slice(1)); // Example array method
}

myFunc(1, 2, 3); 