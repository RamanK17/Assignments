$(document).ready(function(){
 	var viewAll=$('#viewAll');
 	var table=$('#table');
 	var searchBtn=$('#searchBtn');
 	var ids=$('#ids');
 	var tbodyid=$('#tbodyid');
		
	var $inputFirstName=$('#inputFirstName');
	var $inputAge=$('#inputAge');
	var $select=$('#select');
	var $inputCompany=$('#inputCompany');
	var $inputEmail=$('#inputEmail');
	var $inputNo=$('#inputNo');

	function record(data)
	{
	 table.append('<tr>'+'<td>'+data.id+'</td>'+'<td>'+data.name+'</td>'+'<td>'+data.age+'</td>'+'<td>'+data.gender+'</td>'+'<td>'+data.company+'</td>'+'<td>'+data.email+'</td>'+'<td>'+data.phone+'</td>'+'<td><button data-id='+data.id+' class="edit"><span class="glyphicon glyphicon-edit"></span></button>'+'<button data-id='+data.id+' class="remove"><span class="glyphicon glyphicon-trash"></span></button></td>'+'</tr>').addClass("table-responsive");
	}
	$('.click').hide();
	viewAll.hide();
	$.ajax({
		type:'GET',
		url:'http://localhost:3000/data?_start=0&_end=20',
		dataType:'JSON',
		success:function(data)
		{	
			$('.click').hide();
			$('#viewAll').hide();
			$(data).each(function(i,emp)
			{
		        table.append('<tr>'+'<td>'+emp.id+'</td>'+'<td>'+emp.name+'</td>'+'<td>'+emp.age+'</td>'+'<td>'+emp.gender+'</td>'+'<td>'+emp.company+'</td>'+'<td>'+emp.email+'</td>'+'<td>'+emp.phone+'</td>'+'<td><button data-id='+emp.id+' class="edit"><span class="glyphicon glyphicon-edit"></span></button>'+'<button data-id='+emp.id+' class="remove"><span class="glyphicon glyphicon-trash"></span></button></td>'+'</tr>').addClass("table-responsive");
		    	
		    });	
		},//end success
		error:function()
		{
			alert('error');
		}//end error
    });//end of ajax

    $('#viewAll').on('click',function(){
	 	ids=$('#ids').val("");
		$("#tbodyid").empty();
		$('#header').show();
	    $.ajax({
			type:'GET',
			url:'http://localhost:3000/data?_start=0&_end=20',
			dataType:'JSON',
			success:function(data)
			{
				$('.click').hide();
				$('#viewAll').hide();
	 			$(data).each(function(i,emp)
	 		    {
	               table.append('<tr>'+'<td>'+emp.id+'</td>'+'<td>'+emp.name+'</td>'+'<td>'+emp.age+'</td>'+'<td>'+emp.gender+'</td>'+'<td>'+emp.company+'</td>'+'<td>'+emp.email+'</td>'+'<td>'+emp.phone+'</td>'+'<td><button data-id='+emp.id+' class="edit"><span class="glyphicon glyphicon-edit"></span></button>'+'<button data-id='+emp.id+' class="remove"><span class="glyphicon glyphicon-trash"></span></button></td>'+'</tr>').addClass("table-responsive");
	            });
			},//end success
			error:function()
			{
				alert('error');
			}//end error
		});//end of ajax
	});//end of view all function
    $('#searchBtn').on('click',function(){
		ids=$('#ids').val();
		$("#tbodyid").empty();
	 	start=0;
	 	end =20;
	 	if(ids === '' || ids === undefined)
	 	{
	 		alert('Please enter valid id' );
	 		$('#header').hide();
	 		$('.click').show();
	 		viewAll.show();
	 	}
	 	else
	 	{	
	 		$('#header').show();
	 		$('.click').show();
	 		viewAll.show();
      		$.ajax({
				type:'GET',
				url:'http://localhost:3000/data/'+ids,
				dataType:'JSON',
				success:function(searchData)
				{
					record(searchData);
				},//end success
				error:function()
				{
					alert('Id does not exist');
				}//end error
			});//end of ajax
  		}//end of else
	});//end of search function
 	$('#addBtn').click(function(){
 		$('#updateTitle').hide();
		$('#cancelBtn').hide(); 
		$('#updateBtn').hide();
	 	$('#titleModal').show();
	 	$('#closeBtn').show();
		$('#saveBtn').show();
 		$inputFirstName.val(" "),
	 	$inputAge.val(" "),
	    $select.val(" "),
	 	$inputCompany.val(" "),
	    $inputEmail.val(" "),
	    $inputNo.val(" ")
	    

 	});//end of modal window open function

	$('#saveBtn').on('click',function(){
 		var employee={
 			name: $inputFirstName.val(),
 			age: $inputAge.val(),
	 		gender: $select.val(),
	 		company: $inputCompany.val(),
	 		email: $inputEmail.val(),
	 		phone: $inputNo.val()
	 		
 		};
 		var tbody=table.find('tbody');
 	
 		//validation
        // to check validation of  email address
        function isValidEmailAddress(emailAddress) 
        {
        	var pattern =(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
         	return pattern.test(emailAddress);
        }
        var flag=isValidEmailAddress(employee.email); 

        if(employee.phone.length==0 || employee.name.length==0 || employee.age.length==0 || employee.gender.length==0 || employee.company.length==0 || employee.email.length==0)
        {
          alert("Mandatory to fill all fields");
        }
        else if(employee.name.length==0 || (!(isNaN(employee.name))))
        {
            alert("Please write a valid  name");
        }
        else if(employee.age.length==0)
        {
            alert("Please fill your age");
        }
        else if(employee.age<=0||employee.age>100)
        {
         	alert("Please enter correct age");
        }
        else if(!(isNaN(employee.gender)))
        {
            alert("Please fill your gender");
        }
        else if(!(isNaN(employee.company)))
        {
            alert("Please enter your company name");
        }
        else if(employee.email.length==0 )
        {
        	alert("Please enter your email address");
        }
        else if((!(flag)))
        {
            alert("Email address is not valid");
        } 
        else if(employee.phone.length==0||employee.phone.length!=10)
        {
            alert("Please enter 10 digit mobile number");
        }
        else if(!$.trim($('#inputFirstName').val()).match(/^[a-zA-Z ]+$/))
        {
          	alert("Name  can only have characters");
        }
        else if(!(($('#select').val()==="male")||($('#select').val()==="female")||($('#select').val()==="Male")||($('#select').val()==="Female")||($('#select').val()==="MALE")||($('#select').val()==="FEMALE")))
        {
          	alert("Incorrect Gender");
        }
        else if($.trim($('#inputNo').val()).match(/^[a-zA-Z]+$/)||(!$.trim($('#inputNo').val()).match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)))
        {
          	alert("Phone No. takes only digits");
        }
 		else
 		{	
 			$('#header').show();
 			$('.click').show();
	 		viewAll.show();
 			$.ajax({
		 	 	type:'POST',
		 	 	url:'http://localhost:3000/data/',
		 	 	dataType:'JSON',
		 	 	data:employee,
		 	 	success:function(data)
		 	 	{
		 	 		tbody.empty();
		 	 		record(data);
		  			alert('employee data added successfully');
		  			$('#iModal').modal('hide');
		 	 	},//end success
		 	 	error:function()
		 	 	{
		 	 		alert('error adding employee data');
		 	 	}//end error
 			});//end of ajax
 	 	}//end of else
 	});//end of save Button function
 
table.delegate('.remove','click',function(){
  
  var $tr = $(this).closest('tr');
  var statusFlag=confirm('Are you Sure you want to delete it?');
  if(statusFlag)
  {
    $.ajax({
	  	type:'DELETE',
	   	url:'http://localhost:3000/data/'+$(this).attr('data-id'),
	    dataType:'JSON',
	 	success:function()
	 	{
	 		$tr.remove();
	 	}//end success
   });//end of ajax
  }//end of if 
});//end of delete function

table.delegate('.edit','click',function(){
	$('#titleModal').hide();
	$('#updateTitle').show();
	$('#closeBtn').hide();
	$('#saveBtn').hide();
	$('#cancelBtn').show();
	$('#updateBtn').show();
 	$('#iModal').modal('show');
	var $tr = $(this).closest('tr');
	var id;	
	$.ajax({
		type:'GET',
		url:'http://localhost:3000/data/'+$(this).attr('data-id'),
		dataType:'JSON',
		success:function(searchData)
		{
			$('#inputFirstName').val(searchData.name);
	 		$('#inputAge').val(searchData.age);
	 		$('#select').val(searchData.gender);
	 		$('#inputCompany').val(searchData.company);
	 		$('#inputEmail').val(searchData.email);
	 		$('#inputNo').val(searchData.phone);
	 
	 		id=searchData.id;
		},//end success
		error:function()
		{
			alert('error');
		}//end error
	});//end of ajax

 $('#updateBtn').on('click',function(){
 	var employees={
	 		name:$('#inputFirstName').val(),
	 		age: $('#inputAge').val(),
	 		gender:$('#select').val(),
	 		company:$('#inputCompany').val(),
	 		email:$('#inputEmail').val(),
	 		phone:$('#inputNo').val()
	 		
 		};

 	var tbody=table.find('tbody');
	//validation
    // to check validation of  email address
	function isValidEmailAddress(emailAddress) 
	{
		var pattern =(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
		return pattern.test(emailAddress);
	}
	var flag=isValidEmailAddress(employees.email);

	if(employees.phone.length==0 || employees.name.length==0 || employees.age.length==0 || employees.gender.length==0 || employees.company.length==0 || employees.email.length==0)
	{
		alert("Mandatory to fill all fields");
	}
	else if(employees.name.length==0 || (!(isNaN(employees.name))))
	{
		alert("Please write a valid  name");
	}
	else if(employees.age.length==0)
	{
		alert("Please fill your age");
	}
	else if(employees.age<0||employees.age>100)
	{
		alert("Please enter correct age");
	}
	else if(!(isNaN(employees.gender)))
	{
		alert("Please fill your gender");
	}
	else if(!(isNaN(employees.company)))
	{
		alert("Please enter your company name");
	}
	else if(employees.email.length==0 )
	{
		alert("Please enter your email address");
	}
	else if((!(flag)))
	{
		alert("Email address is not valid");
	}
	else if(employees.phone.length==0||employees.phone.length!=10)
	{
		alert("Please enter correct mobile number");
	}
	else if(!$.trim($('#inputFirstName').val()).match(/^[a-zA-Z ]+$/))
	{
		alert("Name can only have characters");
	}
	else if(!(($('#select').val()==="male")||($('#select').val()==="female")||($('#select').val()==="Male")||($('#select').val()==="Female")||($('#select').val()==="MALE")||($('#select').val()==="FEMALE")))
	{
		alert("Incorrect Gender");
	}
	else if($.trim($('#inputNo').val()).match(/^[a-zA-Z]+$/)||(!$.trim($('#inputNo').val()).match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)))
	{
		alert("Phone No. takes only digits");
	}
	else
	{	
		$('#header').show();
		$('.click').show();
	 	viewAll.show();
		$.ajax({
			type:'PATCH',
			url:'http://localhost:3000/data/'+id,
			dataType:'JSON',
			data:employees,
			success:function(data)
			{
				tbody.empty();
				record(data);	
				alert('employee data updated successfully');
				$('#iModal').modal('hide');
			},//end success
			error:function()
			{
				alert('error updating employee data');
			}//end error
		});//end of ajax
	}//end of else
  });//end of update button function
});//end of edit function

var start=0;
var end =20;
$(window).scroll(function()
{
  if($(window).scrollTop() == $(document).height() - $(window).height())
  {
      $.ajax({      
	      url: 'http://localhost:3000/data?_start='+(start+20)+'&_end='+(end+20),
	      success: function(html)
	      {
	        start = start+20;
       		end = end+20;	
	          if(html)
	          {
	              $("#page").append(html);
	              $(html).each(function(index,html)  
	              {
	                  table.append('<tr>'+'<td>'+html.id+'</td>'+'<td>'+html.name+'</td>'+'<td>'+html.age+'</td>'+'<td>'+html.gender+'</td>'+'<td>'+html.company+'</td>'+'<td>'+html.email+'</td>'+'<td>'+html.phone+'</td>'+'<td><button data-id='+html.id+' class="edit"><span class="glyphicon glyphicon-edit"></span></button>'+'<button data-id='+html.id+' class="remove"><span class="glyphicon glyphicon-trash"></span></button></td>'+'</tr>').addClass("table-responsive");
	              });
	          }//end if
	          else
	          {
	            $('div#scroll').html('<center>No more posts to show.</center>');
          	  }//end of else
          }//end success
      });//end of ajax
  }//end of if
});//end of scroll function
});//end of document ready function