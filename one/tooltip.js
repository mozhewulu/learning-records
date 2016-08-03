var toolTipBoxClass="tooltip-box";
function showToolTip(obj, id, html, width, height){
  if(document.getElementById(id)==null){
    var toolTipBox;
    toolTipBox = document.createElement("div")
    toolTipBox.className="tooltip-box";
    toolTipBox.id=id;
    toolTipBox.innerHTML=html;
    obj.appendChild(toolTipBox)
    obj.onmouseleave=function(){
      document.getElementsById('id').style.display="none";
    }
  }
  else{
    document.getElementById('id').style.display="block";
  }
}
var t1 = document,getElementById("tooltip1");
t1.onmouseenter = function(){
  showToolTip(this,"t1","asdasda",200)
}
