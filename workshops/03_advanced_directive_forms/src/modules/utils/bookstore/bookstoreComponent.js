import angular, {module} from 'angular';
import bookstoreTemplate from './bookstore.html';

export function bookstoreDirective(){
  return {
    restrict: 'EA',
    template: bookstoreTemplate
  };
}

export default module('utils.shell', []).directive('bookstore', bookstoreDirective).name;
