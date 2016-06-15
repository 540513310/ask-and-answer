$(function () {
	$("#search_button").button({
		icons:{
			primary:'ui-icon-search',
		},
		size:{

		},
	});

	$("#reg").dialog({
		autoOpen:false,
	});

	$("#reg_a").click(function () {
		$("#reg").dialog('open');
	});
})