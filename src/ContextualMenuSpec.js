(function(){
	'use strict';

	describe('ContextualMenu - Test suite', function(){

		describe('When we instantiate the class', function(){
			it('should call the constructor and initialize some values', function(){
				// Initializing arguments for constructing object
				var mlist = {
				    "arrow-circle-left": "Atrás",
				    "undo": "Deshacer",
				    "refresh": "Recargar",
				    "question-circle": "Ayuda",
					"close": "Cerrar"
				};

				var mlinks = new Array(
					"alert('Seleccionada la opción atrás')",
					"alert('Seleccionada la opción Deshacer')",
					"alert('Seleccionada la opción Recargar')",
					"alert('Seleccionada la opción Ayuda')",
					"alert('Seleccionada la opción Cerrar')"
				);

				// Instantiating the object
				var cm = new ContextualMenu(mlist, mlinks);				

				// Expecting results
				expect(cm.shown).toBe(false);
				expect(cm.menu_list).toEqual(mlist);
				expect(cm.x_limit).toEqual(window.innerWidth);
				expect(cm.y_limit).toEqual(window.innerHeight);

				var mockedcssOutput = ".context-menu-container{z-index:999999;width:250px;height:" + (Object.keys(cm.menu_list).length * 41) + "px;box-shadow:0px 0px 5px #666;transition:opacity 0.3s ease-in-out;background:#fff;}";
				mockedcssOutput += "\n\t.cm-hidden{opacity:0}";
				mockedcssOutput += "\n\n.cm-option-list{margin:0;padding:0;}";
				mockedcssOutput += "\n\t.cm-option-list li{list-style:none;margin:0;padding:10px 10px 0px 10px;height:30px;border-bottom:1px solid #dfdfdf;transition:background 0.1s ease-in-out, color 0.1s ease-in-out;background:#fff;color:#333;vertical-align:top;}";
				mockedcssOutput += "\n\t\t.cm-option-list li:hover{background:#228dd3;color:#fff;cursor:pointer;}";

				var cssOutput = document.getElementsByTagName("head")[0].lastChild.innerHTML;
				expect(cssOutput).toEqual(mockedcssOutput);
			});
		});

	});

})();