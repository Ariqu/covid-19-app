function title() {
  var deaths_wrld = document.getElementById("deaths").textContent;
  var titles = ["COVID-19 Aplikacja", "Koronawirus Aplikacja", "Aplikacja do pokazu zagrożenia koronawirusem", "COVID-19 APP",deaths_wrld, "· CORONAVIRUS ·", "· ZOSTAŃ W DOMU! ·", "#zostańwdomu", "#stayathome!"];



  var random=  Math.floor((Math.random() * titles.length));
  var randomName=titles[random];
    console.log(randomName);
  var html_title = document.getElementsByTagName("title")[0].innerHTML = randomName;






}
