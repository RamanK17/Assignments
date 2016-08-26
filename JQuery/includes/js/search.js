$(function(){
	var table=$('#table');
 	var tbody=$('#table tbody');	

 $('#btn1').on('click',function()
 {
	var title=$('#title').val();
	
	   	
  	$.ajax({
 		type:'GET',
 		url:'http://www.omdbapi.com/?s='+title,
		dataType:'JSON',
 		success:function(movies)
 		{
 			if(movies.Response=="True")
 			{	
 		      tbody.empty();

 		       $.each(movies.Search,function(i,movie)
 		       {
                table.append('<tr>'+ '<td>'+"<img class=img-responsive src="+movie.Poster+">"+'</td>'+'<td>'+'Title: '+movie.Title+'<br>'+'Year: '+movie.Year+'<br>'+'imdbID: '+movie.imdbID+'<br>'+'Type: '+movie.Type +'</td>'+'</tr>').addClass("table-responsive");

               });
 		    }
	   	  else
	   	  {
	   	  	alert("The Movie You entered does not exist");
	   	  }
	    }
 	});
 });
});