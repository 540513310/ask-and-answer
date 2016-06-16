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
		buttons:{
			'提交':function(){}
		}
	});

	$("#reg_a").click(function () {
		$("#reg").dialog('open');
	});

	$('#reg').buttonset();
	$('#reg input[title]').tooltip();
	$('#birth').datepicker();
})