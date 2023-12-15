var screen=document.querySelector(".expressions")
var buttons=document.querySelectorAll(".btn")
screen.value=""
buttons.forEach(function(button){
    button.addEventListener("click",function(){
        screen.value=screen.value+button.getAttribute("data")
        console.log(screen.value+"aaaa")
    })
})

function solve(){
    var expr=screen.value
    console.log(expr+"bbbb")
    var result=eval(expr)
    console.log(result+"cccc")
    screen.value=result
}
function clearData(){
    screen.value="0";
}

