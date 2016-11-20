mui.init();
//获取按钮
var allSelect=document.getElementsByClassName("my_select");
var topSelect=document.getElementById("top_select");
var bottomSelect=document.getElementById("bottom_select");
//获取单价
var danjia=document.getElementsByClassName("jiage");
//获取商品数量
var shuliang=document.getElementsByClassName("shuliang");
//总价
var total=0;
var zongjia=document.getElementById("zongjia");
//商品总量
var zongshu=document.getElementById("zongshu");
//全选标志
var panduan=false;
function quanxuan(){
	if(panduan==false){
		for(var i=0;i<allSelect.length;i++){
			allSelect[i].setAttribute("src","../img/shop_gouwuche/20160627174757_WkrcE.png");
			if(i<4){
				total+=danjia[i].getAttribute("data-jiage")*shuliang[i].innerText;
			}
			panduan=true;
		}
		zongjia.innerText="￥"+total;
		zongshu.innerText="4";
		total=0;
	}
	else{
		for(var i=0;i<allSelect.length;i++){
			allSelect[i].setAttribute("src","../img/shop_gouwuche/20160627174700_H38yY.png");
			panduan=false;
		}
		zongjia.innerText="￥0.00";
		zongshu.innerText="0";
	}
	
}
topSelect.addEventListener("tap",quanxuan);
bottomSelect.addEventListener("tap",quanxuan);
//单选
for(var i=1;i<allSelect.length-1;i++){
	allSelect[i].addEventListener("tap",function())
}
