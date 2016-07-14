$(document).ready(function(){
	$('#dowebok').fullpage({
	});
	setInterval(function(){
  	  $.fn.fullpage.moveSlideRight();
    }, 3000);
	

	var p1iNow=0;
	$('#navbtn').on('click',function(){
		if(p1iNow%2==0){
			$('#headnav-min').animate({right:0+'rem'});
		}else{
			$('#headnav-min').animate({right:-15+'rem'});
		}
		p1iNow++;
	});
	$('.fp-prev').css({opacity:0});
	$('.fp-next').css({opacity:0});

	// 导航栏
	$('#zynavbar').css({width:$('#headnav li').eq(0).outerWidth()});
	
	$('#headnav li').on('click',function(){
		$('#zynavbar').animate({left:$(this).position().left,width:$(this).outerWidth()});
	});
	$('#headnav-min li').on('click',function(){
		$('#headnav-min li a').css({background:'#ccc'});
		$(this).find('a').css({background:'#21d4b6'});
	});




	






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


	// zyl
	
	$('.page6 .zt-1 li').click(function(){
		var re1;
		var re2;
		var x=$('.page6 .zt-1 li').length;
		$('.zt-2').css('display','block');
		$('.page6 .zt-1 li a').css('background','rgba(0,214,178,0.3)');
		$('.page6 .zt-1 li a').eq($(this).index()).css('background','rgba(0,214,178,1)');
		
		if($(this).index()==0 || $(this).index()==x-1){
			$('.page6 .yf').css('display','none');
		}else if($(this).index()==1){
			$('.page6 .yf').css('display','block');
			$('.page6 .yf .show').css('display','none');
		}else{
			$('.page6 .yf').css('display','block');
			$('.page6 .yf .show').css('display','block');
		}
		
		$('.page6 .zt-2 .by li').click(function(){
			re1=$(this).index();
			$('.page6 .zt-2 .by li a').css('background','rgba(0,214,178,0.3)');
			$('.page6 .box .yf li a').css('background','rgba(0,214,178,0.3)');
			$('.page6 .zt-2 .by li a').eq($(this).index()).css('background','rgba(0,214,178,1)');
		});
		
		
		$('.page6 .zt-2 .box .yf li').click(function(){
			$('.page6 .box .yf li a').css('background','rgba(0,214,178,0.3)');
			$('.page6 .box .yf li a').eq($(this).index()).css('background','rgba(0,214,178,1)');
		});
		
		$('.page6 .zt-2 li a').css('background','rgba(0,214,178,0.3)');
		$('.page6 .box .yf li a').css('background','rgba(0,214,178,0.3)');
	});




	// js
	$('.p3-introduce-img li').mouseenter(function(){
		$('.p3-introduce-img li').removeClass('active');
		$('.p3-introduce li').removeClass('show');
		$('.p3-introduce li').eq($(this).index()).addClass('show');
		$(this).addClass('active');
	});
	
	$('.p5-left p').click(function(){
		$('.p5-left p').removeClass('active');
		$(this).addClass('active');
		$('.p5-right div').removeClass('show');
		$('.p5-right div').eq($(this).index()).addClass('show');
	});
	
	
	
	function toSwiper(){
		var ch=document.documentElement.clientWidth||document.body.clientWidth;
		if(ch<768){
			new Swiper('.swiper-container',{
					paginationClickable:true,
					loop:true,
					preventClicks:true
				});
		}
	}
	
    var	oSwicss=$('.swicss');
    var oSwijs=$('.swijs');
    var ch1=0;
    function reSwiper(){
		ch1=document.documentElement.clientWidth||document.body.clientWidth;
		if(ch1<767){
			$('.swicss').attr('href','./css/swiper.min.css');
			$('.swijs').attr('src','swiper.min.js');
			toSwiper();
		}else{
			$('.swicss').attr('href','');
			$('.swijs').attr('src','');
		}
    }
    reSwiper();
	$(window).resize(function(){
		reSwiper();
	});
	
});

