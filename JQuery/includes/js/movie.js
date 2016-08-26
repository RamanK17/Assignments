$(function(){
	var table=$('#table');
 	var tbody=$('#table tbody');	

 $('#btn1').on('click',function(){
	var title=$('#title').val();
	
	   	
  	$.ajax({
 		type:'GET',
 		url:'http://www.omdbapi.com/?s='+title,
		dataType:'JSON',
 		success:function(movies){
 			if(movies.Response=="True")
 			{	
 		      tbody.empty();

     		  for(var m in movies.Search)
     		  {
     		  	var movie=movies.Search[m];
     		  	var title=movie.Title;
     		  	var year=movie.Year;
     		  	var imdbId=movie.imdbID;
     		  	var type=movie.Type;
     		  	var poster=movie.Poster;

     		  	var tr=$("<tr>");
                     var titleTd=$("<td>").append(title);
                     var plotTd=$("<td"+ type +"<td>");
                     var yearplot=$("<td>").append(year);
                     var typeTd=$("<td>").append(type);
                     var imdbplot=$("<td>").append(imdbId);
                     var img=$("<img>").addClass('img-responsive').attr("src",poster);
                     var posterTd=$("<td>").append(img);
                     tr.append(titleTd);
                     tr.append(yearplot);
                     tr.append(typeTd);
                     tr.append(imdbplot);
                     tr.append(posterTd);
                     tbody.append(tr).addClass('table-responsive');
     		  }

	   	  }
	   	  else
	   	  {
	   	  	
	   	  	alert("The Movie You entered does not exist");
	   	  }
	    }
 	});


	});
});