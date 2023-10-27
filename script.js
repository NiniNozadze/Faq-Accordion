const downArrow=document.querySelectorAll(".down");
const sameClass=document.querySelectorAll(".same")

downArrow.forEach(function(element){
    element.addEventListener("click",function(){
        if( element.parentElement.parentElement.parentElement.children[1].style.display!="block"){
            hideAllAnswers()
            element.parentElement.parentElement.parentElement.children[1].style.display="block";
            element.style.transform= "rotate(180deg)";
            element.parentElement.parentElement.style.fontWeight="700"
        }else{
            element.parentElement.parentElement.parentElement.children[1].style.display="none";
            element.style.transform= "rotate(0deg)";  
            element.parentElement.parentElement.parentElement.children[0].style.fontWeight="400";
        }
    })
});
function hideAllAnswers() {
    downArrow.forEach(function(element){
        element.parentElement.parentElement.parentElement.children[1].style.display="none";
        element.parentElement.parentElement.parentElement.children[0].style.fontWeight="400";
        element.style.transform= "rotate(0deg)";  
    })  
  }
  


