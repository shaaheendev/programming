let i = 0;
function myFunction() {
				i++;
     document.getElementById("menOp").classList.toggle("bash");
   } 
 function myAddFunction() { 
 				i++;
     document.getElementById("addCon").classList.toggle("bash"); 
   } 
   /*function myCover() { 
     document.getElementById("coverPage").classList.toggle("bash"); 
   }*/ 
   //experiment
window.onclick = () =>  { 
     if (!event.target.matches('.btn, .menu-button, .line, .menu, .menu-content, a, .options, .add-button, .op-button, .sub-add, .add-page, label, input') && i !== 0) {
           i = 0;
           document.getElementById("menOp").classList.remove('bash');
     				  document.getElementById("addCon").classList.remove("bash"); 
       } 
     }
/*   function rmvFunc() { 
     document.getElementById("addCon").classList.remove("bash"); 
   }
window.onclick
= function(event1) { 
     if (!event1.target.matches('.btn-add')) { 
       var dropdownsAdd = document.getElementsByClassName("add-page",); 
       var j; 
       for (j = 0; j < dropdownsAdd.length; j++) { 
         var openDropdownAdd = dropdownsAdd[j]; 
         if (openDropdownAdd.classList.contains('bash')) { 
           openDropdownAdd.classList.remove('bash'); 
         } 
       } 
     } 
   } */
