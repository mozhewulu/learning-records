function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}
window.onload=function(){
  var lis=$('fruit-n').getElementsByTagName('li'),
      divs=$('fruit-i').getElementsByTagName('div');

  for(var i=0;i<lis.length;i++){
    lis[i].value=i;
    lis[i].onclick=function(){
      for(var j=0;j<lis.length;j++){
        divs[j].style.display="none";
      }
        divs[this.value].style.display='block';
    }
  }
}
