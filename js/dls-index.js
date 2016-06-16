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
	
	//营业执照
	var oDyyzz=document.getElementById('spsdr-d');
	var aSyyzz=getByClass(oDyyzz,'yyzzfj');
	var aByyzz=getByClass(oDyyzz,'yyzz');
	var timer=null;
	for(var i=0;i<aSyyzz.length;i++){
		aSyyzz[i].index=i;
		addEvent(aSyyzz[i],'mouseover',function(){
			var s1=this.index;
			clearTimeout(timer);
			timer=setTimeout(function(){
				for(var i=0;i<aByyzz.length;i++){
				aByyzz[i].style.display='none';
				}
				aByyzz[s1].style.display='block';
			},1000);
			
		});
		addEvent(aSyyzz[i],'mouseout',function(){
			var s1=this.index;
			clearTimeout(timer);
			timer=setTimeout(function(){
				aByyzz[s1].style.display='none';
			},1000);
			
		});
	}
	
	//展开剩下的
	var oUltg=document.getElementById('tging-ul');
	var oSpantg=document.getElementById('tgxs');
	addEvent(oSpantg,'click',function(){
		oUltg.style.height='666px';
		this.style.display='none';
	});
	//菜单轮播
	var oUlLb=document.getElementById('yrzs');
	var oSpanLb=document.getElementById('cookyj');
	var timer2=null;
	var sb=0;
	addEvent(oSpanLb,'click',function(){
		clearInterval(timer2);
		timer2=setInterval(function(){
			if(sb==-700){
				clearInterval(timer2);
			}else if(sb==-1400){
				sb=0;
				clearInterval(timer2);
			}
			oUlLb.style.left=sb+'px';
			sb-=10;
		},10);
	});
	
	//展开文字
	var oAzK=document.getElementById('zk');
	var oSpanZk=document.getElementById('zkwi');
	addEvent(oAzK,'click',function(){
		if(oAzK.innerHTML=='展开'){
			oAzK.innerHTML='收起';
			oSpanZk.className='dlsspan';
		}else{
			oAzK.innerHTML='展开';
			oSpanZk.className='';
		}
	});
	
	//消费评价
	var oDdXfpj=document.getElementById('xfpj-dl-dd');
	var aDchild=oDdXfpj.children;
	for(var i=0;i<aDchild.length;i++){
		addEvent(aDchild[i],'mouseover',function(){
			if(this.className=='active'||this.className=='active1')return;
			if(this.tagName=='SPAN'){
				this.className='show1';
			}else{
				this.className='show';
			}
		});
		addEvent(aDchild[i],'mouseout',function(){
			if(this.className=='active'||this.className=='active1')return;
			if(this.tagName=='SPAN'){
				this.className='';
			}else{
				this.className='';
			}
		});
		addEvent(aDchild[i],'click',function(){
			for(var i=0;i<aDchild.length;i++){
				aDchild[i].className='';
			}
			if(this.tagName=='SPAN'){
				this.className='active1';
			}else{
				this.className='active';
			}
			
		});
	}
	
	//评论图片
	var oUlplfj=document.getElementById('xfpj-ul');
	var aEmpl=oUlplfj.getElementsByTagName('b');
	for(var i=0;i<aEmpl.length;i++){
		addEvent(aEmpl[i],'mouseover',function(){
			this.className='active';
		});
		addEvent(aEmpl[i],'mouseout',function(){
			this.className='';
		});
	}
	//右侧选项卡
	var oUlxxk=document.getElementById('capr-t');
	var aUlchild=oUlxxk.children;
	var oDivXxk=document.getElementById('capr-b');
	var aDivChild=oDivXxk.children;
	for(var i=0;i<aUlchild.length;i++){
		aUlchild[i].index=i;
		addEvent(aUlchild[i],'click',function(){
			for(var i=0;i<aUlchild.length;i++ ){
				aUlchild[i].className='';
				aDivChild[i].className='';
			}
			this.className='on';
			aDivChild[this.index].className='show';
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


