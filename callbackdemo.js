var request= require('request');

module.exports=function(location,callback){

   var encodedLocation = encodeURIComponent(location);
var url='http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation +
'&appid=b3aaa0b3323c0baab93aff38f75b44cb&units=Imperial';

// call request object to make rest call
if(!location){
   console.log('no location provided');
}
request({
 url: url,
 json:true
},function(error , response , body){

   if(error){
       console.log('unable to fetch weather');
   } else {
       console.log('city data ' + body.main.temp + ' in ' + body.name);
   }

});

 
}