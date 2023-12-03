window.onload = function(){
    let tema  = document.querySelectorAll(".tema").item(0);
    let mask  = document.querySelectorAll(".mask").item(0);
    let title = document.querySelectorAll(".title").item(0);
    let logo  = document.querySelectorAll(".logo").item(0);
    let copy  = document.querySelectorAll(".copy").item(0);
    let menu  = document.getElementById("menu");
    let menuItens   = document.getElementById("menuItens");
    let menuClose   = document.getElementById("menuClose");
    let iconesRede  = document.querySelectorAll(".redes svg");
    let itens  = document.querySelectorAll("#menuItens li");

    let claro = true;
    
    tema.onclick = function(){
      
      mask.classList.toggle("invert");
      title.classList.toggle("colorWhite");
      logo.classList.toggle("colorWhite");
      copy.classList.toggle("colorWhite");

      if(claro){
        tema.src = "img/sol.png";
        iconesRede.forEach(element => {
          element.style.fill = "rgb(255,255,255)";
        });
        itens.forEach(element => {
          element.style.background = "#fff";
          element.style.color = "#000";
        });
        menu.style.fill = "#fff";
        menuClose.style.fill = "#fff";
        menuItens.style.background = "#000";
        claro = false;
      } else {
        tema.src = "img/lua.png";
        iconesRede.forEach(element => {
          element.style.fill = "rgb(0,0,0)";
        });
        itens.forEach(element => {
          element.style.background = "#000";
          element.style.color = "#fff";
        });
        menu.style.fill = "#000";
        menuClose.style.fill = "#000";
        menuItens.style.background = "#fff";
        claro = true;
      }    
    }    
    menu.addEventListener("click",()=>{
      menuItens.style.left = "0%"
    })
    menuClose.addEventListener("click",()=>{
      menuItens.style.left = "-100%"
    })
    itens.forEach(element =>{
      element.onmouseover = () => {
        element.style.background = "orangered";
        element.style.color = "#000";
      }
      element.onmouseout = () => {
        
        if(claro){
          
          element.style.background = "#000";
          element.style.color = "#fff";
        
        } else {

          element.style.background = "#fff";
          element.style.color = "#000";
        
        }
      }
    })
}
