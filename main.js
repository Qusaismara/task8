function addfontsize(){
document.querySelector("div").style.fontSize =" 40px ";

}
function subfontsize(){
    document.querySelector("div").style.fontSize =" 10px ";
    
    }


document.querySelector(".add").onclick = addfontsize;
document.querySelector(".sub").onclick = subfontsize;