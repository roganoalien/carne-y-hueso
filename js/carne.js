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
		_$close_popup,
		_$popup,
		_$pop_container;
	var _cortesVars = function _cortesVars(){
		_$cortes_li = $('.display-cuts li');
		_$popup = $('.cut-popup');
		_$pop_container = $('.popup-container');
		_$close_popup = $('.close-popup');
	};
	var _cortesEvents = function _cortesEvents(){
		_$cortes_li.on('click', function(){
			var _meat = $(this).data('corte');
			_$pop_container.removeClass().addClass('popup-container');
			_$popup.addClass('open');
			setTimeout(function(){
				_$pop_container.addClass('showing ' + _meat);
			}, 500);
		});
		_$close_popup.on('click', function(){
			_$pop_container.removeClass('showing');
			setTimeout(function(){
				_$popup.removeClass('open');
			}, 500);
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
		_$r_nav,
		_$menuOpener,
		_$menuCloser,
		_$body_container;
	var _navVars = function _navVars(){
		_$header_item = $('header a');
		_$bodyContainer = $('.body-container');
		_onScroll = false;
		_$menuOpener = $('nav svg');
		_$menuCloser = $('.close-r-menu');
		_$r_nav = $('.r-nav');
	};
	var _navEvents = function _navEvents(){
		_$header_item.on('click', function(event){
			event.preventDefault();
			_id = $(this).attr('href');
			if(!$(this).attr('data-check')){
				if(!_onScroll){
					_animateScroll(_id);
				}
			} else{
				if(!_onScroll){
					_closingMenu();
					setTimeout(function(){
						_animateScroll(_id)
					}, 1000);
				}
			}
		});;
		_$menuOpener.on('click', function(){
			//open menu
			_$bodyContainer.addClass('no-scroll');
			_$r_nav.addClass('active');
			setTimeout(function(){
				_$r_nav.find('.container').addClass('active');
			}, 500);
		})
		_$menuCloser.on('click', function(){
			_closingMenu();
		});
	};
	var _closingMenu = function _closingMenu(){
		_$r_nav.find('.container').removeClass('active');
		setTimeout(function(){
			_$r_nav.removeClass('active');
			_$bodyContainer.removeClass('no-scroll');
		}, 500);
	};
	var _animateScroll = function _animateScroll(_id){
		_onScroll = true;
		_currentPos = _$bodyContainer.scrollTop();
		_goto = $(_id).offset().top;
		if(_id == "#cortes"){
			_$bodyContainer.animate({
				scrollTop: _goto + _currentPos - 140
			}, 500, function(){
				_onScroll = false;
			});
		} else {
			_$bodyContainer.animate({
				scrollTop: _goto + _currentPos - 80
			}, 500, function(){
				_onScroll = false;
			});
		}
		Ps.update(document.getElementById('container'));
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
		_firstSelect = false,
		_adding,
		_$selectCuatro,
		_$sendForm;
	var _slideVars = function _slideVars(){
		_$addSelects = $('.add-selects');
		_$selectDos = $('.second-to-select');
		_$selectTres = $('.third-to-select');
		_$selectCuatro = $('.four-to-select');
		_$sendForm = $('.send-form');
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
				_$addSelects.hide();
			}
		}
	};
	var _formSelect = function _formSelect(){
		$('select').on("click", function(){
			if(!_firstSelect){
				$('select').css('color', 'black');
				_firstSelect = true;
			}
		});
	};
	var _formValidator = function _formValidator(){
		_$sendForm.on('click', function(event){
			event.preventDefault();
		});
	};
	return{
		init : function init(){
			_slideVars();
			_slideEvents();
			_formSelect();
			_formValidator();
		}
	}
})();
CARNE.scrollMagic = (function() {
	var _heightNosotros,
		_heightCortes,
		_heightParrilla,
		_heightContacto;
	var _magicVars = function _magicVars(){
		//variables del ScrollMagic
		_heightNosotros = $('#nosotros').height();
		_heightCortes = $('.american-cuts').height();
	};
	var _magicEvents = function _magicEvents(){
		// var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
		// new ScrollMagic.Scene({triggerElement: "#nosotros"})
		// 					.setTween(_$parallax1, {y: "80%", ease: Linear.easeNone})
		// 					.addIndicators()
		// 					.addTo(controller);
		var controller1 = new ScrollMagic.Controller({globalSceneOptions: {duration: _heightNosotros}});
		//NOSOTROS
		new ScrollMagic.Scene({triggerElement: "#nosotros"})
							.setClassToggle(".nosotros-nav", "selected") // add class toggle
							.addIndicators() // add indicators (requires plugin)
							.addTo(controller1);
		var controller2 = new ScrollMagic.Controller({globalSceneOptions: {duration: _heightCortes}});
		new ScrollMagic.Scene({triggerElement: "#cortes"})
							.setClassToggle(".cortes-nav", "selected") // add class toggle
							.addIndicators() // add indicators (requires plugin)
							.addTo(controller2);
	};
	return{
		init : function init(){
			// _magicVars();
			// _magicEvents();
		}
	}
})();
CARNE.formSend = (function() {
	var _processForm = function _processForm(){
		jQuery.validator.addMethod('answercheck', function (value, element) {
		        return this.optional(element) || /^\bcat\b$/.test(value);
		    }, "type the correct answer -_-");
		$('#contact').validate({
			rules: {
				name: {
					required: true,
					minlength: 4
				},
				email:{
					required: true,
					email: true
				},
				message:{
					required: true,
					minlength: 6
				},
				answer:{
					required: true,
					answercheck: true
				}
			},
			messages: {
				name:{
					required: "Necesitamos tu nombre para poder ubicarte",
					minlength: "Tu nombre debe de tener más de 4 letras"
				},
				email:{
					required: "Para poder responderte y tenerte en nuestra base de datos ocupamos tu correo"
				},
				message:{
					required: "Por favor escribe las especificaciones de tu entrega, indicaciones, comentarios o sugerencias",
					minlength: "Ocupa tener más letras para poder entenderte de forma correcta"
				},
				answer:{
					required: "sorry, wrong answer!"
				}
			},
			submitHandler: function(form){
				$(form).ajaxSubmit({
					type:"POST",
					data:$(form).serialize(),
					url:"process.php",
					success: function(){
						$('#contact :input').attr('disabled', 'disabled');
						$('#contact').fadeTo("slow", 0.15, function(){
							$(this).find(':input').attr('disabled', 'disabled');
							$('#success').fadeIn();
						});
					},
					error: function(){
						$('#contact').fadeTo("slow", 0.15, function(){
							$('#error').fadeIn();
						});
					}
				});
			}
		});
	};
	return{
		init : function init(){
			_processForm();
		}
	}
})();