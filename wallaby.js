module.exports = function () {
  return {
    files: [
      'node_modules/chai/chai.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
    ],
    tests: [
      'workshops/02_testing_architecture/solution/test/*.spec.js'
    ]
  };
};
