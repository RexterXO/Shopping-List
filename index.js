var button = document.getElementById('enter');
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function Childapp(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

button.addEventListener("click",function(){
	if(input.value.length > 0){
	Childapp();
}
})
input.addEventListener("keypress",function(event){
	if(input.value.length > 0 && event.keyCode===13){
	Childapp();
}
})
function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
}


ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}




