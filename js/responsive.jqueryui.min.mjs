/*! jQuery UI integration for DataTables' Responsive
 * © SpryMedia Ltd - datatables.net/license
 */
import $ from"jquery";import DataTable from"datatables.net-ju";import DataTable from"datatables.net-responsive";var _display=DataTable.Responsive.display,_original=_display.modal;_display.modal=function(i){return function(a,e,t){$.fn.dialog?e||$("<div/>").append(t()).appendTo("body").dialog($.extend(!0,{title:i&&i.header?i.header(a):"",width:500},i.dialog)):_original(a,e,t)}};export default DataTable;