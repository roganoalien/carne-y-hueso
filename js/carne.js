var CARNE = (function() {
	// Variables Globales
	var _initVars = function _initVars(){
		// Variables iniciadas
	};
	var _initEvents = function _initEvents(){
		// Eventos a iniciar
		// CARNE.loader.init();
		CARNE.nav.init();
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
		// fakeit
	};
	return{
		init : function init(){
			_loader();
		}
	}
})();
CARNE.nav = (function(){
	var _$header_item,
		_$bodyContainer,
		_currentPos,
		_id,
		_onScroll,
		_goto,
		_$body_container;
	var _navVars = function _navVars(){
		_$header_item = $('header a');
		_$bodyContainer = $('.body-container');
		_onScroll = false;
	};
	var _navEvents = function _navEvents(){
		_$header_item.on('click', function(event){
			event.preventDefault();
			if(!_onScroll){
				_onScroll = true;
				_currentPos = _$bodyContainer.scrollTop();
				_id = $(this).attr('href');
				_goto = $(_id).offset().top;
				_$bodyContainer.animate({
					scrollTop: _goto + _currentPos - 80
				}, 500, function(){
					_onScroll = false;
				});
				Ps.update(document.getElementById('container'));
			}
		});
	};
	return{
		init : function init(){
			_navVars();
			_navEvents();
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