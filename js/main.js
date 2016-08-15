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

var cm = new ContextualMenu(mlist, mlinks);