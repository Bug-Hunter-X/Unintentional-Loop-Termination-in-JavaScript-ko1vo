function myFunction() {
  let i = 0;
  while (i < 10) {
    console.log(i);
    i++;
    if (i === 5) {
      break; // Exit the loop when i is 5
    }
  }
}

myFunction(); // this will produce 0, 1, 2, 3, 4