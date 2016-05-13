import angular, {module}  from 'angular';
import books              from './list/';
import bookFactory        from './services/bookservice';

export default module('bookmanager', [books, bookFactory]).name;
