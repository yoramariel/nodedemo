

function printInTwoSec(message) {
    setTimeout(function(){
        console.log(message);
    },3000);   

console.log('hello world');
}
printInTwoSec('Delayed')
