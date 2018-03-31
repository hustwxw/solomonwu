(function(win) {
    //全局echart变量
    var gobalMychart1 = null;
    var mySwiper1 = null,
        mySwiper2 = null;
    //模板函数
    var getHtml = function() {
        return _.template.apply(this, arguments)(arguments[1]);
    };
    //动态计算左边导航栏和内容栏高度
    var compute = function() {

        if (navigator.userAgent.match(/mobile/i)) {

            document.documentElement.style.fontSize = document.documentElement.clientWidth / 20.48 + 'px';
            $('body').css({
                width: '20.48rem'
            });
        } else {
            // pc屏幕分辨率最大宽度-浏览器滚动条区域的宽度
            var _width = window.screen.availWidth - 17;
            var _height = window.screen.availHeight;

            if (_width > 1900) {
                document.documentElement.style.fontSize = _width / 20 + 'px';

            } else if (_width > 1580) {
                document.documentElement.style.fontSize = _width / 20.42 + 'px';

            } else if (_width > 1400) {
                document.documentElement.style.fontSize = _width / 19.3 + 'px';

            } else if (_width > 1344) {
                document.documentElement.style.fontSize = document.documentElement.clientWidth / 20 - 1 + 'px';
            } else if (_width > 1260) { //1280分辨率

                document.documentElement.style.fontSize = document.documentElement.clientWidth / 19 + 'px';
            } else { // 1280以下分辨率
                _width = 1280;
                document.documentElement.style.fontSize = document.documentElement.clientWidth / 12 + 'px';
            }
            $('body').css({
                width: _width
            });
            $('.top_head').css({
                width: _width
            });

        }
        window.onscroll = function() {

            var new_left = (0 - $(window).scrollLeft()) + 'px';
            $(".top_head").css({
                'left': new_left
            });

        }
        $(window).resize(function() {

            $("[echart-instance]").each(function(i, v) {

                echarts.getInstanceByDom(v).resize();
            });

        });
    }

    //事件函数
    var event = function() {
        $(".top_head .nav .child").on("mouseenter", function(e) {
            $(this).addClass('topOn');
            $(this).next().addClass('bNone');
        })
        $(".top_head .nav .child").on("mouseleave", function(e) {
            if ($(this).prev().hasClass("topClick")) {
                $(this).removeClass('topOn');
                $(this).prev().next().addClass("bNone")
            } else {
                $(this).removeClass('bNone').removeClass('topOn');
            }
            if ($(this).hasClass("topClick")) {
                $(this).next().addClass('bNone')
            } else {
                $(this).next().removeClass('bNone');
            }

        })
        $(".top_head .nav .child").on("click", function(e) {
            $(".top_head .nav .child").removeClass("topClick");
            $(".top_head .nav .child span").css({
                "border-left": "1px solid #999999"
            });
            $(this).prev().removeClass('bNone')

            $(".top_head .nav .child:first-child span").css({
                "border-left": "none"
            });
            $(this).addClass('topClick');

            $(this).next().find('span').css({
                "border": "none"
            });
        })
        $(".head_cover .t_nav").on("click", function() {
            $(".head_cover .t_nav").removeClass('t_on');
            $(this).addClass('t_on');
        });

        // 自动轮播
        var ele = $(".nTable .hidde .tbody").html();

        $(".nTable .hidde .tbody").append(ele);
        var bodytop = 0;
        var a = setInterval(function() {
            $(".nTable .tbody").css({
                top: bodytop--
            });
            if ((-bodytop + $(".nTable .tbody").height()) % 2 == 0) {
                $(".nTable .tbody").append(ele)
            }
        }, 100);
        $(".nTable .hidde").on('mouseenter', function() {
            clearInterval(a);

        });
        $(".nTable .hidde").on('mouseleave', function() {

            a = setInterval(function() {
                $(".nTable .tbody").css({
                    top: bodytop--
                });
                if ((-bodytop + $(".nTable .tbody").height()) % 2 == 0) {
                    $(".nTable .tbody").append(ele)
                }
            }, 100);
        });


    }
    // 收入
    var drawchart1 = function() {
        // 基于准备好的dom，初始化echarts实例
        var myChart1 = echarts.init(document.getElementById("income"));
        var $div = $("#income");

        // 指定图表的配置项和数据
        var option1 = {

            series: [{
                type: 'pie',
                radius: ['87%', '98%'],
                center: ['50%', '49.5%'],
                avoidLabelOverlap: false,
                hoverOffset: 0,
                animation: false,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    name: '完成当月预算',
                    value: 67.15,
                    itemStyle: {
                        normal: {
                            color: '#f3374b'
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            textStyle: {
                                color: '#333333',
                                fontSize: 16
                            },
                            formatter: function(params) {
                                var tmpl = [
                                    '<div class="echart_mark">',
                                    '   <span><%=data.data.value%>%</span>',
                                    '   <span><%=data.name%></span>',
                                    // '    <span class="mt">比上月同期</span>',
                                    // '    <div class="num_cover"><span class="num">90</span><span class="unit">%</span><img src="../images/statusArrowup.png" /></div>',
                                    '</div>'
                                ].join("");
                                $div.find(".echart_mark").remove();
                                $div.append(getHtml(tmpl, {
                                    data: params
                                }));

                                return '';
                            }
                        },

                    }
                }, {
                    name: '未完成预算',
                    value: 25,
                    itemStyle: {
                        normal: {
                            color: '#dcdcdc',
                            textStyle: {
                                color: '#000'
                            }
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            textStyle: {
                                color: '#000',
                                fontSize: 18
                            },
                            formatter: function(params) {
                                return '';
                            }
                        },

                    }
                }]
            }]
        };
        myChart1.setOption(option1);
    }
    // 利润
    var drawchart2 = function() {
        // 基于准备好的dom，初始化echarts实例
        var myChart1 = echarts.init(document.getElementById("profit"));
        var $div = $("#profit");

        // 指定图表的配置项和数据
        var option1 = {

            series: [{
                type: 'pie',
                radius: ['87%', '98%'],
                center: ['50%', '49.5%'],
                avoidLabelOverlap: false,
                animation: false,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    name: '完成当月预算',
                    value: 77.45,
                    itemStyle: {
                        normal: {
                            color: '#f3374b'
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            textStyle: {
                                color: '#333333',
                                fontSize: 16
                            },
                            formatter: function(params) {
                                var tmpl = [
                                    '<div class="echart_mark">',
                                    '   <span><%=data.data.value%>%</span>',
                                    '   <span><%=data.name%></span>',
                                    // '    <span class="mt">比上月同期</span>',
                                    // '    <div class="num_cover"><span class="num">90</span><span class="unit">%</span><img src="../images/statusArrowup.png" /></div>',
                                    '</div>'
                                ].join("");
                                $div.find(".echart_mark").remove();
                                $div.append(getHtml(tmpl, {
                                    data: params
                                }));

                                return '';
                            }
                        },

                    }
                }, {
                    name: '未完成预算',
                    value: 25,
                    itemStyle: {
                        normal: {
                            color: '#dcdcdc',
                            textStyle: {
                                color: '#000'
                            }
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            textStyle: {
                                color: '#000',
                                fontSize: 18
                            },
                            formatter: function(params) {
                                return '';
                            }
                        },

                    }
                }]
            }]
        };
        myChart1.setOption(option1);
    }
    // 净资产收益率
    var drawchart3 = function() {
        // 基于准备好的dom，初始化echarts实例
        var myChart1 = echarts.init(document.getElementById("gain"));
        var $div = $("#gain");

        // 指定图表的配置项和数据
        var option1 = {

            series: [{
                type: 'pie',
                radius: ['82%', '93%'],
                center: ['50%', '49.5%'],
                avoidLabelOverlap: false,
                animation: false,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    name: '',
                    value: 42.02,
                    itemStyle: {
                        normal: {
                            color: '#9bca38'
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            textStyle: {
                                color: '#333333',
                                fontSize: 16
                            },
                            formatter: function(params) {
                                var tmpl = [
                                    '<div class="echart_mark_two">',
                                    '   <span><%=data.data.value%>%</span>',
                                    // '   <span><%=data.name%></span>',
                                    // '    <span class="mt">比上月同期</span>',
                                    // '    <div class="num_cover"><span class="num">90</span><span class="unit">%</span><img src="../images/statusArrowup.png" /></div>',
                                    '</div>'
                                ].join("");
                                $div.find(".echart_mark_two").remove();
                                $div.append(getHtml(tmpl, {
                                    data: params
                                }));

                                return '';
                            }
                        },

                    }
                }, {
                    name: '',
                    value: 25,
                    itemStyle: {
                        normal: {
                            color: '#00b7ee',
                            textStyle: {
                                color: '#333'
                            }
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            textStyle: {
                                color: '#333',
                                fontSize: 18
                            },
                            formatter: function(params) {
                                return '';
                            }
                        },

                    }
                }]
            }]
        };
        myChart1.setOption(option1);
    }
    // 净资负债率
    var drawchart4 = function() {
        // 基于准备好的dom，初始化echarts实例
        var myChart1 = echarts.init(document.getElementById("liabilities"));
        var $div = $("#liabilities");

        // 指定图表的配置项和数据
        var option1 = {

            series: [{
                type: 'pie',
                radius: ['82%', '93%'],
                center: ['50%', '49.5%'],
                avoidLabelOverlap: false,
                animation: false,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    name: '',
                    value: 42.02,
                    itemStyle: {
                        normal: {
                            color: '#9bca38'
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            textStyle: {
                                color: '#333333',
                                fontSize: 16
                            },
                            formatter: function(params) {
                                var tmpl = [
                                    '<div class="echart_mark_two">',
                                    '   <span><%=data.data.value%>%</span>',
                                    // '   <span><%=data.name%></span>',
                                    // '    <span class="mt">比上月同期</span>',
                                    // '    <div class="num_cover"><span class="num">90</span><span class="unit">%</span><img src="../images/statusArrowup.png" /></div>',
                                    '</div>'
                                ].join("");
                                $div.find(".echart_mark_two").remove();
                                $div.append(getHtml(tmpl, {
                                    data: params
                                }));

                                return '';
                            }
                        },

                    }
                }, {
                    name: '',
                    value: 25,
                    itemStyle: {
                        normal: {
                            color: '#00b7ee',
                            textStyle: {
                                color: '#333'
                            }
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            textStyle: {
                                color: '#333',
                                fontSize: 18
                            },
                            formatter: function(params) {
                                return '';
                            }
                        },

                    }
                }]
            }]
        };
        myChart1.setOption(option1);
    }
    // 净资周转率
    var drawchart5 = function() {
        // 基于准备好的dom，初始化echarts实例
        var myChart1 = echarts.init(document.getElementById("turnover"));
        var $div = $("#turnover");

        // 指定图表的配置项和数据
        var option1 = {

            series: [{
                type: 'pie',
                radius: ['82%', '93%'],
                center: ['50%', '49.5%'],
                avoidLabelOverlap: false,
                animation: false,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    name: '',
                    value: 42.02,
                    itemStyle: {
                        normal: {
                            color: '#9bca38'
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            textStyle: {
                                color: '#333333',
                                fontSize: 16
                            },
                            formatter: function(params) {
                                var tmpl = [
                                    '<div class="echart_mark_two">',
                                    '   <span><%=data.data.value%>%</span>',
                                    // '   <span><%=data.name%></span>',
                                    // '    <span class="mt">比上月同期</span>',
                                    // '    <div class="num_cover"><span class="num">90</span><span class="unit">%</span><img src="../images/statusArrowup.png" /></div>',
                                    '</div>'
                                ].join("");
                                $div.find(".echart_mark_two").remove();
                                $div.append(getHtml(tmpl, {
                                    data: params
                                }));

                                return '';
                            }
                        },

                    }
                }, {
                    name: '',
                    value: 25,
                    itemStyle: {
                        normal: {
                            color: '#00b7ee',
                            textStyle: {
                                color: '#333'
                            }
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            textStyle: {
                                color: '#333',
                                fontSize: 18
                            },
                            formatter: function(params) {
                                return '';
                            }
                        },

                    }
                }]
            }]
        };
        myChart1.setOption(option1);
    }
    // 头寸仪表盘
    var drawchart6 = function(data) {
        // 基于准备好的dom，初始化echarts实例
        var myChart1 = echarts.init(document.getElementById("cash"));
        var $div = $("#cash");
        // 指定图表的配置项和数据
        var option1 = {
            series: [{
                type: 'gauge',
                min: 0,
                max: 3000,
                radius: "65%",
                splitNumber: 3,
                axisLine: {
                    // show: false,
                    lineStyle: {
                        width: 8,
                        color: [
                            [0.33, '#00b7ee'],
                            [0.66, '#f39800'],
                            [1, '#f3374b']
                        ]
                    }
                },
                axisTick: {
                    show: false,
                    "splitNumber": 1,
                    length: -15
                },
                splitLine: {
                    show: false,
                    length: 18,

                    lineStyle: {

                        width: 2
                    },
                },
                axisLabel: {
                    distance: -50,
                    show: true,
                    formatter: '{value}',
                    padding: [0, 0, 8, 5],
                    textStyle: {
                        fontSize: 12,
                        color: '#999999'
                    },
                },
                pointer: {
                    show: true,
                    length: '80%',
                    width: '3'
                },
                itemStyle: {
                    normal: {
                        borderWidth: 100,
                        borderType: 'solid',
                        color: "#707070"
                    }
                },
                detail: {
                    show: false,
                    formatter: '{value}亿元',
                    offsetCenter: [0, '120%'],
                    textStyle: {
                        // fontWeight: 'bold',
                        fontSize: 14,
                        color: "#f3374b"
                    }
                },
                data: [{
                    name: "",
                    value: data
                }]
            }]
        };
        myChart1.setOption(option1);
        var tmpl = [
            '<div class="echart_mark_gauge">',
            '   <div class="num_cover"><span class="num" style="color: #f3374b;"><%=data%></span><span class="unit num_red">亿元</span></div>',
            // '   <span><%=data.name%></span>',
            // '    <span class="mt">比上月同期</span>',
            // '    <div class="num_cover"><span class="num">90</span><span class="unit">%</span><img src="../images/statusArrowup.png" /></div>',
            '</div>'
        ].join("");
        $div.find(".echart_mark_gauge").remove();
        $div.append(getHtml(tmpl, {
            data: data
        }));


    }
    var scrollBar = function() {

        if (navigator.userAgent.match(/mobile/i)) {
            $(".marvel").mCustomScrollbar({
                set_height: "1.85rem",
                mouseWheel: true

            });
            // $(".content_4").mCustomScrollbar({
            //     set_height: "0.9rem",
            //     mouseWheel: true

            // });
        } else {
            $(".marvel").mCustomScrollbar({
                set_height: "1.3rem",
                mouseWheel: true

            });
            // $(".content_4").mCustomScrollbar({
            //     set_height: "0.75rem",
            //     mouseWheel: true

            // });
        }

        $(".mCSB_dragger_bar").find(".line").remove();
        $(".capOne .mCSB_dragger_bar").append('<i class="line"></i>');
        $(".capTwo .mCSB_dragger_bar").append('<i class="line"></i>');
        $(".capThree .mCSB_dragger_bar").append('<i class="line"></i>');
        $(".capFour .mCSB_dragger_bar").append('<i class="line"></i>');

        $(".capOne .mCSB_dragger_bar .line").css({
            "bottom": $(".capOne .mCSB_dragger_bar").height() + "px",
            "left": $(".capOne .mCSB_dragger_bar").width() / 2 - 1 + "px"
        })
        $(".capTwo .mCSB_dragger_bar .line").css({
            "bottom": $(".capTwo .mCSB_dragger_bar").height() + "px",
            "left": $(".capTwo .mCSB_dragger_bar").width() / 2 - 1 + "px"
        })
        $(".capThree .mCSB_dragger_bar .line").css({
            "bottom": $(".capThree .mCSB_dragger_bar").height() + "px",
            "left": $(".capThree .mCSB_dragger_bar").width() / 2 - 1 + "px"
        })
        $(".capFour .mCSB_dragger_bar .line").css({
            "bottom": $(".capFour .mCSB_dragger_bar").height() + "px",
            "left": $(".capFour .mCSB_dragger_bar").width() / 2 - 1 + "px"
        })
        var i = setInterval(function() {
            var j = $(".capOne .mCSB_dragger_bar").parent().position().top;
            $(".capOne .mCSB_dragger_bar .line").height(j);
            var k = $(".capTwo .mCSB_dragger_bar").parent().position().top;
            $(".capTwo .mCSB_dragger_bar .line").height(k);
            var l = $(".capThree .mCSB_dragger_bar").parent().position().top;
            $(".capThree .mCSB_dragger_bar .line").height(l);
            var m = $(".capFour .mCSB_dragger_bar").parent().position().top;
            $(".capFour .mCSB_dragger_bar .line").height(m);
        }, 5);
    }
    //执行入口
    var init = function() {


        // document.documentElement.style.fontSize = $(window).width() / 19.2 + 'px';
        event();
        compute();
        drawchart1();
        drawchart2();
        drawchart3();
        drawchart4();
        drawchart5();
        drawchart6(2639);
        scrollBar();
    };

    init();

})(window);