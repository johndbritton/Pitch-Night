var pitchNight = {
	currentClass: "current",
	currentPage: "",
	currentPageLink: "",
	pageLinks: ["activitiesLink","peopleLink","pitchesLink"],
	pageTitles: ["Activity Feed","People","Pitches","Login","","Enter Pitches"],
	setState: function(page,requestUrl,rootObject,pageLink){var pageTitle, subNav;
			$(this.currentPageLink).removeClass("active");
			$(pageLink).addClass("active");
			this.currentPageLink = pageLink;
			this.currentPage = page;
			switch(page){
				case "#activities":
					pageTitle = "Activities Feed";
					subNav = "<ul id=\"activitiesFilter\"><li id=\"everyoneFilter\"><a class=\"tl tr bl br\" href=\"#everyone\">Everyone</a></li>"+
		                "<li id=\"myFilter\"><a class=\"tl tr bl br\" href=\"#me\">Me</a></li></ul>";
					break;
				case "#people":
					pageTitle = "People";
					subNav="";
					break;
				case "#pitches":
					pageTitle = "Pitches";
					break;
				case "#authenticate":
					pageTitle = "Login";
					break;
				case "#idea":
					
					break;
				case "#feedData":
					pageTitle = "Enter Pitches";
					break;
			}
			$("#pageTitle").html(pageTitle);
			$("#subNav").html(subNav); 
			this.getListRequest(requestUrl,rootObject);
		},
	handleUrls: ["http://www.twitter.com/"],
	handleImageUrls: ["http://api.twitter.com/1/users/profile_image/"],
	pageList: ["#activities","#people","#pitches","#authenticate","#idea","#feedData"],
	ajaxRequestType: ["GET","POST"],
	ajaxDataType: ["json","xml"],
	baseUrl: "http://high-wind-14.heroku.com/",
	getListUrl: ["activities","users","pitches","","pitches",""],
	requestRootObject: ["activity","user","pitch"],
	getListRequest: function(requestUrl,rootObject){var elem = $(".edgetoedge","#content");elem.html("");
		$.ajax({url: requestUrl+"."+pitchNight.ajaxDataType[1],
			success: function(feed){
				switch(rootObject){
					case 'activity':var type="Vote";
						$(feed).find("record").each(function(){
							if($(this).find("goal"))type="Pitch";
							var name = $(this).find("soft-name").text();
							var goal = $(this).find("goal").text();
							var need = $(this).find("need").text();
							switch(type){
								case "Pitch":
										elem.append("<li>"+name+" wants to '<i>"+ goal +"</i> and needs <i>"+ need +"</i>.</li>");
									break;
								case "Vote":
										
									break;
							}
							
							
						});
						break;
					case 'user':
						$(feed).find("user").each(function(){
							var username = $(this).find("name").text();var handle = $(this).find("twitter").text();var imgUrl = pitchNight.handleImageUrls[0]+handle;
							elem.append("<li><img src=\""+imgUrl+"\" alt=\""+username+"\"/> "+username+"  <img src=\"src/twitter.png\" /></li>");
						});
						
						break;
					case 'pitch':var count = 1;
						$(feed).find("pitch").each(function(){
							var userid = $(this).find("user_id").text();var title = $(this).find("title").text();
							var name = $(this).find("soft-name").text();title= "Pitch #"+count+" by "+name;
							elem.append("<li>"+title+"</li>");
							count += 1;
						});
						break;
				};
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){alert(XMLHttpRequest + "   " + textStatus + "   " + errorThrown);}
		});
		}
};
$(function(){
	pitchNight.setState(pitchNight.pageList[0],pitchNight.getListUrl[0], pitchNight.requestRootObject[0],pitchNight.pageLinks[0]);
	$("#activitiesLink").click(function(){pitchNight.setState(pitchNight.pageList[0],pitchNight.getListUrl[0], pitchNight.requestRootObject[0],pitchNight.pageLinks[0]);return false;});
	$("#peopleLink").click(function(){pitchNight.setState(pitchNight.pageList[1],pitchNight.getListUrl[1], pitchNight.requestRootObject[1],pitchNight.pageLinks[1]);return false;});
	$("#pitchesLink").click(function(){pitchNight.setState(pitchNight.pageList[2],pitchNight.getListUrl[2], pitchNight.requestRootObject[2],pitchNight.pageLinks[2]);return false;});
});

