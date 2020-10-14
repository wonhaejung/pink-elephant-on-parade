	$(document).ready(function	()	{

			
		

		

		var circle_left =10;
		var circle_top =50;
		var add_number_left =1.5;
		var add_number_top =1;
		var height_change =5;
		setInterval(function(){

				var window_width= $(window).width();
				var window_height=$(window).height();
				var circle_position_left = $(".circle2").offset().left;
				var circle_position_top = $(".circle2").offset().top;

				if(circle_position_left > window_width -500){
					add_number_left = -add_number_left;
				}

				if(circle_position_left < 0){
					add_number_left= -add_number_left;
				}

				if(circle_position_top > window_height -500){
					add_number_top = -add_number_top;
				}

				if(circle_position_top < 0){
					add_number_top=-add_number_top;
				}

				if(circle_position_top< 0){
					$(".circle2").css("height","300px");
				}

				circle_left =circle_left + add_number_left;
				circle_top =circle_top + add_number_top;
				$(".circle2").css("left",circle_left)
				$(".circle2").css("top",circle_top)
				// console.log ($(".circle2").offset().left);
			},8)


    	var circle_left2 =10;
		var circle_top2 =10;
		var add_number_left2 =0.5;
		var add_number_top2 =1;
		setInterval(function(){

				var window_width2= $(window).width();
				var window_height2=$(window).height();
				var circle_position_left2 = $(".circle3").offset().left;
				var circle_position_top2 = $(".circle3").offset().top;

				if(circle_position_left2 > window_width2 -500){
					add_number_left2 = -add_number_left2;
				}

				if(circle_position_left2 < 0){
					add_number_left2= -add_number_left2;
				}

				if(circle_position_top2 > window_height2 -500){
					add_number_top2 = -add_number_top2;
				}

				if(circle_position_top2 < 0){
					add_number_top2=-add_number_top2;
				}

				circle_left2 =circle_left2 + add_number_left2;
				circle_top2 =circle_top2 + add_number_top2;
				$(".circle3").css("left",circle_left2)
				$(".circle3").css("top",circle_top2)
				// console.log ($(".circle2").offset().left);
			},8)

		var circle_left1 =10;
		var circle_top1 =10;
		var add_number_left1 =0.5;
		var add_number_top1 =1;
		setInterval(function(){

				var window_width1= $(window).width();
				var window_height1=$(window).height();
				var circle_position_left1 = $(".circle").offset().left;
				var circle_position_top1 = $(".circle").offset().top;

				if(circle_position_left1 > window_width1 -350){
					add_number_left1 = -add_number_left1;
				}

				if(circle_position_left1 < 0){
					add_number_left1= -add_number_left1;
				}

				if(circle_position_top1 > window_height1 -350){
					add_number_top1 = -add_number_top1;
				}

				if(circle_position_top1 < 0){
					add_number_top1=-add_number_top1;
				}

				circle_left1 =circle_left1 + add_number_left1;
				circle_top1 =circle_top1 + add_number_top1;
				$(".circle").css("left",circle_left1)
				$(".circle").css("top",circle_top1)
				// console.log ($(".circle2").offset().left);
			},8)


	})

	// 동그라미가 맨 오른쪽에 붙으면 왼쪽으로 가야한다 
	//동그라미가 맨 왼쪽으로 붙으면 다시 오른쪽으로 가야한다.
	//맨 오른쪽, 왼쪽의 넓이와,원의 위치 좌표가 필요하다. 

	 // $(".circle2").offset().left 

	 // 원이 맨 오른쪽에 도착했는지 알아보자!