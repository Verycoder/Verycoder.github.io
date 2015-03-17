
function showChile(input){
	var ddElement = $("#"+input);
	var showStatus = ddElement.attr("hidden");
	if(showStatus == "hidden"){
		ddElement.removeAttr("hidden");
	}else{
		ddElement.prop("hidden", "hidden");	
	}
}

function openDetail(input, contentUrl, musicUrl){
	var detail = $(input).parent().parent().parent().find("div");
	if(contentUrl != null){
		var content = $.ajax({url:contentUrl, async:false});
		detail.html(content.responseText);
	}
	if(musicUrl != null){
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