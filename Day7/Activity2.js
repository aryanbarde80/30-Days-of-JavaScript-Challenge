// Object Methods

const book = {
    title: "Luck Matters",
    author: "Aryan Barde",
    year: 2024,
    method: function(title, author) {
        return `${title} by ${author}`;
    }
};

console.log(book.method(book.title, book.author));


// Also 

const boook = {
    title: "Luck Matters",
    author: "Aryan Barde",
    year: 2024,
    getTitleAndAuthor: function() {
        return `${this.title} by ${this.author}`;
    }
};

console.log(boook.getTitleAndAuthor()); // Output: Luck Matters by Aryan Barde


const booook = {
    title: 'Destiny Matters',
    author: `John James`,
    year:2023,

    updateYear: function(newYear){
        this.year = newYear;
    }
}

booook.updateYear(2025);
console.log(booook);