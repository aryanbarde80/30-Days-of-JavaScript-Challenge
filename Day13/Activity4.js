// Task 6
// npm install lodash

// main.js
import _ from 'lodash';

const numbers = [1, 2, 3, 4, 5];
console.log(_.shuffle(numbers)); // Randomly shuffled array

// Task 7
// npm install axios

// main.js
import axios from 'axios';

axios.get('https://api.github.com/users/octocat')
    .then(response => console.log(response.data))
    .catch(error => console.log("Error:", error));