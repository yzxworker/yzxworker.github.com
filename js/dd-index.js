'use strict'
window.onload=function(){
	var oUl=document.getElementById('nav');
	var aLi=oUl.getElementsByTagName('li');
	var oDiv=document.getElementById('xl');
	var oDiv1=document.getElementById('xxk1');
	var oUl1=document.getElementById('m1b-l');
	var aLi1=oUl1.getElementsByTagName('li');
	var aLi2=getByClass(oUl1,'mb-xxk');
	var oDiv1=document.getElementById('xxk1');
	var aDiv=getByClass(oDiv1,'clearfix');
	for(var i=0;i<aLi2.length;i++){
		aLi2[i].index=i;
		aDiv[i].index=i;
		addEvent(aLi2[i],'mouseover',show1);
		addEvent(aLi2[i],'mouseout',hide1);
		addEvent(aDiv[i],'mouseover',show1);
		addEvent(aDiv[i],'mouseout',hide1);
	}

	for(var i=0;i<aLi.length;i++){
		addEvent(aLi[i],'mouseover',show);
		addEvent(aLi[i],'mouseout',hide);
	}
	addEvent(oDiv,'mouseover',show);
	addEvent(oDiv,'mouseout',hide);
	addEvent(oDiv,'mouseover',changecolor);
	addEvent(oDiv,'mouseout',recolor);
	

	var oP=document.getElementById('p1');
	var oI=document.getElementById('xl-i');
	addEvent(oP,'click',function(){
		var str='';
		str=oI.innerHTML;
		oI.innerHTML=oP.innerHTML;
		oP.innerHTML=str;
		
	});
	
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
	
	var oH3=document.getElementById('m1-t-h3');
	var oDwxxk=document.getElementById('dwxxk');
	addEvent(oH3,'mouseover',function(){
		var oCh=this.children[0];
		oCh.style.background='url(img/bj36.png) no-repeat 0 0';
		oDwxxk.style.display='block';
	});
	addEvent(oH3,'mouseout',function(){
		var oCh=this.children[0];
		oCh.style.background='';
		oDwxxk.style.display='none';
	});
	addEvent(oDwxxk,'mouseover',function(){
		var oCh=oH3.children[0];
		oCh.style.background='url(img/bj36.png) no-repeat 0 0';
		oDwxxk.style.display='block';
	});
	addEvent(oDwxxk,'mouseout',function(){
		var oCh=oH3.children[0];
		oCh.style.background='';
		oDwxxk.style.display='none';
	});
	
	var oDd=document.getElementById('homepagel');
	var aAdD=oDd.getElementsByTagName('a');
	for(var i=1;i<aAdD.length;i++){
		addEvent(aAdD[i],'mouseover',ddover);
	}
	function ddover(){
		for(var i=1;i<aAdD.length;i++){
			aAdD[i].className='';
		}
		this.className='tivea';
	}
	//删除订单
	var oUlhome=document.getElementById('home-ul');
	var aAhome=getByClass(oUlhome,'removehome');
	for(var i=0;i<aAhome.length;i++){
		addEvent(aAhome[i],'click',function(){
			var oPar=this.parentNode;
			oPar=oPar.parentNode;
			oUlhome.removeChild(oPar);
		});
	}
	
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


