var CARNE = (function() {
	// Variables Globales
	var _initVars = function _initVars(){
		// Variables iniciadas
	};
	var _initEvents = function _initEvents(){
		// Eventos a iniciar
		// CARNE.loader.init();
		CARNE.nav.init(); //LLAMAR AL FINAL DEL LOADER
		CARNE.scrollMagic.init();
		CARNE.scroll.init(); //LLAMAR AL FINAL DEL LOADER
		CARNE.cortes.init();
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
CARNE.cortes = (function(){
	var _$cortes_li,
		_$popup,
		_$pop_container;
	var _cortesVars = function _cortesVars(){
		_$cortes_li = $('.display-cuts li');
		_$popup = $('.cut-popup');
		_$pop_container = $('.popup-container');
	};
	var _cortesEvents = function _cortesEvents(){
		_$cortes_li.on('click', function(){
			_$pop_container.removeClass();
			_$popup.addClass('open');
			_$pop_container.addClass('popup-container ' + $(this).data('corte'));
		});
	};
	return{
		init : function init(){
			_cortesVars();
			_cortesEvents();
		}
	}
})();
CARNE.nav = (function(){
	var _$header_item,
		_$bodyContainer,
		_currentPos,
		_id,
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
	var _$bodyC,
		_$header,
		_onScroll,
		_$header_item,
		_$sections,
		_arrayPos,
		_scrollPos;
	var _scrollVars = function _scrollVars(){
		// Variables de scroll iniciadas
		_$bodyC = $('.body-container');
		_$header = $('header');
		_$sections = $('.section-pos');
		_arrayPos = [];
		_$header_item = $('header a');
	};
	var _scrollEvents = function _scrollEvents(){
		// Eventos de scroll
		_scrollPos = _$bodyC.scrollTop();
		if(_scrollPos >= 800){
			_$header.addClass('scrolled');
		} else{
			_$header.removeClass('scrolled');
		}
		// _scrollSpy();
	};
	var _scrollSpy = function _scrollSpy(){
		// console.log("entra scrollSpy");
		// _getPositions();
		// if(_scrollPos < _arrayPos[0] + 80){
		// 	console.log('INICIO')
		// 	_$header_item.removeClass('selected');
		// 	_$header_item.eq(0).addClass('selected');
		// }
		// if((_scrollPos >= _arrayPos[0] + 80) && (_scrollPos < _arrayPos[1])){
		// 	_$header_item.removeClass('selected');
		// 	console.log("NOSOTROS");
		// 	_$header_item.eq(1).addClass('selected');
		// }
		// if((_scrollPos >= _arrayPos[1] + 80) && (_scrollPos < _arrayPos[2])){
		// 	_$header_item.removeClass('selected');
		// 	console.log("NOSOTROS");
		// 	_$header_item.eq(2).addClass('selected');
		// }
	};
	var _getPositions = function _getPositions(){
		// console.log("entra _getPositions")
		// for(i = 0; i < 4; i++){
		// 	_arrayPos[i] = _$sections.eq(i + 1).offset().top;
		// }
	};
	return{
		init : function init(){
			_scrollVars();
			_$bodyC.on('scroll', function(){
				_scrollEvents();
			});
		}
	}
})();
CARNE.contact = (function(){
	var _$addSelects,
		_contador,
		_$selectDos,
		_$selectTres,
		_adding,
		_$selectCuatro;
	var _slideVars = function _slideVars(){
		_$addSelects = $('.add-selects');
		_$selectDos = $('.second-to-select');
		_$selectTres = $('.third-to-select');
		_$selectCuatro = $('.four-to-select');
		_contador = 0;
		_adding = false;
	};
	var _slideEvents = function _slideEvents(){
		console.log("disparo contact events")
		_$addSelects.on('click', function(){
			if(_contador < 3){
				_contador++;
				_add();
				_adding = false;
			}
		});
	};
	var _add = function _add(){
		console.log(_contador);
		if(!_adding){
			_adding = true;
			if(_contador == 1){
				console.log("dos");
				_$selectDos.addClass('show');
			}
			if(_contador == 2){
				console.log("tres");
				_$selectTres.addClass('show');
			}
			if(_contador == 3){
				console.log("cuatro");
				_$selectCuatro.addClass('show');
			}
		}
	};
	return{
		init : function init(){
			_slideVars();
			_slideEvents();
		}
	}
})();
CARNE.scrollMagic = (function() {
	var _$parallax1,
		_$parallax2,
		_$parallax3;
	var _magicVars = function _magicVars(){
		//variables del ScrollMagic
		_$parallax1 = $('#parallax-one');
		_$parallax2 = $('.us-owners');
		_$parallax3 = $('#parrilla');
	};
	var _magicEvents = function _magicEvents(){
		var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
		new ScrollMagic.Scene({triggerElement: "#nosotros"})
							.setTween(_$parallax1, {y: "80%", ease: Linear.easeNone})
							.addIndicators()
							.addTo(controller);
		var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
	};
	return{
		init : function init(){
			// _magicVars();
			// _magicEvents();
		}
	}
})();