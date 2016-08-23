const readline = require('readline');
const fs = require('fs');
var flag=false;
var header =[];
var jsonData=[];
var tempData={};
var isHeader=true;
const rl = readline.createInterface({
  input: fs.createReadStream('population.csv')
});

rl.on('line', function(line) {
 var lineRecords= line.trim().split(",");

 for(var i=0;i<lineRecords.length;i++)
 { 
	 if(isHeader)
	 {		
		 header[i]=lineRecords[i].split("\"")[1];
     }
	 else
	 {
	 	if(!(lineRecords[header.indexOf('Country Name')].split("\"")[1]=='European Union'))
 	  	{
		 	 tempData[header[i]]=lineRecords[i].split("\"")[1];
		 	 flag=true;
		 }
		 else
		 {
		 	flag=false;
		 }	 
	}		 
}

 		if(flag){
	jsonData.push(tempData);
 	fs.writeFileSync("json/population.json",JSON.stringify(jsonData),encoding="utf8");
 	}
 	tempData={};
 	
	isHeader=false;
});