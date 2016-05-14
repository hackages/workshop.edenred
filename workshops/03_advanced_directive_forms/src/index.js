import angular, {module, bootstrap} from 'angular';
import utils                       from './modules/utils/';
import config                       from './modules/config/';
import bookmanager                 from './modules/bookmanager/';

module('bookstore', [utils, bookmanager, config]);

document.addEventListener('DOMContentLoaded', () => {
  bootstrap(document.body, ['bookstore']);
});

