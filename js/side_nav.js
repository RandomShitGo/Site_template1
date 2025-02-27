function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  var modal = document.getElementById('myModal');


var img = document.getElementsByClassName('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var showModal = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

for (var i = 0; i < img.length; i++) {
    img[i].addEventListener('click', showModal);
}


var span = document.getElementsByClassName("close")[0];


span.onclick = function() { 
    modal.style.display = "none";
}

