import angular from 'angular';

bookFactory.$inject = ['$http'];

export function bookFactory($http) {
  function getBook(id) {
    // TIPS: template literals
    return $http.get('/api/books/'+ id)
    .then((response) => {
      return response.data;
    });
  }

  function getBooks() {
    return $http.get('/api/books')
    .then((response) =>{
      return response.data;
    });
  }

  function addBook(book) {
    // Not implemented yet
    throw new Error('Method not implemented');
  }

  function deleteBook(id) {
    // Not implemented yet
    throw new Error('Method not implemented');
  }

  return {
    getBook : getBook,
    getBooks : getBooks,
    addBook : addBook,
    deleteBook : deleteBook
  };
}

export default angular.module('bookmanager.bookFactory', [])
                .factory('bookFactory', bookFactory).name;


