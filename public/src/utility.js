var pitchNight = { 
	pageList: ["#activities","#people","#pitches","#authenticate","#idea","#feedData"],
	currentPage: this.pageList[0],
	currentClass: "current",
	setState: function(page){$(this.currentPage).removeClass(this.currentClass); $(page).addClass(this.currentClass); this.currentPage=page;}
};
$(function(){
	pitchNight.setState(pitchNight.pageList[0]);
	$("#activitiesLink").click(function(){pitchNight.setState(pitchNight.pageList[0]);});
	$("#peopleLink").click(function(){pitchNight.setState(pitchNight.pageList[1]);});
	$("#pitchesLink").click(function(){pitchNight.setState(pitchNight.pageList[2]);});
});

