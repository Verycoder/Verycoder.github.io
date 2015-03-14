
function showChile(input){
	var ddElement = $("#"+input);
	var showStatus = ddElement.attr("hidden");
	if(showStatus == "hidden"){
		ddElement.removeAttr("hidden");
	}else{
		ddElement.prop("hidden", "hidden");	
	}
}

function openDetail(input){
	var detail = $(input).parent().parent().parent().find("div");
	detail.removeAttr("hidden");
	$(input).html("收起");
	$(input).attr("onclick","closeDetail(this)");
}

function closeDetail(input){
	var detail = $(input).parent().parent().parent().find("div");
	detail.prop("hidden","hidden");
	$(input).html("展开");
	$(input).attr("onclick","openDetail(this)");
}