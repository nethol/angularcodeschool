(function () {
  var app = angular.module('store', ['store-products']);

  app.controller('ReviewController', function () {
    this.review = {};
    this.addReview = function (product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.controller('StoreController', ['$http',function ($http) {
    var store = this;
    store.products = [];
    $http({
      method: 'GET',
      url:'/store-products.json'
    }).then(function(success){
        store.products = success.data;
    });
  }]);
})();

