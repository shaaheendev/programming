function myFunction() {
    document.getElementById("menOp").classList.toggle("bash");
  }
function myAddFunction() {
    document.getElementById("addCon").classList.toggle("bash");
  }
  /*function myCover() {
    document.getElementById("coverPage").classList.toggle("bash");
  }*/
  //experiment
  window.onclick = function(event) {
    if (!event.target.matches('.btn-m', 'cover-page')) {
      var dropdowns = document.getElementsByClassName("menu-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('bash')) {
          openDropdown.classList.remove('bash');
        }
      }
    }
  }