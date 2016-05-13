export default function BookListController(bookFactory) {
  bookFactory.getBooks()
   .then((books)=>{
     this.books = books;
  });
}

BookListController.$inject = ['bookFactory'];
