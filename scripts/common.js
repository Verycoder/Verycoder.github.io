var Week = ["日","一","二","三","四","五","六"];
function showTime(){
	window.setInterval(function(){
		var time = new Date();
		var year = time.getFullYear().toString();
		var month = (time.getMonth() + 1).toString();
		var date = time.getDate().toString();
		var hour = time.getHours().toString();
		var min = time.getMinutes().toString();
		var sec = time.getSeconds().toString();
		var day = time.getDay().toString();
		if(month.length == 1)
			month = "0"+month;
		if(date.length == 1)
			date = "0"+date;
		if(hour.length == 1)
			hour = "0"+hour;
		if(min.length == 1)
			min = "0"+min;
		if(sec.length == 1)
			sec = "0"+sec;
		var mytime = year + "年" + month + "月" + date + "日  星期" +  Week[day] + "  " + hour + ":" + min + ":" + sec;
		$("#time").html(mytime);
	}, 1000);
}
function showChile(input){
	var ddElement = $("#"+input);
	var showStatus = ddElement.attr("hidden");
	if(showStatus == "hidden"){
		ddElement.removeAttr("hidden");
	}else{
		ddElement.prop("hidden", "hidden");	
	}
}

function openDetail(input, contentUrl, musicUrl, showMusic){
	var detail = $(input).parent().parent().parent().find("div");
	if(contentUrl != null){
		var content = $.ajax({url:contentUrl, async:false});
		detail.html(content.responseText);
	}
	if(musicUrl != null && showMusic == "true"){
		$("EMBED").attr("hidden","hidden");
		var newEmbed = '<EMBED src="'+ musicUrl +'" width=0 height=0 volume=70 autostart=true loop=5 style="background:white"></EMBED>';
		$("#music").html(newEmbed);
	}
	contentUrl = "'"+ contentUrl +"'";
	musicUrl = "'"+ musicUrl +"'";
	detail.removeAttr("hidden");
	$(input).html("收起");
	$(input).attr("onclick","closeDetail(this, "+ contentUrl +", " + musicUrl + ")");
	
}

function closeDetail(input, contentUrl, musicUrl){
	contentUrl = "'"+ contentUrl +"'";
	musicUrl = "'"+ musicUrl +"'";
	var detail = $(input).parent().parent().parent().find("div");
	detail.prop("hidden","hidden");
	$(input).html("展开");
	$(input).attr("onclick","openDetail(this, "+ contentUrl +", " + musicUrl + ")");
}