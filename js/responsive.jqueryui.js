/*! Responsive jQuery UI styling 4.0.0 for DataTables
 * Copyright (c) SpryMedia Ltd - datatables.net/license
 */

(function(factory){
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['datatables.net-jqui', 'datatables.net-responsive'], function (dt) {
			return factory(window, document, dt);
		});
	}
	else if (typeof exports === 'object') {
		// CommonJS
		var cjsRequires = function (root) {
			if (! root.DataTable) {
				require('datatables.net-jqui')(root);
			}

			if (! window.DataTable.Responsive) {
				require('datatables.net-responsive')(root);
			}
		};

		if (typeof window === 'undefined') {
			module.exports = function (root) {
				if (! root) {
					// CommonJS environments without a window global must pass a
					// root. This will give an error otherwise
					root = window;
				}

				cjsRequires(root);
				return factory(root, root.document, root.DataTable);
			};
		}
		else {
			cjsRequires(window);
			module.exports = factory(window, window.document, window.DataTable);
		}
	}
	else {
		// Browser
		factory(window, document, window.DataTable);
	}
}(function(window, document, DataTable) {
'use strict';



// Note that jQuery UI's JS depends upon jQuery, so we use it here
var $ = DataTable.use('jq');
var _display = DataTable.Responsive.display;
var _original = _display.modal;

_display.modal = function (options) {
	return function (row, update, render, closeCallback) {
		if (!$.fn.dialog) {
			return _original(row, update, render, closeCallback);
		}
		else {
			var rendered = render();

			if (rendered === false) {
				return false;
			}

			if (!update) {
				$('<div/>')
					.append(rendered)
					.appendTo('body')
					.dialog(
						$.extend(
							true,
							{
								close: closeCallback,
								title: options && options.header ? options.header(row) : '',
								width: 500
							},
							options.dialog
						)
					);
			}
			else {
				return false;
			}

			return true;
		}
	};
};


return DataTable;
}));
