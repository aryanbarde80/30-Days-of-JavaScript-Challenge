// The `this` keyword

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

console.log("Library Name:", library.name);

console.log("Books in the Library:");
library.books.forEach(book => {
    console.log(book.getBookInfo());
});