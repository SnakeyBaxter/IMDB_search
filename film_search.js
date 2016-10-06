$(document).ready(function(){
    $("button").click(function(){
	    
	    var term = $("#search").val();
		$.getJSON("http://www.omdbapi.com/?t="+term, function(data) {
			console.log(data);
			$('#title').html("<h1>" + data.Title + "</h1>");
			$('#year').html("<h3>" + data.Year + "</h3>");
			$('#director').html("<h2>" + data.Director + "</h2>");
			$('#country').html("<p>" + data.Country + "</p>");
			$('#runtime').html("<p>" + data.Runtime + "</p>");
			$('#actors').html("<p>" + data.Actors + "</p>");
			$('#cert').html("<p>" + data.Rated + "</p>");
			$('#genre').html("<p>" + data.Genre + "</p>");
			$('#plot').html("<p>" + data.Plot + "</p>");
			$('#poster').html("<img src=" + data.Poster + "/>"); 
			$("#upper").show();
			$("#lower").show();
			
		});
	 
	});
	 
});

