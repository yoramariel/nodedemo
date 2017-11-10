/* function doWorkPromise(data){
    return new Promise(function(resolve , reject){
 
        setTimeout(function() {
            reject(' somethig is broken');
        },1000);
    reject({
        error: 'something bad happened'
    });
    });
}
doWorkPromise('some data').then(function(data){
    console.log(data);
},function(error){
    console.log(error);
}) */
 
var request = require('request');

function getWeather(location){
return new Promise(function (resolve,reject){
    var encodedLocation = encodeURIComponent(location);
    var url ='http://api.openweathermap.org/data/2.5/weather?q=' +encodedLocation +'&appid=b3aaa0b3323c0baab93aff38f75b44cb&units=metric';

    if(!location){
        return reject('no location provided');
    }
    request({
       url: url,
       json:true
     },function(error , response , body){
      
         if(error){
            reject('unable to fetch weather');
         } else {
             resolve('city data' + body.main.temp + 'in ' + body.name);
         }
      
     });
      
    
   });
}