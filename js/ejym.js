$(document).ready(function(){
	var p8iNow=0;
	$('#p8lefthide').click(function(){
		if(p8iNow%2==0){
			$('#p8left').animate({left:-21.3+'rem'});
			$('#p8right').animate({left:0});
			$(this).css({backgroundImage:'url(./img/p8hide1.png)',right:-1.25+'rem'});
		}else{
			$('#p8left').animate({left:0});
			$('#p8right').animate({left:21.3+'rem'});
			$(this).css({backgroundImage:'url(./img/p8hide.png)',right:0});
		}
		p8iNow++;
	});

	// 获取新闻列表
	$('#navbox li').on('click',function(){
		if($(this).index()==0)return;
		$('#navbox').css({display:'none'});
		$('#p8cont').css({display:'none'});
		$('#navcont').css({display:'block'});
		$('#navcont ul').eq($(this).index()-1).css({display:'block'});
	});
	$('#p8btnback').on('click',function(){
		$('#navbox').css({display:'block'});
		$('#p8cont').css({display:'block'});
		$('#navcont').css({display:'none'});
		$('#navcont ul').css({display:'none'});
	});
});