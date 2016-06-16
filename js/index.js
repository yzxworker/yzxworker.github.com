'use strict'
window.onload=function(){
	var oUl=document.getElementById('nav');
	var aLi=oUl.getElementsByTagName('li');
	var oSpan=document.getElementById('con');
	var oDiv=document.getElementById('xl');
	var oUl1=document.getElementById('m1b-l');
	var aLi1=oUl1.getElementsByTagName('li');
	var aLi2=getByClass(oUl1,'mb-xxk');
	var oDiv1=document.getElementById('xxk1');
	var aDiv=getByClass(oDiv1,'clearfix');
	
	for(var i=0;i<aLi.length;i++){
		addEvent(aLi[i],'mouseover',show);
		addEvent(aLi[i],'mouseout',hide);
	}
	addEvent(oSpan,'click',gghide);
	addEvent(oDiv,'mouseover',show);
	addEvent(oDiv,'mouseout',hide);
	addEvent(oDiv,'mouseover',changecolor);
	addEvent(oDiv,'mouseout',recolor);
	
	for(var i=0;i<aLi2.length;i++){
		aLi2[i].index=i;
		aDiv[i].index=i;
		addEvent(aLi2[i],'mouseover',show1);
		addEvent(aLi2[i],'mouseout',hide1);
		addEvent(aDiv[i],'mouseover',show1);
		addEvent(aDiv[i],'mouseout',hide1);
	}
	
	function show1(){
		aLi2[this.index].style.borderRight='1px solid #fff';
		aLi2[this.index].style.width='225px';
		aLi2[this.index].style.zIndex='3';
		oDiv1.style.display='block';
		aLi2[this.index].style.background='#fff';
		aLi2[this.index].style.margin=0;
		aLi2[this.index].style.padding='0 10px';
		aDiv[this.index].style.display='block';
		var oSpan=aLi2[this.index].getElementsByTagName('span')[0];
		var oEm=aLi2[this.index].getElementsByTagName('em')[0];
	
	
		if(oSpan){
			oSpan.style.right='31px'
		}
		if(oEm){
			oEm.style.display='none';
		}
   	}
	function hide1(){
		aLi2[this.index].style.background='';
		aLi2[this.index].style.borderRight='none';
		aLi2[this.index].style.margin='0 10px';
		aLi2[this.index].style.padding=0;
		aLi2[this.index].style.width='';
		oDiv1.style.display='none';
		aDiv[this.index].style.display='none';
		var oSpan=aLi2[this.index].getElementsByTagName('span')[0];
		var oEm=aLi2[this.index].getElementsByTagName('em')[0];
	
		if(oSpan){
			oSpan.style.right='20px'
		}
		if(oEm){
			oEm.style.display='block';
		}
	}
	var oLi=document.getElementById('li');
	addEvent(oLi,'mouseover',changecolor1);
	addEvent(oLi,'mouseout',recolor1);
	
	var oUl3=document.getElementById('f-ul');
	var aLi3=oUl3.getElementsByTagName('li');
	var oDiv2=document.getElementById('f-d1');
	var aUl=oDiv2.getElementsByTagName('ul');
	for(var i=0;i<aLi3.length;i++){
		aLi3[i].index=i;
		addEvent(aLi3[i],'click',function(){
			for(var i=0;i<aLi3.length;i++){
				aLi3[i].className='';
				aUl[i].className='clearfix';
			}
			this.className='active';
			aUl[this.index].className='show clearfix';
		});
	}
	var oP=document.getElementById('p1');
	var oI=document.getElementById('xl-i');
	addEvent(oP,'click',function(){
		var str='';
		str=oI.innerHTML;
		oI.innerHTML=oP.innerHTML;
		oP.innerHTML=str;
		
	});
	var oDjs=document.getElementById('djs');
	var oI1=oDjs.getElementsByTagName('i');
	var timer=null;
	var num=7000;
	clearInterval(timer);
	function tick(){
		var h=Math.floor(num/3600);
		
		var m=Math.floor(num%3600/60);
		var s=num%3600%60;
		var str=toDou(h)+toDou(m)+toDou(s);
		for(var i=0;i<oI1.length;i++){
			oI1[i].innerHTML=str.charAt(i);
		}
		num--;
		if(num<0){
			clearInterval(timer);
		}
	}
	tick();
	timer=setInterval(tick,1000);
	
	
	var oDiv01=document.getElementById('m1bm-b');
	var oDiv02=document.getElementById('xxk-zdbf');
	var oSpan01=document.getElementById('xxk-span1');
	var oSpan02=document.getElementById('xxk-span2');
	var sub=0;
	var sub1=1;
	var timer2=null;
	addEvent(oDiv01,'mouseover',function(){
		oSpan01.style.display='block';
		oSpan02.style.display='block';
		oSpan02.innerHTML=sub1+'/'+6;
		clearInterval(timer2);
	});
	addEvent(oDiv01,'mouseout',function(){
		oSpan01.style.display='none';
		oSpan02.style.display='none';
		timer2=setInterval(function(){
		sub-=689
		sub1++;
		if(sub<-3445){
			sub=0;
			sub1=1;
		}
		oDiv02.style.left=sub+'px';
		oSpan02.innerHTML=sub1+'/'+6;
	},5000);
	});
	addEvent(oSpan02,'click',function(){
		sub-=689
		sub1++;
		if(sub<-3445){
			sub=0;
			sub1=1
		}
		oDiv02.style.left=sub+'px';
		oSpan02.innerHTML=sub1+'/'+6;
	});
	addEvent(oSpan01,'click',function(){
		sub+=689
		sub1--;
		if(sub>0){
			sub=-3445;
			sub1=6;
		}
		oDiv02.style.left=sub+'px';
		oSpan02.innerHTML=sub1+'/'+6;
	});
	clearInterval(timer2);
	timer2=setInterval(function(){
		sub-=689
		sub1++;
		if(sub<-3445){
			sub=0;
			sub1=1;
		}
		oDiv02.style.left=sub+'px';
		oSpan02.innerHTML=sub1+'/'+6;
	},5000);
	
};

function show(){
	var oDiv=this.getElementsByTagName('div')[0];
	var oSpan=this.getElementsByTagName('span')[0];
	var oCh=this.children[0];
	
	if(oDiv){
		oDiv.style.display='block';
		this.style.background='#fff';
		this.style.borderRight='1px solid #dddddd';
		this.style.borderLeft='1px solid #dddddd';
		oCh.style.borderBottom='1px solid #fff';
		oCh.style.zIndex=2;
	}
	if(oSpan){
		oSpan.className='active';
	}
}
function hide(){
	var oDiv=this.getElementsByTagName('div')[0];
	var oSpan=this.getElementsByTagName('span')[0];
	var oCh=this.children[0];
	
	if(oDiv){
		this.style.background='';
		this.style.borderRight='1px solid #f9f9f9';
		this.style.borderLeft='1px solid #f9f9f9';
		oDiv.style.display='none';
		oCh.style.borderBottom='none';
		oCh.style.zIndex=2;
	}
	if(oSpan){
		oSpan.className='';
	}
}
function gghide(){
	var oPar=this.parentNode;
	oPar.style.display='none';
}
function changecolor(){
	this.style.background='#f9f9f9';
}
function recolor(){
	this.style.background='';
}

function changecolor1(){
	this.style.background='#fff';
	this.style.margin=0;
	this.style.padding='0 10px';
}
function recolor1(){
	this.style.background='';
	this.style.margin='0 10px';
	this.style.padding=0;
}


