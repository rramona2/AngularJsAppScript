'use strict';

angular.module( 'angularclApp' )

  .controller( 'ListadonuevomodalCtrl', function ( $scope, $modalInstance ) { 	

  	$scope.guardar = function () {

  		$modalInstance.close( $scope );

  	};

  	$scope.cancelar = function () {

  		$modalInstance.dismiss();

  	};

  	$scope.limpiar = function () {

  		$scope.nuevoReg = {};

  	};

  	$scope.limpiar();

  });
