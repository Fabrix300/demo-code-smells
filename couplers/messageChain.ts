class Book {
    name: string;
}
class Shelf {
    book: Book;
}
class Library {
    shelf: Shelf;
}

function getBookNameFromLibrary(): string {
    const newLibrary = {Shelf: {Book: {name: "libro"}}}
    return newLibrary.Shelf.Book.name;
}