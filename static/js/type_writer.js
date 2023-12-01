var i = 0;
var txt = 'Want to work with top students at zero cost?';

var txtList = txt.split('');
console.log(txtList);
var speed = 65;


function typeWriter() {
  if (i < txt.length) {
    if ((i >= 18 && i <= 29) || (i >= 34 && i <= 42)){
      document.getElementById("typewrite").innerHTML += txt.charAt(i).bold();
    } else {
        document.getElementById("typewrite").innerHTML += txt.charAt(i);
    }
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter()
