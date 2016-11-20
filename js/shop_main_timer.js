var data=document.getElementsByClassName("se1_timer")[0].getElementsByTagName("span");
var zhekou=document.getElementsByClassName("se2_timer")[0].getElementsByTagName("span");

var date=new Date();
var now=date.getTime();
var otherDay=Date.parse("Nov 20,2016");
var cha=parseInt((otherDay-now)/1000);
var day=parseInt(cha/3600/24);
var hour=(cha/3600)%24;
var minute=(cha/60)%60;
var second=cha%60;

var zhekouotherDay=new Date("November 18,2016 20:59:59");
var zhekouotherTimer=zhekouotherDay.getTime();
var zhekoucha=parseInt((zhekouotherTimer-now)/1000);
var zhekouhour=(zhekoucha/3600)%24;
var zhekouminute=(zhekoucha/60)%60;
var zhekousecond=zhekoucha%60;

var timer=setInterval(function(){
	date=new Date();
	now=date.getTime();
	cha=parseInt((otherDay-now)/1000);
	day=parseInt(cha/3600/24);
	hour=parseInt((cha/3600)%24);
	minute=parseInt((cha/60)%60);
	second=parseInt(cha%60);
	if(cha==0){
		clearInterval(cha);
	}
	data[0].innerText=day.toString().length==2?day:"0"+day;
	data[1].innerText=hour.toString().length==2?hour:"0"+hour;
	data[2].innerText=minute.toString().length==2?minute:"0"+minute;
	data[3].innerText=second.toString().length==2?second:"0"+second;
	
	zhekoucha=parseInt((zhekouotherTimer-now)/1000);
	zhekouhour=parseInt((zhekoucha/3600)%24);
	zhekouminute=parseInt((zhekoucha/60)%60);
	zhekousecond=parseInt(zhekoucha%60);
	zhekou[0].innerText=zhekouhour.toString().length==2?zhekouhour:"0"+zhekouhour;
	zhekou[1].innerText=zhekouminute.toString().length==2?zhekouminute:"0"+zhekouminute;
	zhekou[2].innerText=zhekousecond.toString().length==2?zhekousecond:"0"+zhekousecond;
},1000);


