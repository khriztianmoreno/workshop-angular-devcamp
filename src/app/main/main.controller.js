(function (){
	'use strict';

	angular.module('DemoAngular')
		.controller('MainController', MainController);

	function MainController (){
		var vm = this;

		vm.title = 'Top Sellers in Books !!'; 
		vm.promo = 'Awesome promo!!';
		vm.products = [ 
		  { 
		    name: 'The Book of Trees', 
		    price: 19, 
		    pubdate: new Date('2014', '03', '08'), 
		    cover: 'img/the-book-of-trees.jpg',
		    likes: 0 ,
    		dislikes :0
		  }, 
		  { 
		    name: 'Program or be Programmed', 
		    price: 8, 
		    pubdate: new Date('2013', '08', '01'), 
		    cover: 'img/program-or-be-programmed.jpg',
		    likes: 0,
    		dislikes :0
		  }
		];

		vm.plusOne = function(index) { 
		  vm.products[index].likes += 1; 
		};

		vm.minusOne = function(index) { 
		  vm.products[index].dislikes += 1; 
		};

	};
})();