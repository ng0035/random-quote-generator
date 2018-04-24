function welcome(){
  alert("Welcome to my random quote generator!!");
}
function gen(){
  var x;
  var qa = new Array(5);
  qa[0] = "Don’t wait. The time will never be just right.-Napoleon Hill";
  qa[1] = 
 "If not us, who? If not now, when? -John F. Kennedy";
  qa[2] = "Everything you can imagine is real.-Pablo Picasso";
  qa[3] = "Turn your wounds into wisdom. -Oprah Winfrey";
  qa[4] = "Wherever you go, go with all your heart.-Confucius";
x = Math.floor(Math.random()*4);
var node = document.getElementById("white");
    node.innerHTML = "<br>"+"<p>" + qa[x+1] + "</p>";
}
