function foot() {

var author = ["Jakub Gałan"];
var year = new Date();


var x = document.getElementById("foot").innerHTML = 'All rights reserved © '+ year.getFullYear() + " " + author;
x;
console.log(year.getFullYear());

}
