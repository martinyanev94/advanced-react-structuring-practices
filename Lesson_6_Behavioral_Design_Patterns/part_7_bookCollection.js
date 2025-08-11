class BookCollection {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    getIterator() {
        return new BookIterator(this);
    }
}

class BookIterator {
    constructor(collection) {
        this.collection = collection;
        this.index = 0;
    }

    hasNext() {
        return this.index < this.collection.books.length;
    }

    next() {
        return this.collection.books[this.index++];
    }
}

// Usage
const library = new BookCollection();
library.addBook("1984");
library.addBook("Pride and Prejudice");
library.addBook("To Kill a Mockingbird");

const iterator = library.getIterator();
while (iterator.hasNext()) {
    console.log(iterator.next());
}
