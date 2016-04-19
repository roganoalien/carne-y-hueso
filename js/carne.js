var CARNE = (function() {
	// Variables Globales
	var _initVars = function _initVars(){
		// Variables iniciadas
	};
	var _initEvents = function _initEvents(){
		// Eventos a iniciar
		CARNE.loader.init();
		// CARNE.scroll.init(); ESPERANDO A TENER EL LOADER DEL SLIDESHOW
	};
	return {
		init : function init(){
			_initVars();
			_initEvents();
		}
	}
})();
CARNE.loader = (function(){
	//cargador de imágenes del slideshow
	var _loader = function _loader(){
		// acción de loader
	};
	return{
		init : function init(){
			_loader();
		}
	}
})();
CARNE.scroll = (function() {
	// Variables para el scroll
	var _$bodyC;
	var _scrollVars = function _scrollVars(){
		// Variables de scroll iniciadas
		_$bodyC = $('.body-container');
	};
	var _scrollEvents = function _scrollEvents(){
		// Eventos de scroll
	};
	return{
		init : function init(){
			_scrollVars();
			// _$bodyC.on('scroll', function(){
			// 	_scrollEvents();
			// });
		}
	}
})();
CARNE.slideshow = (function(){
	var _slideVars = function _slideVars(){};
	var _slideEvents = function _slideEvents(){
		alert("gola");
	};
	return{
		init : function init(){
			_slideVars();
			_slideEvents();
		}
	}
})();