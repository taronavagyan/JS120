function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,

    getDescription() {
      return (
        `${this.title} was written by ${this.author}. ` +
        `I ${this.read ? "have" : "haven't"} read it.`
      );
    },

    readBook() {
      this.read = true;
    },
  };
}

let book1 = createBook("Mythos", "Stephen Fry");
console.log(book1.getDescription());
book1.readBook();
console.log(book1.getDescription());
