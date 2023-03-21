const form = document.getElementById("cos-form");

function myTimer() {
    var paragraph = document.getElementById("my-paragraph");
    paragraph.innerHTML += "<span>Hi</span>";
  }
  
  setInterval(myTimer, 1000);