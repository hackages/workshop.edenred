import angular, {module}  from 'angular';
import books              from './list/';
import bookFactory        from './services/bookservice';
import mocks              from './services/mocks';

export default module('bookmanager', [books, bookFactory, mocks]).name;
