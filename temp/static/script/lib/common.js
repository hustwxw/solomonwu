(function() {

	//loading控制函数
    var loading = (function(){

    	var show = function(){
    		$(".chart_content").html([
    			'<div id="loading" style="transform:scale(0.8)">',
				'	<div class="loadEffect">',
				'	        <span></span>',
				'	        <span></span>',
				'	        <span></span>',
				'	        <span></span>',
				'	        <span></span>',
				'	        <span></span>',
				'	        <span></span>',
				'	        <span></span>',
				'	</div>',
				'</div>'
    		].join(''));
    	};

    	var hide = function(){
    		$(".chart_content").html('');
    	};

    	return {
    		show : show,
    		hide : hide
    	}

    })();

    var adapter = function() {
        $("html").css({
            "font-size": (screen.width / 375) * 16 + "px"
        });

        if($('body').height() < $(window).height()){
            $('body').height($(window).height());
        }
    };

    var footer = function() {
        $('.wrap').height($(window).height() - $("footer").outerHeight());

        adapter();

        $('footer>div').on('click',function(){
            if($(this).index() == 1 && location.href.indexOf('nav.html') == -1){
                location = "nav.html";
            }
        });

        if(location.href.indexOf('nav.html') > -1){
            $('footer>div:eq(1)').addClass('hover');
        }
    };

    var yearNav = function(callback){
        var tmpl = [
            '<div class="year_select">',
            '    <span class="left active"></span>',
            '    <span class="icon none" data-year="2015">2015</span>',
            '    <span class="icon none" data-year="2016">2016</span>',
            '    <span class="icon" data-year="2017">2017</span>',
            '    <span class="right"></span>',
            '</div>'
        ].join("");

        $(".chart_content").before(tmpl);

        $("body").delegate(".year_select .left,.year_select .right",'click', function() {
            var _this = $(this);
            //只有激活态才可用
            if (_this.hasClass('active')) {
                //左边
                if (_this.hasClass("left")) {
                    var cur = $(".year_select").find('.icon:not(.none)');
                    if (cur.prev().hasClass("icon")) {
                        cur.addClass('none').prev().removeClass('none');
                    }
                    callback && callback($(".triangle:visible").parent().data('id'),$(".year_select").find('.icon:not(.none)').data('year'));
                }
                //右边
                if (_this.hasClass("right")) {
                    var cur = $(".year_select").find('.icon:not(.none)');
                    if (cur.next().hasClass("icon")) {
                        cur.addClass('none').next().removeClass('none');
                    }
                    callback && callback($(".triangle:visible").parent().data('id'),$(".year_select").find('.icon:not(.none)').data('year'));
                }
                //
                var cur = $(".year_select").find('.icon:not(.none)');
                var left = $(".year_select .left");
                var right = $(".year_select .right");
                if(cur.prev().hasClass("icon")){
                    left.addClass("active");
                }
                if(cur.next().hasClass("icon")){
                    right.addClass("active");
                }
                if(!cur.prev().hasClass("icon")){
                    left.removeClass("active");
                }
                if(!cur.next().hasClass("icon")){
                    right.removeClass("active");
                }

            }
        });
    };

    var init = function() {
        $(document).ready(function() {
            footer();

            $(window).on('resize', footer);

        });

        window.loading = loading;   

        window.yearNav = yearNav;     

    };

    init();

    if (location.href.indexOf("debugger") > -1) {
        alert(JSON.stringify({
            'screen.width': screen.width,
            'screen.height': screen.height,
            'devicePixelRatio': devicePixelRatio,
            'ua':navigator.userAgent
        }))
    }

})()