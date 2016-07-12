$(document).ready(function(){
    $('#dowebok').fullpage({
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90']
    });

	setInterval(function(){
  	  $.fn.fullpage.moveSlideRight();
    }, 3000);






    //page2选项卡
    $('#new_btn li ').on('click',function(){
    	$('#new_btn li').removeClass('active');
    	$('#new_text ul li').removeClass('show');
		$(this).addClass('active');
		$('#new_text ul li').eq($(this).index()).addClass('show');

    })
    //page2文章滚动函数
   var aP2new_box= $('.page-content2 .new-text li .new-box');
   var aP2btn= $('.new-text li .btn-box');

   var aP2history= $('.new-text li .new-box .history');
   var aP2presentation= $('.new-text li .new-box .presentation');
   var aP2new_list= $('.new-text li .new-box .new-overflow dl');

   	p2wheel(aP2new_box[0],aP2presentation[0]);
	p2wheel(aP2new_box[1],aP2history[0]);
	// console.log(aP2btn[0],aP2new_list[0]);
	// p2wheel(aP2btn[0],aP2new_list[0]);

	
	function p2wheel(obj,obj2){
		var p2num=0;
		var oT=obj.getElementsByClassName('top')[0]||obj.getElementsByClassName('prev')[0];
		var oB=obj.getElementsByClassName('bottom')[0]||obj.getElementsByClassName('next')[0];
		var cW=document.documentElement.clientWidth||document.body.clientWidth;
		 //  obj.num=obj.offsetHeight-obj2.offsetHeight;
		 // console.log(obj.offsetHeight,obj2.offsetHeight);
		 if(cW<768){
		 	oT.addEventListener("touchstart",function(){
			obj.num=obj.offsetHeight-obj2.offsetHeight;
					
					p2num-=10;
					if (p2num<obj.num) {
						p2num=obj.num;
					}
					obj2.style.top=p2num+'px';
				
			},false);

			oB.addEventListener("touchstart",function(){
				obj.num=obj.offsetHeight-obj2.offsetHeight;
				
					p2num+=10;
					if (p2num>0) {
						p2num=0
					}
					obj2.style.top=p2num+'px';

				
			},false);
		 }else{

			oT.onmouseover=function(){
				clearInterval(obj.timer);
				// console.log(obj.offsetHeight,obj2.offsetHeight,obj.num);
				obj.num=obj.offsetHeight-obj2.offsetHeight;
				obj.timer=setInterval(function(){
					p2num-=3;
					if (p2num<obj.num) {
						p2num=obj.num;
						clearInterval(obj.timer);
					}
					obj2.style.top=p2num+'px';

				},30);
			};
			oB.onmouseover=function(){
				clearInterval(obj.timer);
				obj.timer=setInterval(function(){
					p2num+=3;
					if (p2num>0) {
						p2num=0
						clearInterval(obj.timer);
					}
					obj2.style.top=p2num+'px';

				},30);
			};
			obj.onmouseout=function(){
				clearInterval(obj.timer);
			};
		 }

	}

	var inow=0;
    p2wheelnew(aP2btn[0],aP2new_list[0]);
	function p2wheelnew(obj,obj2){
		var p2num=0;
		var oT=obj.getElementsByClassName('prev')[0];
		var oB=obj.getElementsByClassName('next')[0];
		
		
		console.log(inow);
		 	oT.addEventListener("touchstart",function(){
			obj.num=obj.offsetHeight-obj2.offsetHeight;
			inow=aP2new_list[0].children[0].offsetHeight;		
					p2num+=inow;
					if (p2num>0) {
						p2num=0
					}
					obj2.style.marginTop=p2num+'px';
				
			},false);

			oB.addEventListener("touchstart",function(){
				obj.num=obj.offsetHeight-obj2.offsetHeight;
				inow=aP2new_list[0].children[0].offsetHeight;
					
					p2num-=inow;
					if (p2num<obj.num) {
						p2num=obj.num;
						return;
					}
					obj2.style.marginTop=p2num+'px';
				
			},false);
		}

	//地图
	
	var oP7region=$('.contact-con .region-box .region');
	var oP7region_show=$('.contact-con .region-search .region-show');
	var oP7width=oP7region[0].offsetWidth;
	var oP7height=oP7region[0].offsetHeight;
	
	$(window).resize(function(){
        fnmap();
        p2wheel(aP2new_box[0],aP2presentation[0]);
	p2wheel(aP2new_box[1],aP2history[0]);
    });
	fnmap();
	function fnmap (){

		oP7width=oP7region[0].offsetWidth;
		oP7height=oP7region[0].offsetHeight;

	
		$('#ChinaMap6').SVGMap({
			    mapName: 'china',
			    mapWidth: oP7width,
			    mapHeight: oP7height,
			    hoverCallback: function(stateData, obj){
			        $('#ClickCallback').html('hover:'+obj.name);
			        console.log(obj.name);
			        if(obj.name=='陕西'){
			        	$('.contact-con .region-search .region-show').css('display','block');
			        }else{
			        	$('.contact-con .region-search .region-show').css('display','none');	
			        }
			    }
		});
	};

});