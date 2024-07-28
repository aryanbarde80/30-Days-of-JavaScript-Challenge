// Nested Objects

// Defining the library object

const library = {
    name: "City Library",
    books: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            yearPublished: 1960,
            genres: ["Fiction", "Classic", "Literature"]
        },
        {
            title: "1984",
            author: "George Orwell",
            yearPublished: 1949,
            genres: ["Dystopian", "Science Fiction", "Political Fiction"]
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            yearPublished: 1925,
            genres: ["Fiction", "Classic", "Literature"]
        }
    ]
};

// logging the library object to the console
console.log(library);

// logging the name of library
console.log("Library Name:",library.name);

// log all the books in library
console.log("Books in the Library:");
library.books.forEach(book => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Year Published:${book.yearPublished}, Genres: ${book.genres.join(", ")} `)
});
