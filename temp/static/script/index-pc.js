(function() {


	var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	var isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;

	$(document).ready(function() {


		// 收入
		var option1 = {
			"legend": {
				"show": false
			},
			"grid": {},
			"title": {
				"textStyle": {
					"color": "#333333",
					"fontSize": window.FONTSIZE * ((isChrome) ? 0.12 : 0.14),
					"fontWeight": "bolder"
				},
				"subtextStyle": {
					"rich": {
						"a": {
							"color": "#666666",
							"fontSize": window.FONTSIZE * ((isChrome) ? 0.1 : 0.12),
							"fontWeight": "normal",
							"lineHeight": 10
						},
						"b": {
							"color": "#666666",
							"fontSize": window.FONTSIZE * ((isChrome) ? 0.1 : 0.12),
							"fontWeight": "normal",
							"lineHeight": 10
						}
					}
				},
				"x": "center",
				"y": window.FONTSIZE * ((isChrome) ? 0.15 : 0.2) + "%",
				"text": "61.75%",
				"subtext": "{a|完成当月}\n{b|预算}",
				"padding": [0, 2],
				"itemGap": ((isChrome) ? -5 : 0)
			},
			"calculable": true,
			"series": [{
				"type": "pie",
				"startAngle": 180,
				"z": 0,
				"center": ["50%", "50%"],
				"radius": ["87%", "100%"],
				"data": [{
					"value": 1,
					"name": "完成当月预算",
					"itemStyle": {
						"normal": {
							"color": "#f3374b"
						}
					},
					"tooltip": {
						"show": true
					},
					"label": {
						"normal": {
							"show": false
						},
						"emphasis": {
							"show": false
						}
					},
					"labelLine": {
						"normal": {
							"show": false
						},
						"emphasis": {
							"show": false
						}
					},
					"hoverAnimation": false
				}, {
					"value": 1,
					"name": "当月预算",
					"tooltip": {
						"show": true
					},
					"label": {
						"normal": {
							"show": false
						},
						"emphasis": {
							"show": false
						}
					},
					"labelLine": {
						"normal": {
							"show": false
						},
						"emphasis": {
							"show": false
						}
					},
					"hoverAnimation": false,
					"itemStyle": {
						"normal": {
							"color": "#f5f5f5"
						}
					}
				}]
			}],
			"tooltip": {
				"show": true
			}
		}
		var echartsContainer = echarts.init($("#income").get(0));
		echartsContainer.setOption(option1);

		// 利润
		var option2 = {
			"legend": {
				"show": false
			},
			"grid": {},
			"title": {
				"textStyle": {
					"color": "#333333",
					"fontSize": window.FONTSIZE * ((isChrome) ? 0.12 : 0.14),
					"fontWeight": "bolder"
				},
				"subtextStyle": {
					"rich": {
						"a": {
							"color": "#666666",
							"fontSize": window.FONTSIZE * ((isChrome) ? 0.1 : 0.12),
							"fontWeight": "normal",
							"lineHeight": 10
						},
						"b": {
							"color": "#666666",
							"fontSize": window.FONTSIZE * ((isChrome) ? 0.1 : 0.12),
							"fontWeight": "normal",
							"lineHeight": 10
						}
					}
				},
				"x": "center",
				"y": window.FONTSIZE * ((isChrome) ? 0.15 : 0.2) + "%",
				"text": "61.75%",
				"subtext": "{a|完成当月}\n{b|预算}",
				"padding": [0, 2],
				"itemGap": ((isChrome) ? -5 : 0)
			},
			"calculable": true,
			"series": [{
				"type": "pie",
				"startAngle": 180,
				"z": 0,
				"center": ["50%", "50%"],
				"radius": ["87%", "100%"],
				"data": [{
					"value": 1,
					"name": "完成当月预算",
					"itemStyle": {
						"normal": {
							"color": "#f3374b"
						}
					},
					"tooltip": {
						"show": true
					},
					"label": {
						"normal": {
							"show": false
						},
						"emphasis": {
							"show": false
						}
					},
					"labelLine": {
						"normal": {
							"show": false
						},
						"emphasis": {
							"show": false
						}
					},
					"hoverAnimation": false
				}, {
					"value": 1,
					"name": "当月预算",
					"tooltip": {
						"show": true
					},
					"label": {
						"normal": {
							"show": false
						},
						"emphasis": {
							"show": false
						}
					},
					"labelLine": {
						"normal": {
							"show": false
						},
						"emphasis": {
							"show": false
						}
					},
					"hoverAnimation": false,
					"itemStyle": {
						"normal": {
							"color": "#f5f5f5"
						}
					}
				}]
			}],
			"tooltip": {
				"show": true
			}
		}
		var echartsContainer = echarts.init($("#profit").get(0));
		echartsContainer.setOption(option2);

		// 净资产收益率
		var option3 = {
			"legend": {
				"show": false
			},
			"grid": {},
			"title": {
				"textStyle": {
					"color": "#333333",
					"fontSize": window.FONTSIZE * 0.18,
					"fontWeight": "bolder"
				},
				"x": "center",
				"y": "center",
				"text": "50.00%",
				"padding": [0, 2]
			},
			"calculable": true,
			"series": [{
				"type": "pie",
				"startAngle": 180,
				"z": 0,
				"center": ["50%", "50%"],
				"radius": ["85%", "98%"],
				"data": [{
					"value": 1,
					"name": "完成当月预算",
					"itemStyle": {
						"normal": {
							"color": "#00b7ee"
						}
					},
					"tooltip": {
						"show": true
					},
					"label": {
						"normal": {
							"show": false
						},
						"emphasis": {
							"show": false
						}
					},
					"labelLine": {
						"normal": {
							"show": false
						},
						"emphasis": {
							"show": false
						}
					},
					"hoverAnimation": false
				}, {
					"value": 1,
					"name": "当月预算",
					"tooltip": {
						"show": true
					},
					"label": {
						"normal": {
							"show": false
						},
						"emphasis": {
							"show": false
						}
					},
					"labelLine": {
						"normal": {
							"show": false
						},
						"emphasis": {
							"show": false
						}
					},
					"hoverAnimation": false,
					"itemStyle": {
						"normal": {
							"color": "#8fc31f"
						}
					}
				}]
			}],
			"tooltip": {
				"show": false
			}
		}
		var echartsContainer = echarts.init($("#roe").get(0));
		echartsContainer.setOption(option3);

		// 资产周转率
		var option4 = {
			"legend": {
				"show": false
			},
			"grid": {},
			"title": {
				"textStyle": {
					"color": "#333333",
					"fontSize": window.FONTSIZE * 0.18,
					"fontWeight": "bolder"
				},
				"x": "center",
				"y": "center",
				"text": "50.00%",
				"padding": [0, 2]
			},
			"calculable": true,
			"series": [{
				"type": "pie",
				"startAngle": 180,
				"z": 0,
				"center": ["50%", "50%"],
				"radius": ["85%", "98%"],
				"data": [{
					"value": 1,
					"name": "完成当月预算",
					"itemStyle": {
						"normal": {
							"color": "#00b7ee"
						}
					},
					"tooltip": {
						"show": true
					},
					"label": {
						"normal": {
							"show": false
						},
						"emphasis": {
							"show": false
						}
					},
					"labelLine": {
						"normal": {
							"show": false
						},
						"emphasis": {
							"show": false
						}
					},
					"hoverAnimation": false
				}, {
					"value": 1,
					"name": "当月预算",
					"tooltip": {
						"show": true
					},
					"label": {
						"normal": {
							"show": false
						},
						"emphasis": {
							"show": false
						}
					},
					"labelLine": {
						"normal": {
							"show": false
						},
						"emphasis": {
							"show": false
						}
					},
					"hoverAnimation": false,
					"itemStyle": {
						"normal": {
							"color": "#8fc31f"
						}
					}
				}]
			}],
			"tooltip": {
				"show": false
			}
		}
		var echartsContainer = echarts.init($("#turnover").get(0));
		echartsContainer.setOption(option4);

		// 资产负债率
		var option5 = {
			"legend": {
				"show": false
			},
			"grid": {},
			"title": {
				"textStyle": {
					"color": "#333333",
					"fontSize": window.FONTSIZE * 0.18,
					"fontWeight": "bolder"
				},
				"x": "center",
				"y": "center",
				"text": "50.00%",
				"padding": [0, 2]
			},
			"calculable": true,
			"series": [{
				"type": "pie",
				"startAngle": 180,
				"z": 0,
				"center": ["50%", "50%"],
				"radius": ["85%", "98%"],
				"data": [{
					"value": 1,
					"name": "完成当月预算",
					"itemStyle": {
						"normal": {
							"color": "#00b7ee"
						}
					},
					"tooltip": {
						"show": true
					},
					"label": {
						"normal": {
							"show": false
						},
						"emphasis": {
							"show": false
						}
					},
					"labelLine": {
						"normal": {
							"show": false
						},
						"emphasis": {
							"show": false
						}
					},
					"hoverAnimation": false
				}, {
					"value": 1,
					"name": "当月预算",
					"tooltip": {
						"show": true
					},
					"label": {
						"normal": {
							"show": false
						},
						"emphasis": {
							"show": false
						}
					},
					"labelLine": {
						"normal": {
							"show": false
						},
						"emphasis": {
							"show": false
						}
					},
					"hoverAnimation": false,
					"itemStyle": {
						"normal": {
							"color": "#8fc31f"
						}
					}
				}]
			}],
			"tooltip": {
				"show": false
			}
		}
		var echartsContainer = echarts.init($("#debt").get(0));
		echartsContainer.setOption(option5);

		// 头寸
		var option6 = {
			"legend": {},
			"grid": {
				"right": "5%"
			},
			"backgroundColor": "#fff",
			"tooltip": {
				"formatter": "{a} <br/>{b} : {c}%"
			},
			"series": [{
				"type": "pie",
				"z": 0,
				"center": ["50%", "50%"],
				"radius": ["65%", "68%"],
				"startAngle": 315,
				"data": [{
					"value": 1,
					"itemStyle": {
						"normal": {
							"color": "#fff"
						}
					},
					"z": 1,
					"tooltip": {
						"show": false
					},
					"label": {
						"normal": {
							"show": false
						},
						"emphasis": {
							"show": false
						}
					},
					"labelLine": {
						"normal": {
							"show": false
						},
						"emphasis": {
							"show": false
						}
					},
					"hoverAnimation": false
				}, {
					"value": 3,
					"z": 0,
					"itemStyle": {
						"normal": {
							"color": "#ddd"
						}
					},
					"tooltip": {
						"show": false
					},
					"label": {
						"normal": {
							"show": false
						},
						"emphasis": {
							"show": false
						}
					},
					"labelLine": {
						"normal": {
							"show": false
						},
						"emphasis": {
							"show": false
						}
					},
					"hoverAnimation": false
				}]
			}, {
				"name": "头寸",
				"radius": "90%",
				"type": "gauge",
				"min": 0,
				"max": 3000,
				"z": 100,
				"splitNumber": 3,
				"axisLine": {
					"lineStyle": {
						"color": [
							[0.33, "#33cc34"],
							[0.67, "#00b7ee"],
							[1, "#f11d1b"]
						],
						"width": "5"
					}
				},
				"axisTick": {
					"lineStyle": {
						"color": "#fff",
						"width": 3
					},
					"length": 50,
					"splitNumber": 1
				},
				"axisLabel": {
					"distance": -52,
					"textStyle": {
						"color": "#9c9c9c",
						"fontSize": window.FONTSIZE * 0.10
					}
				},
				"splitLine": {
					"show": false
				},
				"itemStyle": {
					"normal": {
						"color": "#515254"
					}
				},
				"title": {
					"show": false,
					"offsetCenter": [0, "100%"]
				},
				"pointer": {
					"show": true,
					"length": "60%",
					"width": 3
				},
				"detail": {
					"show": false
				},
				"data": [{
					"name": "头寸",
					"value": 2
				}]
			}]
		}
		var echartsContainer = echarts.init($("#cash").get(0));
		echartsContainer.setOption(option6);

	});

})();