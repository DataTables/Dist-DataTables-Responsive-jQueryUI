/*! jQuery UI integration for DataTables' Responsive
 * © SpryMedia Ltd - datatables.net/license
 */
import $ from"jquery";import DataTable from"datatables.net-jqui";import Responsive from"datatables.net-responsive";var _display=DataTable.Responsive.display,_original=_display.modal;_display.modal=function(o){return function(a,e,i,t){return $.fn.dialog?(e||$("<div/>").append(i()).appendTo("body").dialog($.extend(!0,{title:o&&o.header?o.header(a):"",width:500},o.dialog)),!0):_original(a,e,i,t)}};export default DataTable;