function createPitch(number) {
  $.ajax({
    type : 'POST',
    url : 'http://high-wind-14.heroku.com/pitches.json',
              dataType : 'json',
              data: {
                "pitch":{
            	 "soft_name":$("#name").val(),
                  "title":$("#pitchIdea").val(),
                  "needs":$("#need").val(),
				  "number":number
                }
              },
              error : function(XMLHttpRequest, textStatus, errorThrown) {
              }
          });
          return false;
      }
$(function() {
	var number = 1;
	$("#name").focus();
	$("#submit").click(function(){
		createPitch(number);
		number++; 
		$("#name").val("");
		$("#pitchIdea").val("");
		$("#need").val("");
		$("#name").focus();	
	});
	
	
	$('#need').keypress(function(event) {
	  if (event.keyCode == '13') {
	     createPitch(number);
		 number++;
		$("#name").val("");
		$("#pitchIdea").val("");
		$("#need").val("");
		$("#name").focus();
	   }
	   
	});

	
	$("#name").focus(function(){
		$("#name").val("");
	});

	$("#pitchIdea").focus(function(){
		$("#pitchIdea").val("");
	});

	$("#need").focus(function(){
		$("#need").val("");
	});
	
});