const readline = require('readline');
const fs = require('fs');

var header =[];
var jsonData=[];
var tempData={};
var isHeader=true;
var flag=false;
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
   // isHeader=false;
	   else
	    {
	 	  	if(!(lineRecords[header.indexOf('Country Name')].split("\"")[1]=='European Union'))
	 	  	{
		 			if([header[i]]=='Country Name')
		 			tempData[header[i]]=lineRecords[i].split("\"")[1];
					if ([header[i]]=='Population (Millions) - 2013')
					{
					 	tempData[header[i]]=lineRecords[i].split("\"")[1];
					}
					flag=true;
			}	
		else
			flag=false;
		}

    }		 
 
	if(flag)
	{
		jsonData.push(tempData);
	 	fs.writeFileSync("json/populationByCountry.json",JSON.stringify(jsonData),encoding="utf8");
 	}
 	tempData={};
 	
	isHeader=false;
});