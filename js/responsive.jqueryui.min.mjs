/*! Responsive jQuery UI styling 4.0.0-beta.1 for DataTables
 * Copyright (c) SpryMedia Ltd - datatables.net/license
 */
import DataTable from"datatables.net-jqui";import Responsive from"datatables.net-responsive";var $=DataTable.use("jq"),_display=DataTable.Responsive.display,_original=_display.modal;_display.modal=function(l){return function(a,e,i,t){var d;return $.fn.dialog?!1!==(d=i())&&!e&&($("<div/>").append(d).appendTo("body").dialog($.extend(!0,{close:t,title:l&&l.header?l.header(a):"",width:500},l.dialog)),!0):_original(a,e,i,t)}};export default DataTable;