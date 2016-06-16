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
	
	//分类
	var oDivFl=document.getElementById('flnav');
	var oSpanFl=getByClass(oDivFl,'ms-seach');
	var oSpanFlTxt=getByClass(oDivFl,'ms-seach-span1');
	function xs(){
		var oDiv=this.getElementsByTagName('div')[0];
		oDiv.style.display='block';
		var num=this.index;
		oSpanFlTxt[num].className='ms-seach-span1 active';
		var aA=oDiv.children;
		for(var i=0;i<aA.length;i++){
			addEvent(aA[i],'click',function(){
				for(var i=0;i<aA.length;i++){
					aA[i].className='';
				}
				var arr1=oSpanFlTxt[num].innerHTML.split(':');
				oSpanFlTxt[num].innerHTML=arr1[0]+':'+this.innerHTML+'<b></b>';
				this.className='active2';
				oDiv.style.display='none';
			});
		}
	}
	function yc(){
		var oDiv=this.getElementsByTagName('div')[0];
		oDiv.style.display='none';
		oSpanFlTxt[this.index].className='ms-seach-span1';
	}
	var oDivFlKj=document.getElementById('xxflkj');
	var aChild=oDivFlKj.children;
	var aAfL=oDivFlKj.getElementsByTagName('a');
	var arr=[];
	for(var i=0;i<aAfL.length;i++){
		addEvent(aAfL[i],'click',function(){
			this.className='active2';
			var oPar=this.parentNode;
			oPar=oPar.parentNode;
			var oSpan=document.createElement('span');
			var oI=document.createElement('i');
			oI.className='fljt';
			oSpan.className='ms-seach clearfix';
			oSpan.innerHTML='<span class="ms-seach-span1">'+oPar.children[0].innerHTML+this.innerHTML+'<b></b></span><a href="javascript:;" class="ms-seach-a"></a><div class="ms-seach-div clearfix">'+oPar.children[1].innerHTML+'</div>';
			oDivFl.appendChild(oI);
			oDivFl.appendChild(oSpan);
			oPar.style.display='none';
			for(var i=0;i<aChild.length;i++){
				if(aChild[i]==oPar){
					arr.push(i);
				}
			}
			var aAshanChu=document.getElementsByClassName('ms-seach-a');
			var oSpanFl=getByClass(oDivFl,'ms-seach');
			for(var i=0;i<oSpanFl.length;i++){
				oSpanFl[i].index=i;
				addEvent(oSpanFl[i],'mouseover',xs);
				addEvent(oSpanFl[i],'mouseout',yc);
				aAshanChu[i].index=i;
				addEvent(aAshanChu[i],'click',scbq);
			}
		});
		addEvent(aAfL[i],'mouseover',function(){
			for(var i=0;i<aAfL.length;i++){
				aAfL[i].className='';
			}
			this.className='active1';
		});
	}
	
	function scbq(){
		var oPar=this.parentNode;
		var oPre=oPar.previousElementSibling||oPar.previousSibling;
		oDivFl.removeChild(oPar);
		oDivFl.removeChild(oPre);
		var s=arr[this.index];
		aChild[s].style.display='block';
		var aAshanChu=document.getElementsByClassName('ms-seach-a');
		var oSpanFl=getByClass(oDivFl,'ms-seach');
		for(var i=0;i<oSpanFl.length;i++){
			oSpanFl[i].index=i;
			addEvent(oSpanFl[i],'mouseover',xs);
			addEvent(oSpanFl[i],'mouseout',yc);
			
		}
		if(this.index=0){
			arr=[];
		}
	}
	
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


