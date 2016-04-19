var CARNE = (function() {
	// Variables Globales
	var _initVars = function _initVars(){
		// Variables iniciadas
	};
	var _initEvents = function _initEvents(){
		// Eventos a iniciar
		CARNE.scroll.init();
		// CARNE.perfect_scroll.init();
	};
	return {
		init : function init(){
			_initVars();
			_initEvents();
		}
	}
})();
CARNE.scroll = (function() {
	// Variables para el scroll
	var _scrollVars = function _scrollVars(){
		// Variables de scroll iniciadas
	};
	var _scrollEvents = function _scrollEvents(){
		// Eventos de scroll
	};
	return{
		init : function init(){
			_scrollVars();
			_scrollEvents();
		}
	}
})();