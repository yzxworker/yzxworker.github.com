'use strict'
// 获取非行间样式
function getStyle(obj,name){
	return (obj.currentStyle||getComputedStyle(obj,false))[name];
}
// move框架
function startMove(obj,json,options){
	options=options||{};
	options.duration=options.duration||1000;
	options.easing=options.easing||'ease-out';
	var start={};
	var dis={};
	var count=Math.floor(options.duration/30);
	var n=0;
	for(var name in json){
		start[name]=parseInt(getStyle(obj,name));
		if(isNaN(start[name])){
			start[name]=1;
		}
		dis[name]=json[name]-start[name];
	}

	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		n++;
		for(var name in json){
			switch(options.easing){
				case 'linear':
					var cur=start[name]+dis[name]*n/count;
					break;
				case 'ease-in':
					var a=n/count;
					var cur=start[name]+dis[name]*Math.pow(a,3);
					break;
				case 'ease-out':
					var a=1-n/count;
					var cur=start[name]+dis[name]*(1-Math.pow(a,3));
					break;
			}
			if(name=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity='+cur*100+')';
				options.process&&options.process();
			}else{
				obj.style[name]=cur+'px';
				options.process&&options.process();
			}
		}
		if(n==count){
			clearInterval(obj.timer);
			options.complete&&options.complete();
		}
	},30);
}
// 事件绑定
function addEvent(obj,sEv,fn){
	if(obj.addEventListener){
		obj.addEventListener(sEv,fn,false);
	}else{
		obj.attachEvent('on'+sEv,fn);
	}
}
// ready事件
function DOMReady(fn){
	if(document.addEventListener){
		addEvent(document,'DOMContentLoaded',function (){
			fn();
		});
	}else{
		addEvent(document,'readystatechange',function (){
			if(document.readyState=='complete'){
				fn();
			};
		})
	}
}

// 滚轮事件
function addWheel(obj,fn){
	//2.判断滚轮滚动方向
	function fnDir(ev){
		//保存方向  下true  上false
		var bDir = true;
		var oEvent = ev||event;
		//判断浏览器用什么属性
		bDir = oEvent.wheelDelta?oEvent.wheelDelta<0:oEvent.detail>0;
		//执行函数,不一定有。要判断
		fn&&fn(bDir);
		//阻止默认事件
		//addEventListener用不了return false；
		oEvent.preventDefault&&oEvent.preventDefault();
		return false;
	}
	//1.判断浏览器是否是火狐
	if(window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){
		addEvent(obj,'DOMMouseScroll',fnDir);
	}else{
		addEvent(obj,'mousewheel',fnDir);
	}
}

// 通过className获取元素
function getByClass(obj,sName){
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(sName);
	}
	var aRe=[];
	var re=new RegExp('\\b'+sName+'\\b','g');
	var aEle=obj.getElementsByTagName('*');
	for(var i=0;i<aEle.length;i++){
		if(re.test(aEle[i].className)){
			aRe.push(aEle[i]);
		}
	}
	return aRe;
}