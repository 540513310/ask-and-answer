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
	$('#birth').datepicker();

	$('#email').autocomplete({
		delay:0,
		source:function (request,response) {
			var hosts=['qq.com','163.com','gmail.com','sina.com.cn','hostmail.com'],
			userTypeIn=request.term,			//用户输入的内容
			name=userTypeIn,					//暂存用户输入的内容
			
			host=''	,							//邮箱的域名
			result=[],							//最终的邮箱列表
			ix=userTypeIn.indexOf('@');			//输入的@所在的位置，如果输入中包含@则得到@所在的索引，否则得到-1
			result.push(userTypeIn);
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
			    result=result.concat(host_list);
			}
			
			response(result);
		},
	});
})