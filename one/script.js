function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}
window.onload=function(){
  var lis=$('fruit-n').getElementsByTagName('a');
      divs=$('fruit-i').getElementsByTagName('div');
		  tips=$('demo').getElementsByTagName('a');

	for(var i=0;i<lis.length;i++){
    lis[i].id=i;
    lis[i].onclick=function(){
      for(var j=0;j<lis.length;j++){
        divs[j].style.display="none";
      }
        this.className='select'
        divs[this.id].style.display='block';
    }
  }
	for(var k=0; k<tips.length; k++){
            tips[k].onmouseover=function(){
                var top = this.offsetTop;
                    left = this.offsetLeft;
                    title = this.innerHTML;
                    box = document.createElement("div");
                    box.className = "box";
                    box.style.left = left+"px";
                    box.style.top = top+35+"px";
                    box.innerHTML = "<iframe src='http://baike.baidu.com/search?word="+title+"&enc=utf8'></iframe>";
                    demo.appendChild(box);
            }

            tips[k].onmouseleave=function(){
                demo.removeChild(demo.lastChild);
            }
        }
}
