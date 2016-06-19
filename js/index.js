'use strict'

DOMReady(function(){
	// body背景图自动更换
	var timer1=null;
	var bjnum=1;
	var oBody=document.body;
	timer1=setInterval(function(){
		oBody.style.backgroundImage='url(../yzxworker/images/zpbj'+(bjnum%2+1)+'.jpg)';
		bjnum++;
	},5000);
	// 底部菜单
	var oApplemenu=document.getElementById('applemenu');
	var aImg=oApplemenu.getElementsByTagName('img');
	document.onmousemove=function(ev){
		var oEvent=ev||event;
		for(var i=0; i<aImg.length; i++){
			var oImgX=aImg[i].offsetLeft+aImg[i].offsetWidth/2+oApplemenu.offsetLeft-oEvent.clientX;
			var oImgY=aImg[i].offsetTop+aImg[i].offsetHeight/2+oApplemenu.offsetTop-oEvent.clientY;
			var scale=1-Math.sqrt(oImgX*oImgX+oImgY*oImgY)/250;
			if(scale<0.5)scale=0.5;
			aImg[i].style.width=scale*128+'px';
		}
	};

	// 底部轮播
	var oContent=document.getElementById('content');
	var oMainbox=document.getElementById('mainbox');
	var aMainChild=oMainbox.children;
	var iNum=0;
	window.onresize=function(){
		size();
	}
	size();
	for(var i=0; i<aImg.length; i++){
		aImg[i].index=i;
		aImg[i].onclick=function(){
			iNum=this.index;
			tab(iNum);
		};
	}
	function size(){
		for(var i=0; i<aMainChild.length; i++){
			aMainChild[i].style.width=oContent.offsetWidth+'px';
			aMainChild[i].style.height=oContent.offsetHeight+'px';
		}
		oMainbox.style.width=oContent.offsetWidth*aMainChild.length+'px';
		oMainbox.style.height=oContent.offsetHeight+'px';
		tab(iNum);
	}
	function tab(index){
		for(var i=0; i<aImg.length; i++){
			aImg[i].className='';
		}
		aImg[index].className='black';
		Move(oMainbox,{left:-index*aMainChild[0].offsetWidth});
	}

	// 作品
	var oWorks=document.getElementById('works');
	var oWorksChild=oWorks.children;
	for(var i=0;i<oWorksChild.length;i++){
		oWorksChild[i].style.width=oWorks.offsetHeight+'px';
		oWorksChild[i].style.marginLeft=-oWorks.offsetHeight/2+'px';
	}
	
	var oWorksPlay=document.getElementById('worksplay');
	var aWpDiv=getByClass(oWorksPlay,'wpdw');
	var aWpLi=oWorksPlay.children;
	var arrnum=[];
	var r=oWorksPlay.offsetWidth/2;
	var num=0;
	for(var i=0; i<aWpLi.length;i++){
		aWpLi[i].index=i;
		MyWorks(i);
	}
	function MyWorks(index){

		radiusMove(aWpLi[index],360/aWpLi.length*index,{complete:function(){
				aWpLi[num].style.backgroundImage='url(../yzxworker/images/zp'+num+'.jpg)';
				aWpLi[num].style.backgroundPosition='-'+(aWpLi[num].offsetLeft+oWorksPlay.offsetLeft-oWorksChild[num].offsetLeft)+'px -'+(aWpLi[num].offsetTop+oWorksPlay.offsetTop)+'px';
				aWpLi[num].style.transition='all 1s';
				num++;
				if(num>5){
					num=0;
				}
		}});
		var bOk=true;
		aWpLi[index].onmouseover=function(ev){
			var oEvent=ev||event;
			var oForm=oEvent.formElement||oEvent.relatedTarget;
			var _thisIndex=this.index;
			if(oForm && this.contains(oForm))return;
			for(var i=0;i<aWpLi.length;i++){
				if(i!=this.index){
					startMove(aWpLi[i],{opacity:0});
				}
			}

			oWorksChild[this.index].style.backgroundImage='url(../yzxworker/images/zp'+this.index+'.jpg)';
			startMove(oWorksChild[this.index],{opacity:1});
			startMove(aWpDiv[this.index],{top:aWpDiv[this.index].offsetHeight,opacity:0});
			this.className='active';
		};
		aWpLi[index].onmouseout=function(ev){
			var oEvent=ev||event;
			var oTo=oEvent.toElement||oEvent.relatedTarget;
			if(oTo && this.contains(oTo))return;
			for(var i=0;i<aWpLi.length;i++){
				startMove(aWpLi[i],{opacity:1});
			}
			startMove(oWorksChild[this.index],{opacity:0});
			startMove(aWpDiv[this.index],{top:0,opacity:1});
			this.className='';
		};
	}
	// 切换更多作品
	var morebtn=document.getElementById('morebtn');
	var oMoreworks=document.getElementById('moreworks');
	var j=0;
	morebtn.onclick=function(){
		for(var i=0; i<aWpLi.length;i++){
			aWpLi[i].style.transition='all 0s';
			aWpLi[i].onmouseover=null;
			aWpLi[i].onmouseout=null;
			radiusMove(aWpLi[i],0,{complete:function(){
				startMove(aWpLi[j],{opacity:0},{complete:function(){
					oWorksPlay.style.display='none';
					oMoreworks.style.display='block';
					startMove(oMoreworks,{opacity:1});
				}});
				j++;
				if(j==aWpLi.length){
					j=0;
				}
			}});
		}
	};
	// 关闭还原
	var oMwgb=document.getElementById('mwgb');
	oMwgb.onclick=function(){
		startMove(oMoreworks,{opacity:0},{complete:function(){
			oMoreworks.style.display='none';
			oWorksPlay.style.display='block';
			for(var i=0; i<aWpLi.length; i++){
				MyWorks(i);
				startMove(aWpLi[i],{opacity:1});
			}
		}});
	};



	// 定义圆周运动
	function radiusMove(obj,iTarget,json){
		json=json||{};
		var start=obj.iNow||0;
		var dis=iTarget-start;
		json.time=json.time||1000;
		var count=Math.floor(json.time/30);
		
		var n=0;
		clearInterval(obj.timer1);
		obj.timer1=setInterval(function (){
			n++;
			var a=1-n/count;
			var cur=start+dis*(1-Math.pow(a,3));
						
			var x=r-Math.cos(d2a(cur))*r; 		//角度
			var y=r+Math.sin(d2a(cur))*r;
			
			obj.style.left=y+'px';
			obj.style.top=x+'px';
			
			obj.iNow=cur;
			
			if(n==count){
				clearInterval(obj.timer1);
				json.complete&&json.complete();
			}
		},30);
	}
	function d2a(n){ 	//角度转弧度
	return n*Math.PI/180;
	}
	function a2d(n){		//弧度转角度
		return n*180/Math.PI;
	}


	// 自我介绍
	var oAMedot=document.getElementById('aMedot');
	var aLiMe=oAMedot.children; 
	var oAbMemain=document.getElementById('abMemain');
	var aDivMe=getByClass(oAbMemain,'abmelb');
	// 初始化
	for(var i=0;i<aDivMe.length;i++){
		var oChild1=aDivMe[i].children[0];
		var oChild2=aDivMe[i].children[1];
		oChild1.style.left=-oChild1.offsetWidth+'px';
		oChild2.style.right=-oChild2.offsetWidth+'px';
	}
	startMove(aDivMe[0].children[0],{left:0});
	startMove(aDivMe[0].children[1],{right:0});
	startMove(aDivMe[0],{opacity:1});
	var wheelnum=0;
	var bOk1=true;
	// 添加滚轮事件
	addWheel(oAbMemain,function(dir){
		if(bOk1){
			bOk1=false;
			var dir=dir
			var oChildM1=aDivMe[wheelnum].children[0];
			var oChildM2=aDivMe[wheelnum].children[1];
			startMove(oChildM1,{left:-oChildM1.offsetWidth},{duration:500});
			startMove(oChildM2,{right:-oChildM1.offsetWidth},{duration:500});
			startMove(aDivMe[wheelnum],{opacity:0},{duration:500,complete:function(){
				if(dir){
					wheelnum++;
					if(wheelnum==aDivMe.length){
						wheelnum=0;
					}
				}else{
					wheelnum--;
					if(wheelnum==-1){
						wheelnum=aDivMe.length-1;
					}
				}
				for(var i=0; i<aDivMe.length;i++){
					aDivMe[i].className='abmelb';
				}
				aDivMe[wheelnum].className='abmelb show';
				startMove(aLiMe[3],{top:aLiMe[wheelnum].offsetTop});
				var oChildM1=aDivMe[wheelnum].children[0];
				var oChildM2=aDivMe[wheelnum].children[1];
				startMove(oChildM1,{left:0});
				startMove(oChildM2,{right:0});
				startMove(aDivMe[wheelnum],{opacity:1},{complete:function(){
					bOk1=true;
				}});
			}});
		}
	});
	// 点击事件
	for(var i=0;i<aLiMe.length-1;i++){
		;(function(index){
			aLiMe[i].onclick=function(){

				var oChildM1=aDivMe[wheelnum].children[0];
				var oChildM2=aDivMe[wheelnum].children[1];
				startMove(oChildM1,{left:-oChildM1.offsetWidth},{duration:500});
				startMove(oChildM2,{right:-oChildM1.offsetWidth},{duration:500});
				startMove(aDivMe[wheelnum],{opacity:0},{duration:500,complete:function(){
					wheelnum=index;
					for(var i=0; i<aDivMe.length;i++){
						aDivMe[i].className='abmelb';
					}
					aDivMe[wheelnum].className='abmelb show';
					startMove(aLiMe[3],{top:aLiMe[wheelnum].offsetTop});
					var oChildM1=aDivMe[wheelnum].children[0];
					var oChildM2=aDivMe[wheelnum].children[1];
					startMove(oChildM1,{left:0});
					startMove(oChildM2,{right:0});
					startMove(aDivMe[wheelnum],{opacity:1},{complete:function(){
						bOk1=true;
					}});
				}});


			};
		})(i);
	}


	// 游戏
	var oGame=document.getElementById('game');
	var aAgame=oGame.children;
	var aDivGame=getByClass(oGame,'gametb');
	for(var i=0;i<aAgame.length;i++){
		;(function(index){
			aAgame[i].onmouseover=function(ev){
				var oEvent=ev||event;
				var oForm=oEvent.formElement||oEvent.relatedTarget;
				if(this.contains(oForm))return;
				aDivGame[index].style.transform='rotate(360deg)'
			}
		})(i);
		;(function(index){
			aAgame[i].onmouseout=function(ev){
				var oEvent=ev||event;
				var oTo=oEvent.toElement||oEvent.relatedTarget;
				if(this.contains(oTo))return;
				aDivGame[index].style.transform='rotate(0deg)'
			}
		})(i);
	}

});