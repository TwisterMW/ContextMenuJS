[![Build Status](https://travis-ci.org/TwisterMW/js-context-menu.svg?branch=twistermw%2Fgeneralreview)](https://travis-ci.org/TwisterMW/js-context-menu)

[![npm version](https://badge.fury.io/js/js-context-menu.svg)](https://badge.fury.io/js/js-context-menu)

# ContextMenuJS
Library for displaying a customizable context menu on right-click mouse button

## REQUIREMENTS
- FontAwesome (Included by bower)
- Node
- NPM

## USAGE
Declare icons and labels for contextual menu options
```javascript
var mlist = {
	"arrow-circle-left": "Atrás",
	"undo": "Deshacer",
	"refresh": "Recargar",
	"question-circle": "Ayuda",
	"close": "Cerrar"
};
```

Note that "mlist" is a dictionary which Key is the name of the icon (font-awesome library) and Value is the label of the option.

You need to declare also the context menu actions for each button like this:
```javascript
var mlinks = Array(
	"alert('Seleccionada la opción atrás')",
	"alert('Seleccionada la opción Deshacer')",
	"alert('Seleccionada la opción Recargar')",
	"alert('Seleccionada la opción Ayuda')",
	"alert('Seleccionada la opción Cerrar')"
);
```

Finally only need to instantiate the ContextMenu object like:
```javascript
var cm = new ContextualMenu(mlist, mlinks);
```

## TESTING
You can run test suite by running: ```karma start karma.conf.js```