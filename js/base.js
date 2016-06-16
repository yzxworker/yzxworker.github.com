'use strict'
//事件绑定
function addEvent(obj,sEv,fn){
	if(obj.attachEvent){
		obj.attachEvent('on'+sEv,fn);
	}else{
		obj.addEventListener(sEv,fn,false);
	}
}
//解除事件绑定
function removeEvent(obj,sEv,fn){
	if(obj.detachEvent){
		obj.detachEvent('on'+sEv,fn);
	}else{
		obj.removeEventListener(sEv,fn,false);
	}
}
//通过class名获取
function getByClass(obj,sName){
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(sName);
	}else{
		var aEle=obj.getElementsByTagName('*');
		var aRe=[];
		for(var i=0;i<aEle.length;i++){
			var aClass=aEle[i].className.split(' ');
			if(findInArr(aClass,sName)){
				aRe.push(aEle[i]);
			}
		}
		return aEle;
	}
}
//数组找重
function findInArr(arr,sName){
	for(var i=0;i<arr.length;i++){
		if(arr[i]==sName){
			return true;
		}
	}
	return false;
}
//双位
function toDou(iNum){
	return iNum<10?'0'+iNum:''+iNum;
}
