
var req = new XMLHttpRequest();
req.open('GET','https://jsonplaceholder.typicode.com/users');
req.send();
req.onload = function(){
   
 // console.log(this.response)
var idValue = JSON.parse(this.response);
    for(let i=0;i<idValue.length;i++){
        console.log("ID VALUE IS:"+" "+idValue[i].id);
    }
}