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
	$('#reg input[title]').tooltip({
		position:{
			my:'left',
			at:'right'
		}

		});

	$('#date').datepicker({
		dateFormat:'yy-mm-dd',
		dateNamesMin:['日','一','二','三','四','五','六'],
		monthNames:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一','十二'],
		monthNamesShort:['一','二','三','四','五','六','七','八','九','十','十一','十二'],

		altFormat:'yy/mm/dd',
		weekHeader:true,
		firstDay:'1',
		changeMonth:true,
		changeYear:true,
		showButtonPanel:true,
		closeText:'关闭',
		currentText:'add今天',
		maxDate:0,
		hideIfNoPrevNext : true,
		yearRange : '1950:2020',

	});

	$('#email').autocomplete({
		delay:0,
		source:function (request,response) {
			var hosts=['qq.com','163.com','gmail.com','sina.com.cn','hostmail.com'],
			userTypeIn=request.term,			//用户输入的内容
			name=userTypeIn,					//暂存用户输入的内容
			
			host=''	,							//邮箱的域名
			result=[],							//最终的邮箱列表
			ix=userTypeIn.indexOf('@');			//输入的@所在的位置，如果输入中包含@则得到@所在的索引，否则得到-1
			//result.push(userTypeIn);
			//当有@时，重新分配用户名和域名
			if(ix>-1){
				 name=userTypeIn.slice(0,ix);	//@符号之前的为邮箱中的用户名
				 host=userTypeIn.slice(ix+1);	//@符号之后的为邮箱中的域名
			}
			//从hosts数组中过滤出用户输入的域名的元素
			//如果用户已经输入了域名中的一部分，则从hosts中过滤出，否则是全部的hosts
			if(name)
			{
				var host_grep=(host?$.grep(hosts,function (value,index) {	
				return value.indexOf(host)>-1;
			    }):hosts);
			    //把过滤出来的域名和用户名组合成邮箱列表
			    var host_list=$.map(host_grep,function (value,index) {
			    	return name+'@'+value;
			    });
			    //result=result.concat(host_list);
			}
			
			//response(result);
			response(host_list);
		},
	});
})