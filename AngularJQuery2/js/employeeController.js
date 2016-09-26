angular.module('myApp')
.controller('myCtrl', function($scope,employeeFactory) {
	$scope.pageno=1;
	$scope.total_count=0;
	$scope.itemsPerPage=10;
	$scope.getData=function(pageno)
	{	
		var promise=employeeFactory(pageno);
        promise.then(function(details){
            $scope.total_count=details.total_count;
			$scope.details = details.data;		
		});//end promise
	}	
	$scope.getData($scope.pageno);
});//end myCtrl

angular.module('myApp')	
.controller('idCtrl',function(myFactory,$stateParams,$scope)
{
	// alert("hii i m in id controller");
	var promise=myFactory($stateParams.empid);
	promise.then(function(details)
	{
		$scope.details =details[0];
	});//end promise
});//end idCtrl

angular.module('myApp')
.controller('addCtrl',['$scope','addFactory' ,function($scope,addFactory)
{ 
    $scope.addFunction = function()
    {
        var adder = {
            name : $scope.name,
            age : $scope.age,
            gender : $scope.gender,
            company : $scope.company,
            email:$scope.email,
            phone:$scope.phone
        };

    var promise=addFactory(adder);
    promise.then(function(details)
    {
        $scope.details=details;
        alert("successfully added with id :"+$scope.details.id);
    });//end promise
   }//end scope  db
}]);//end  add details
//---------------------
// ---------------------
// angular.module('myApp')
// .controller('myCtrl', function($scope,employeeFactory,deleteFactory,$mdDialog,$mdToast,$document)
// {
//     $scope.pageno=1;
//     $scope.total_count=0;
//     $scope.itemsPerPage=10;
//     $scope.getData=function(pageno)
//     {   
//         var promise=employeeFactory(pageno);
//         promise.then(function(details){
//             $scope.total_count=details.total_count;
//             $scope.details = details.data;      
//         });//end promise
//     }   
//     $scope.getData($scope.pageno);

//     $scope.showConfirm = function(ev,x) {
//     var confirm = $mdDialog.confirm()
//           .title('Would you like to delete ?')
//           .textContent('All the details of the employee will be deleted.')
//           .ariaLabel('delete')
//           .targetEvent(ev)
//           .ok('Yes')
//           .cancel('No');

//     $mdDialog.show(confirm).then(function()
//      {
//         $scope.status = 'You decided to delete employee details.';
//           var promise=deleteFactory(x.id);
//           promise.then(function(details)
//           {
//               $scope.details.splice($scope.details.indexOf(x),1);
//           });//end promise

//       }, 
//       function()
//        {
//           $scope.status = 'You decided to keep employee details.';
//         });
//   };
// });
// angular.module('myApp') 
// .controller('idCtrl',function(myFactory,deleteFactory,$stateParams,$scope,$mdDialog,$mdToast,$document)
// {
//   var promise=myFactory($stateParams.empid);
//   promise.then(function(details)
//   {
//     $scope.details =details[0];
//   });//end promise
//     $scope.showConfirm = function(ev,x) {
//     var confirm = $mdDialog.confirm()
//           .title('Would you like to delete ?')
//           .textContent('All the details of the employee will be deleted.')
//           .ariaLabel('delete')
//           .targetEvent(ev)
//           .ok('Yes')
//           .cancel('No');

//     $mdDialog.show(confirm).then(function() {
//       $scope.status = 'You decided to delete employee details.';
//         deleteFactory($stateParams.empid);
//          $mdToast.show(
//             $mdToast.simple()
//                 .textContent('Employee Details of Employee Id:'+$stateParams.empid+' deleted Successfully  !!')                       
//                 .hideDelay(8000)
//                 );
//     }, function() {
//       $scope.status = 'You decided to keep employee details.';
//     });
//   };
// });//end idCtrl

// angular.module('myApp')
// .controller('addCtrl',function($scope,addFactory,$mdToast,$document)
// { 
//     $scope.addFunction = function()
//     {
//           var adder = {
//             name : $scope.name,
//             age : $scope.age,
//             gender : $scope.gender,
//             company : $scope.company,
//             email:$scope.email,
//             phone:$scope.phone
//         };

//     var promise=addFactory(adder);
//     promise.then(function(details)
//     {
//         $scope.details=details;
//         //alert("successfully added with id :"+$scope.details.id);
//           $mdToast.show(
//             $mdToast.simple()
//                 .textContent('Employee Details Added Successfully with Employee Id:'+$scope.details.id)                       
//                 .hideDelay(8000)
//           );
//     });//end promise
//    }//end scope  addFunction
// });//end  add details

// angular.module('myApp')
// //edit details
// .controller('editCtrl',['$scope','$stateParams','editFactory','saveFactory','$mdToast','$document',function($scope,$stateParams,editFactory,saveFactory,$mdToast,$document)
// { 
//     $scope.id = $stateParams.id;
//     var  id = $scope.id;
//     // console.log(id);
//     var promise=editFactory($stateParams.id);
//     promise.then(function(data)
//     {
//         $scope.myEdit=data;
//         // console.log($scope.myEdit.name);
//         $scope.name= $scope.myEdit.name;
//         $scope.age= $scope.myEdit.age;
//         $scope.gender= $scope.myEdit.gender;
//         $scope.company= $scope.myEdit.company;
//         $scope.email=$scope.myEdit.email;
//         $scope.phone=$scope.myEdit.phone;
//     });//end promise
//     $scope.save = function()
//     {
//        // console.log($stateParams.id);
//         var saveDetails = {
//             id : $scope.id,
//             name : $scope.name,
//             age : $scope.age,
//             gender : $scope.gender,
//             company : $scope.company,
//             email:$scope.email,
//             phone:$scope.phone
//         };
        
//         var promise=saveFactory(saveDetails,$stateParams.id);
//         promise.then(function(details)
//         {
//             $scope.changes = details;
//             //console.log($scope.changes);
//             $mdToast.show(
//             $mdToast.simple()
//                 .textContent('Employee Details of Employee Id:'+ $stateParams.id + ' Updated Successfully !!')                       
//                 .hideDelay(8000)
//           );
//         });
//     }// end save function
// }]);//end  edit details
