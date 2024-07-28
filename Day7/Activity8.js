// for-in loop

// Define the library object
const library = {
    name: "City Library",
    books: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            yearPublished: 1960,
            genres: ["Fiction", "Classic", "Literature"],
            getBookInfo: function() {
                return `${this.title} (${this.yearPublished})`;
            }
        },
        {
            title: "1984",
            author: "George Orwell",
            yearPublished: 1949,
            genres: ["Dystopian", "Science Fiction", "Political Fiction"],
            getBookInfo: function() {
                return `${this.title} (${this.yearPublished})`;
            }
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            yearPublished: 1925,
            genres: ["Fiction", "Classic", "Literature"],
            getBookInfo: function() {
                return `${this.title} (${this.yearPublished})`;
            }
        }
    ]
};

// Use a for...in loop to iterate over the properties of the library object
for (let property in library) {
    console.log(`${property}: ${library[property]}`);

    // If the property is 'books', iterate over each book and log its properties
    if (property === 'books') {
        library[property].forEach((book, index) => {
            console.log(`Book ${index + 1}:`);
            for (let bookProperty in book) {
                if (typeof book[bookProperty] !== 'function') {
                    console.log(`  ${bookProperty}: ${book[bookProperty]}`);
                } else {
                    console.log(`  ${bookProperty}: ${book[bookProperty]()}`);
                }
            }
        });
    }
}

// Log all the books in the library using Object.keys and Object.values
library.books.forEach((book, index) => {
    console.log(`Book ${index + 1}:`);

    // Log all keys of the book object
    console.log("Keys:", Object.keys(book));

    // Log all values of the book object
    const values = Object.values(book).map(value => typeof value === 'function' ? value() : value);
    console.log("Values:", values);
});
