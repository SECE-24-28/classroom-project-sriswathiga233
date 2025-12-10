// First fetch example
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => {
    return res.json();
  })
  .then(user => {
    console.log("First fetch:", user);
  })
  .catch(error => {
    console.error('Error in first fetch:', error);
  });

// Second fetch example
const res = fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => {
    return res.json();
  })
  .then(user => {
    console.log("Second fetch:", user);
  })
  .catch(error => {
    console.error('Error:', error);
  });

console.log("Promise object:", res);                                         

        