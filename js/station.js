// 心理测询1
function heart_1() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector("#heart_1"));
    var value = 82;
    // 指定配置和数据
    var option = {
        color: ["#ff9d6f", "#00f2f1"],
        title: {
            text: `60`,
            left: 'center',
            top: 'center', //top待调整
            textStyle: {
                color: '#fff',
                fontSize: 18,
                fontFamily: 'DINAlternate-Bold',
            }
        },
        xAxis: {
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            }
        },
        yAxis: {
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            }
        },
        series: [
            // 进度圈
            {
                type: 'pie',
                radius: ["63%", "61%"],
                startAngle: 270,
                z: 10,
                clockwise: false,
                hoverAnimation: false,
                data: [{
                        value: value,
                        itemStyle: {
                            normal: {
                                borderWidth: 3,
                                borderColor: {
                                    colorStops: [{
                                        offset: 0,
                                        color: '#ff9d6f' || '#ff9d6f' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#ff9d6f' || '#ff9d6f' // 100% 处的颜色
                                    }]
                                },
                                color: { // 完成的圆环的颜色
                                    colorStops: [{
                                        offset: 0,
                                        color: '#ff9d6f' || '#ff9d6f' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#ff9d6f' || '#ff9d6f' // 100% 处的颜色
                                    }]
                                }
                            },
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        pointer: {
                            show: false
                        },
                    },
                    {
                        name: 'gap',
                        value: 110 - value,
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                },
                                color: 'rgba(0, 0, 0, 0)',
                                borderColor: 'rgba(0, 0, 0, 0)',
                                borderWidth: 0,
                            }
                        },
                    }
                ]
            },
            //刻度尺
            {
                // name: "白色圈刻度",
                type: "gauge",
                radius: "77%",
                startAngle: 225, //刻度起始
                endAngle: -134.8, //刻度结束
                z: 4,
                axisTick: {
                    show: true,
                    lineStyle: {
                        width: 1,
                        color: '#00f2f1'
                    }
                },
                splitLine: {
                    length: 12, //刻度节点线长度
                    lineStyle: {
                        width: 1,
                        color: '#00f2f1'
                    } //刻度节点线
                },
                axisLabel: {
                    color: 'rgba(255,255,255,0)',
                    fontSize: 12,
                }, //刻度节点文字颜色
                pointer: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        opacity: 0
                    }
                },
                detail: {
                    show: true,
                    offsetCenter: [0, '120%'],
                    color: '#fff',
                    formatter: function (params) {
                        return '参评人数'
                    },
                    textStyle: {
                        fontSize: 14
                    }
                },
                data: [{
                    value: 0,
                    name: ""
                }]
            },

            //最外层圈
            {
                "type": "pie",
                "radius": ["0%", "77%"],
                "center": ["50%", "50%"],
                "avoidLabelOverlap": false,
                hoverAnimation: false,

                "label": {
                    "normal": {
                        "show": false,
                        "position": "center"
                    },
                    "emphasis": {
                        "show": false,
                        "textStyle": {
                            "fontWeight": "bold"
                        }
                    }
                },
                "itemStyle": {
                    "normal": {
                        "color": {
                            "type": "radial",
                            "x": 0.5,
                            "y": 0.5,
                            "r": 0.5,
                            "colorStops": [{
                                "offset": 0.05,
                                "color": "rgba(21,24,65, 0.2)"
                            }, {
                                "offset": 0.5,
                                "color": "rgba(21,24,65, 0.3)"
                            }, {
                                "offset": 0.95,
                                "color": "rgba(4,121,112,.6)",
                            }]
                        }
                    }
                },
                "labelLine": {
                    "normal": {
                        "show": false
                    }
                },
                "data": [{
                    "value": 3235
                }]
            }
        ]
    };

    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

}
// 心理测询2
function heart_2() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector("#heart_2"));
    var value = 82;
    // 指定配置和数据
    var option = {
        color: ["#ff9d6f", "#00f2f1"],
        title: {
            text: `2`,
            left: 'center',
            top: 'center', //top待调整
            textStyle: {
                color: '#fff',
                fontSize: 18,
                fontFamily: 'DINAlternate-Bold',
            }
        },
        xAxis: {
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            }
        },
        yAxis: {
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            }
        },
        series: [
            // 进度圈
            {
                type: 'pie',
                radius: ["63%", "61%"],
                startAngle: 270,
                z: 10,
                clockwise: false,
                hoverAnimation: false,
                data: [{
                        value: value,
                        itemStyle: {
                            normal: {
                                borderWidth: 3,
                                borderColor: {
                                    colorStops: [{
                                        offset: 0,
                                        color: '#ffc303' || '#ffc303' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#ffc303' || '#ffc303' // 100% 处的颜色
                                    }]
                                },
                                color: { // 完成的圆环的颜色
                                    colorStops: [{
                                        offset: 0,
                                        color: '#ffc303' || '#ffc303' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#ffc303' || '#ffc303' // 100% 处的颜色
                                    }]
                                }
                            },
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        pointer: {
                            show: false
                        },
                    },
                    {
                        name: 'gap',
                        value: 110 - value,
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                },
                                color: 'rgba(0, 0, 0, 0)',
                                borderColor: 'rgba(0, 0, 0, 0)',
                                borderWidth: 0,
                            }
                        },
                    }
                ]
            },
            //刻度尺
            {
                // name: "白色圈刻度",
                type: "gauge",
                radius: "77%",
                startAngle: 225, //刻度起始
                endAngle: -134.8, //刻度结束
                z: 4,
                axisTick: {
                    show: true,
                    lineStyle: {
                        width: 1,
                        color: 'rgba(1,244,255, 0.9)'
                    }
                },
                splitLine: {
                    length: 12, //刻度节点线长度
                    lineStyle: {
                        width: 1,
                        color: 'rgba(1,244,255, 0.9)'
                    } //刻度节点线
                },
                axisLabel: {
                    color: 'rgba(255,255,255,0)',
                    fontSize: 12,
                }, //刻度节点文字颜色
                pointer: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        opacity: 0
                    }
                },
                detail: {
                    show: true,
                    offsetCenter: [0, '120%'],
                    color: '#fff',
                    formatter: function (params) {
                        return '心理咨询师数量'
                    },
                    textStyle: {
                        fontSize: 14
                    }
                },
                data: [{
                    value: 0,
                    name: ""
                }]
            },

            //最外层圈
            {
                "type": "pie",
                "radius": ["0%", "77%"],
                "center": ["50%", "50%"],
                "avoidLabelOverlap": false,
                hoverAnimation: false,

                "label": {
                    "normal": {
                        "show": false,
                        "position": "center"
                    },
                    "emphasis": {
                        "show": false,
                        "textStyle": {
                            "fontWeight": "bold"
                        }
                    }
                },
                "itemStyle": {
                    "normal": {
                        "color": {
                            "type": "radial",
                            "x": 0.5,
                            "y": 0.5,
                            "r": 0.5,
                            "colorStops": [{
                                "offset": 0.05,
                                "color": "rgba(21,24,65, 0.2)"
                            }, {
                                "offset": 0.5,
                                "color": "rgba(21,24,65, 0.3)"
                            }, {
                                "offset": 0.95,
                                "color": "rgba(4,121,112,.6)",
                            }]
                        }
                    }
                },
                "labelLine": {
                    "normal": {
                        "show": false
                    }
                },
                "data": [{
                    "value": 3235
                }]
            }
        ]
    };

    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

}
//心里测询3
function heart_3() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector("#heart_3"));
    // 指定配置和数据
    var colorList = ['#FF6EB4', '#ffff00', '#7fff00', '#00f2f1', '#FD866A', '#9E87FF', '#58D5FF'];
    option = {
        title: {
            text: '异常人数\n3',
            x: 'center',
            y: '39%',
            // subtext: '301',
            textStyle: {
                color: '#ffff00',
                fontSize: 16,
                // align: 'center'
            },
            // subtextStyle: {
            //     fontSize: 14,
            //     color: ['#FD866A'],
            // },
        },
        tooltip: {
            trigger: 'item'
        },
        grid: {
            // top: '1%',
            left: 1,
            right: 1,
            // bottom: 1,
            containLabel: true
        },
        series: [{
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['60%', '80%'],
            // clockwise: true,
            // avoidLabelOverlap: true,
            hoverOffset: 15,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'outside',
                        formatter: "{b}\n{d}%",
                        fontSize: 14,
                        fontWeight: 'bold',
                    },
                    labelLine: {
                        length: 15,
                        length2: 10,
                        show: true,
                        color: '#00ffff',

                    }
                }
            },
            data: [{
                'name': '躁狂',
                'value': 101
            }, {
                'name': '强迫',
                'value': 29
            }, {
                'name': '其他',
                'value': 15
            }, {
                'name': '抑郁',
                'value': 40
            }, {
                'name': '敌对',
                'value': 11
            }, {
                'name': '焦虑',
                'value': 105
            }],
        }]
    };
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

}
//心里测询4
function heart_4() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector("#heart_4"));
    // 指定配置和数据
    option = {
        color: ['#9E87FF', '#FD866A'],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        grid: {},
        series: [{
                name: "干预情况",
                type: 'pie',
                selectedMode: 'single',
                radius: [0, '80%'],
                label: {
                    normal: {
                        position: 'inner',
                        formatter: "{b}: {c}人",
                        textStyle: {
                            fontSize: 16
                        },
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    },
                },
                data: [{
                    'name': '正在干预',
                    'value': 2
                }, {
                    'name': '已干预',
                    'value': 1
                }],
            },
            {
                name: '干预情况',
                type: 'pie',
                radius: ['100%', '100%']
            }
        ]
    };
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

}

//政治教育1
function edu_1() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector("#edu_1"));
    // 指定配置和数据
    option = {
        color: ['#FD866A', '#9E87FF', '#ff4343'],
        title: {
            text: '课程完成情况占比',
            x: 'center',
            y: '85%',
            // subtext: '301',
            textStyle: {
                color: 'white',
                fontSize: 11,
                // align: 'center'
            },
            // subtextStyle: {
            //     fontSize: 14,
            //     color: ['#FD866A'],
            // },
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        grid: {},
        series: [{
                name: "课程完成情况",
                type: 'pie',
                selectedMode: 'single',
                radius: [0, '78%'],
                label: {
                    normal: {
                        position: 'inner',
                        formatter: "{b}: {d}%",
                        textStyle: {
                            fontSize: 11
                        },
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    },
                },
                data: [{
                    'name': '已完成',
                    'value': 10
                }, {
                    'name': '正在学习',
                    'value': 22
                }, {
                    'name': '未学习',
                    'value': 28
                }],
            },
            {
                name: '干预情况',
                type: 'pie',
                radius: ['100%', '100%']
            }
        ]
    };
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

}
//政治教育2
function edu_2() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector("#edu_2"));
    // 指定配置和数据
    var colorList = ['#FD866A', '#58D5FF'];
    option = {
        title: {
            text: '考试完成情况',
            x: 'center',
            y: 'center',
            // subtext: '301',
            textStyle: {
                color: 'white',
                fontSize: 11,
                // align: 'center'
            },
            // subtextStyle: {
            //     fontSize: 14,
            //     color: ['#FD866A'],
            // },
        },
        tooltip: {
            trigger: 'item'

        },
        grid: {
            // top: '1%',
            left: 1,
            right: 1,
            // bottom: 1,
            containLabel: true
        },
        series: [{
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['68%', '88%'],
            // clockwise: true,
            // avoidLabelOverlap: true,
            hoverOffset: 15,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'outside',
                        formatter: "{b}\n{d}%",
                        fontSize: 12,
                        fontWeight: 'bold',
                    },
                    labelLine: {
                        length: 2,
                        length2: 2,
                        show: true,
                        color: '#00ffff',

                    }
                }
            },
            data: [{
                'name': '未考试',
                'value': 19
            }, {
                'name': '已考试',
                'value': 41
            }],
        }]
    };
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

}

//政治教育3
function edu_3() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector("#edu_3"));
    var data = {
        edu: [
            [2, 6, 14, 28, 10]
        ]
    };
    // 指定配置和数据
    option = {
        color: ["#FD866A", "#00f2f1"],
        tooltip: {
            trigger: 'axis',
        },
        // legend: {
        //     top: "5%",
        //     // 距离容器10%
        //     right: "5%",
        //     // 修饰图例文字的颜色
        //     textStyle: {
        //         color: "#FFFFFF"
        //     }
        // },
        grid: {
            top: "1%",
            left: "10%",
            right: "6%",
            bottom: "30%",
            // show: true,
            borderColor: "white",
            containLabel: false
        },
        xAxis: {
            type: "category",
            // boundaryGap: false,
            // axisPointer: {
            //     type: 'shadow'
            // },
            data: [
                "[50,60)",
                "[60,70)",
                "[70,80)",
                "[80,90)",
                "[90,100]"
            ],
            // 修饰刻度标签的颜色
            axisLine: {
                lineStyle: {
                    color: "white"
                }
            },
            axisLabel: {
                interval: 0,
                fontSize: 13
            },
        },
        yAxis: [{
            name: '平均分',
            type: "value",
            // 修饰刻度标签的颜色
            axisLine: {
                lineStyle: {
                    color: "white"
                }
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,0.2)",
                }
            }
        }],

        series: [{
            type: "bar",
            width: "5%",
            data: data.edu[0]
        }]
    };
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

}

//智慧营区
function smart() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('smart'));

var getData = [
    {day:"2020-08-01", sleep:9, train:11, drive:13, phone:25},
    {day:"2020-08-02", sleep:4, train:6, drive:9, phone:12},
    {day:"2020-08-03", sleep:7, train:3, drive:8, phone:10},
    {day:"2020-08-04", sleep:4, train:6, drive:9, phone:12},
    {day:"2020-08-05", sleep:7, train:3, drive:8, phone:10},
    {day:"2020-08-06", sleep:9, train:11, drive:13, phone:25},
    {day:"2020-08-07", sleep:4, train:6, drive:9, phone:12},
    {day:"2020-08-08", sleep:7, train:3, drive:8, phone:10},
    {day:"2020-08-09", sleep:9, train:11, drive:13, phone:25},
    {day:"2020-08-10", sleep:4, train:6, drive:9, phone:12},
    {day:"2020-08-11", sleep:7, train:3, drive:8, phone:10},
    {day:"2020-08-12", sleep:9, train:11, drive:13, phone:25},
    {day:"2020-08-13", sleep:4, train:6, drive:9, phone:12},
    {day:"2020-08-14", sleep:7, train:3, drive:8, phone:10},
    {day:"2020-08-15", sleep:9, train:11, drive:13, phone:25},
    {day:"2020-08-16", sleep:4, train:6, drive:9, phone:12},
    {day:"2020-08-17", sleep:7, train:3, drive:8, phone:10},
    {day:"2020-08-18", sleep:9, train:11, drive:13, phone:25},
    {day:"2020-08-19", sleep:4, train:6, drive:9, phone:12},
    {day:"2020-08-20", sleep:7, train:3, drive:8, phone:10},
    {day:"2020-08-21", sleep:9, train:11, drive:13, phone:25},
    // {"day":"2020-08-22","count":2},{"day":"2020-08-23","count":77},{"day":"2020-08-24","count":77},
    // {"day":"2020-08-25","count":89},{"day":"2020-08-26","count":34},{"day":"2020-08-27","count":22},
    // {"day":"2020-08-28","count":26},{"day":"2020-08-29","count":36},{"day":"2020-08-30","count":76},
    {day:"2020-08-31", sleep:8, train:7, drive:9, phone:17}]
    var data1 = [];
    for (var i = 0; i < getData.length; i++) {
        var sum = getData[i].sleep + getData[i].train + getData[i].drive + getData[i].phone
        data1.push([getData[i].day, sum])
    }

    var color = ["#00f2f1", "#ed3f35", "#BBFFFF", "#4EEE94"]

    var option = {
        tooltip: {
            trigger: 'item',
            formatter: function (params, ticket, callback) {
                console.log(params);
                var htmlStr = '';
                var seriesName = params.seriesName; //图例名称    
                htmlStr += seriesName + '<br/>'; //x轴的名称
                // console.log(getData);

                for (var j = 0; j < 4; j++) {
                    var sname = ''
                    var svalue = ''
                    if (j == 0) {
                        sname = '睡眠质量不良'
                        svalue = getData[j].sleep
                    } else if (j == 1) {
                        sname = '训练不合格'
                        svalue = getData[j].train
                    } else if (j == 2) {
                        sname = '违规驾驶'
                        svalue = getData[j].drive
                    } else if (j == 3) {
                        sname = '手机违规使用'
                        svalue = getData[j].phone
                    }

                    htmlStr += '<div>';
                    htmlStr += '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:' + color[j] + ';"></span>';
                    htmlStr += sname + '：' + svalue
                    htmlStr += '</div>'
                }
                return htmlStr;
            }
        },
        calendar: [{
            top: "10%",
            left: 'center',
            range: '2020-08',
            orient: 'vertical',
            cellSize: 36,
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#ffffff',
                    width: 3,
                    type: 'solid'
                }
            },
            yearLabel: {
                show: false
            },
            monthLabel: {
                show: false
            },
            dayLabel: {
                firstDay: 1,
                margin: 8,
                nameMap: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
                textStyle: {
                    color: '#ffffff'
                }
            },
            itemStyle: {
                color: "rgba(0, 0, 0, 0)",
                borderColor: "rgba(255, 255, 255, 0.5)",
                borderWidth: 1
            }
        }],
        series: [{
            name: '违规人员统计',
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            data: data1,
            symbolSize: function (val) {
                val = val[1] / 7;
                if (val != 0) {
                    val = val < 5 ? 5 : Math.min(val, 9);
                }
                return val;
            },
            itemStyle: {
                normal: {
                    color: '#FA8072'
                }
            },
            label: {
                show: true,
                formatter(params) {
                    return params.value[0].split("-")[2]
                },
                offset: [11, -11],
                color: '#FFFFFF'
            }
        }]

    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

// 全员考核
function assess_1() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector("#assess_1"));

    let title = '总人数';
    let color = ['#7FFF00', '#FF8352', '#E271DE', '#FFFF00', '#00FFFF'];
    let echartData = [{
            name: "优秀",
            value: "20"
        },
        {
            name: "称职",
            value: "38"
        },
        {
            name: "基本称职",
            value: "12"
        },
        {
            name: "不称职",
            value: "8"
        },
        {
            name: "未参评",
            value: "2"
        }
    ];

    let formatNumber = function (num) {
        let reg = /(?=(\B)(\d{3})+$)/g;
        return num.toString().replace(reg, ',');
    }
    let total = echartData.reduce((a, b) => {
        return a + b.value * 1
    }, 0);

    option = {
        color: color,
        tooltip: {
            trigger: 'item'
        },
        title: [{
            text: '{name|' + title + '}\n{val|' + formatNumber(total) + '}',
            top: 'center',
            left: 'center',
            textStyle: {
                rich: {
                    name: {
                        fontSize: 14,
                        fontWeight: 'normal',
                        color: '#FFFFFF',
                        padding: [10, 0]
                    },
                    val: {
                        fontSize: 32,
                        fontWeight: 'bold',
                        color: '#FFFFFF',
                    }
                }
            }
        }],
        series: [{
            type: 'pie',
            radius: ['45%', '60%'],
            center: ['50%', '50%'],
            data: echartData,
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    borderColor: "rgba(255,255,255,0.2)",
                    borderWidth: 2
                }
            }

        }]
    };

    // 3. 把配置和数据给实例对象
    myChart.setOption(option);

    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

//全员考核的两个数字仪表盘
function assess_2() {

    var dataArray =[
        {
            name:"赵章全", score:99
        },
        {
            name: "张世君",
            score: 93
        },
        {
            name: "胡城瑞",
            score: 98
        },
        {
            name:"谢杨", score:97
        },
        {
            name:"童更", score:95
        },
        {
            name: "刘健",
            score: 92
        },
        {
            name:"金星原", score:94
        },
        {
            name:"李玉潇", score:97
        },
        {
            name:"尤黎明", score:95
        },
        {
            name: "余峰",
            score: 90
        },
        {
            name: "郭海涛",
            score: 91
        },
        {
            name: "夏乾胜",
            score: 97
        },
        {
            name: "肖露",
            score: 95
        },
        {
            name: "刘健",
            score: 92
        },
        {
            name: "宋奎",
            score: 94
        },
        {
            name: "黎飞",
            score: 97
        },
        {
            name: "徐志恒",
            score: 95
        },
        {
            name: "余峰",
            score: 90
        },
        {
            name: "郭海涛",
            score: 91
        },
    ]

    dataArray.sort(function (a, b) {
        return b.score - a.score
    });
    var tr = "";
    var length = dataArray.length > 10 ? 10 : dataArray.length
    for (var i = 0; i < dataArray.length; i++) {
        tr = tr + '<tr>' +
            "<td>" + (i + 1) + "</td>" +
            "<td>" + dataArray[i].name + "</td>" +
            "<td>" + dataArray[i].score + "</td>" +
            '</tr>';
    }
    $('#asswss_tb').append(tr);
}

// 智慧党建1
function dj_1() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector("#dj1"));
    var data = {
        dj1: [
            [95, 92, 98, 89, 82, 91, 92, 97, 95, 93]
        ]
    };
    var color = ["#FD866A", "#00f2f1", '#FFE4C4', '#ffff00', '#7fff00', '#00f2f1', '#FD866A', '#9E87FF', '#9ACD32', "#CD4F39"],
        // 指定配置和数据
        option = {
            tooltip: {
                // trigger: 'axis',
                trigger: 'item',
                formatter: "开展情况<br/>{c}%"
            },
            grid: {
                top: "10%",
                left: "30%",
                right: "1%",
                bottom: "10%",
                // show: true,
                borderColor: "white",
                containLabel: false
            },
            yAxis: {
                type: "category",
                data: [
                    "缴纳党费",
                    "重温誓词",
                    "诵读党章",
                    "集中学习",
                    "民主议事",
                    "特色实践",
                    "党员汇报",
                    "民主监督",
                    "积分考评",
                    "组织生活"
                ],
                // 修饰刻度标签的颜色
                axisLine: {
                    lineStyle: {
                        color: "white"
                    }
                },
                axisLabel: {
                    // interval: 0,
                    fontSize: 10
                },
            },
            xAxis: [{
                // name: '开展情况',
                type: "value",
                // 修饰刻度标签的颜色
                min: 60,
                // max: 100,
                axisLine: {
                    lineStyle: {
                        color: "white",
                        fontSize: 10
                    }
                },
                // 修改y轴分割线的颜色
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,0.2)",
                    }
                },
                axisLabel: {
                    formatter: '{value}%'
                }
            }],

            series: [{
                type: "bar",
                // width: "5%",
                data: data.dj1[0],
                itemStyle: {
                    normal: {
                        color: function (params) {
                            return color[params.dataIndex]
                        }
                    }
                },
            }]
        };
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

}
//智慧党建2
function dj_2() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector("#dj2"));
    var xData = ['党员大会', '支委会', '党小组会', '党课'];
    var yData = ['70', '75', '82', '90'];

    function rand(m, n) {
        if (!n) {
            return Math.floor(Math.random() * m);
        } else {
            var c = n - m + 1;
            return Math.floor(Math.random() * c + m);
        }
    }

    function getMax(arr, key) {
        var max = 0,
            len = arr.length;
        for (var i = 0; i < len; i++) {
            var item = arr[i][key];
            if (max < item) max = item;
        }
        return max;
    }

    function getValArr(arr, key) {
        var val = [],
            len = arr.length;
        for (var i = 0; i < len; i++) {
            val.push(arr[i][key]);
        }
        return val;
    }

    var arr = [];
    for (var i = 0; i < 4; i++) {
        arr.push({
            name: xData[i],
            amount: yData[i] // 采购金额
        });
    }

    var max = getMax(arr, 'amount'),
        angleAxisData = getValArr(arr, 'name');
    $.each(arr, function (i, e) {
        e.value = (e.amount / max * 100).toFixed(2);
    });
    // 指定配置和数据
    option = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}:{c}%',
            textStyle: {
                fontSize: 10,
                color: '#fff',
                fontFamily: 'Microsoft YaHei'
            }
        },
        grid: {
            top: "1%",
            left: "10%",
            right: "15%",
            bottom: "10%",
            // show: true,
            borderColor: "white",
            containLabel: false
        },
        angleAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#6d8a92'
                }
            },
            axisLabel: {
                interval: 0,
                fontSize: 11,
                color: '#fff',
                fontFamily: 'Microsoft YaHei'
            },
            axisTick: {
                show: false
            },
            data: angleAxisData,
            z: 10
        },
        radiusAxis: {
            max: 100,
            min: 50,
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#6d8a92'
                }
            },
            axisLabel: {
                // formatter: '{value}%',
                // textStyle: {
                //     fontSize: 11,
                //     color: '#61d9fb',
                //     fontFamily: 'Microsoft YaHei'
                // }
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#6d8a92'
                }
            },
            splitArea: {
                areaStyle: {
                    color: 'transparent'
                }
            }
        },
        polar: {
            center: ['50%', '50%'],
            radius: '65%',
        },
        series: [{
            type: 'bar',
            data: arr,
            itemStyle: {
                color: function (params) {
                    var colorList = ['#5cc6ca', '#d87a7f', '#f5b97f', '#b6a2de'];
                    return colorList[params.dataIndex];
                }
            },
            coordinateSystem: 'polar',
        }]
    };
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

}
//智慧党建2
// function dj_2() {
//     // 实例化对象
//     var myChart = echarts.init(document.querySelector("#dj2"));
//     var xData = ['党员大会', '支委会', '党小组会', '党课'];
//     var yData = ['70', '75', '82', '90'];
//     var colorList = ["#FD866A", "#00f2f1", '#FFE4C4', '#7fff00', '#00f2f1', '#FD866A', '#9E87FF', '#9ACD32', "#CD4F39"];
//     // var colorList = ['#97e7ff', '#75f5ff', '#00deff', '#0093ff', '#2a5fcf']
//     var visualMapPiecesData = [];
//     for (var i = 0; i < xData.length; i++) {
//         visualMapPiecesData.push({
//             value: yData[i],
//             label: xData[i],
//             color: colorList[i]
//         })
//     }
//     // 指定配置和数据
//     option = {
//         // title: {
//         //     text: '早餐统计',
//         //     textStyle: {
//         //         fontSize: 12,
//         //         color: "white"
//         //     }
//         // },
//         tooltip: {
//             trigger: 'item',
//             formatter: function (params, ticket, callback) {
//                 return params.name + ' : ' + ' (' + params.data + '%)'
//             }
//         },
//         angleAxis: {
//             axisLine: {
//                 show: false
//             },
//             axisTick: {
//                 show: false
//             },
//             axisLabel: {
//                 show: false
//             },
//             splitLine: {
//                 show: false
//             },
//             clockwise: false
//         },
//         radiusAxis: {
//             type: 'category',
//             data: xData,
//             // radius: "100%",
//             z: 100,
//             axisLine: {
//                 show: false
//             },
//             axisTick: {
//                 show: false
//             },
//             axisLabel: {
//                 show: false
//             },
//             splitLine: {
//                 show: false
//             }
//         },
//         polar: {},
//         grid: {
//             top: 0,
//             left: "10%",
//             right: "6%",
//             bottom: "50%",
//             // show: true,
//             borderColor: "white",
//             containLabel: false
//         },
//         visualMap: {
//             top: 0,
//             x: 'left',
//             orient: 'vertical',
//             textStyle: {
//                 color: '#white'
//             },
//             pieces: visualMapPiecesData,
//             outOfRange: {
//                 color: '#999'
//             }
//         },
//         series: [{
//             type: 'bar',
//             data: yData,
//             coordinateSystem: 'polar',
//             itemStyle: {
//                 normal: {
//                     // 定制显示（按顺序）
//                     color: function (params) {
//                         return colorList[params.dataIndex]
//                     }
//                 }
//             }
//         }]
//     };
//     // 把配置给实例对象
//     myChart.setOption(option);
//     window.addEventListener("resize", function () {
//         myChart.resize();
//     });

// }

function tb_edu() {
    var dataArray = [{
            name: "武汉支队",
            compulsory: "100%",
            elective: "100%",
            exam: "100%",
            finish: "100%",
            average: 97.7
        },
        {
            name: "宜昌支队",
            compulsory: "100%",
            elective: "100%",
            exam: "100%",
            finish: "100%",
            average: 95.3
        },
        {
            name: "鄂州支队",
            compulsory: "100%",
            elective: "100%",
            exam: "100%",
            finish: "100%",
            average: 98.2
        },
        {
            name: "襄阳支队",
            compulsory: "100%",
            elective: "100%",
            exam: "100%",
            finish: "100%",
            average: 96.5
        },
        {
            name: "黄石支队",
            compulsory: "100%",
            elective: "100%",
            exam: "100%",
            finish: "100%",
            average: 99.2
        },
        {
            name: "荆门支队",
            compulsory: "100%",
            elective: "100%",
            exam: "100%",
            finish: "100%",
            average: 97.8
        },
        {
            name: "咸宁支队",
            compulsory: "100%",
            elective: "100%",
            exam: "100%",
            finish: "100%",
            average: 98.3
        },
        {
            name: "十堰支队",
            compulsory: "100%",
            elective: "100%",
            exam: "100%",
            finish: "100%",
            average: 95.7
        },
        {
            name: "随州支队",
            compulsory: "100%",
            elective: "100%",
            exam: "100%",
            finish: "100%",
            average: 99.1
        },
        {
            name: "孝感支队",
            compulsory: "90%",
            elective: "90%",
            exam: "70%",
            finish: "82%",
            average: 83.2
        },
        {
            name: "荆州支队",
            compulsory: "99%",
            elective: "99%",
            exam: "95%",
            finish: "96%",
            average: 92.2
        },
        {
            name: "黄冈支队",
            compulsory: "100%",
            elective: "100%",
            exam: "100%",
            finish: "100%",
            average: 89.2
        },
        {
            name: "恩施支队",
            compulsory: "100%",
            elective: "100%",
            exam: "100%",
            finish: "100%",
            average: 96.6
        },
        {
            name: "汉江支队",
            compulsory: "100%",
            elective: "100%",
            exam: "100%",
            finish: "100%",
            average: 97.5
        },
        {
            name: "训保支队",
            compulsory: "90%",
            elective: "90%",
            exam: "80%",
            finish: "85%",
            average: 89.2
        },
    ];

    var tr = "";
    for (var i = 0; i < dataArray.length; i++) {
        tr = tr + '<tr>' +
            "<td>" + dataArray[i].name + "</td>" +
            "<td>" + dataArray[i].compulsory + "</td>" +
            "<td>" + dataArray[i].elective + "</td>" +
            "<td>" + dataArray[i].exam + "</td>" +
            "<td>" + dataArray[i].finish + "</td>" +
            "<td>" + dataArray[i].average + "</td>" +
            '</tr>';
    }
    $('#edu_tb').append(tr);
}

function tb_wn1() {
    var dataArray = [{
            name: "翁超",
            time: "2020-8-17 09:10",
            type: "政治教育",
            content: "考试不及格",
            flag: "最新预警"
        },
        {
            name: "刘彦淇",
            time: "2020-8-16 14:00",
            type: "政治教育",
            content: "未参加学习",
            flag: "最新预警"
        },
        {
            name: "王功行",
            time: "2020-8-15 12:20",
            type: "智慧党建",
            content: "未参加主题党日活动",
            flag: "最新预警"
        },
        {
            name: "文军",
            time: "2020-8-15 10:00",
            type: "心理测询",
            content: "心理测询异常",
            flag: "最新预警"
        },
        {
            name: "赵章全",
            time: "2020-8-12 09:00",
            type: "全员考核",
            content: "本月被评定为不称职",
            flag: "最新预警"
        },
        {
            name: "王锦巍",
            time: "2020-8-09 13:00",
            type: "心理测询",
            content: "睡眠质量一直不良",
            flag: "最新预警"
        },
        {
            name: "李玉潇",
            time: "2020-8-09 15:00",
            type: "全员考核",
            content: "本月训练不合格",
            flag: "最新预警"
        }
    ];
    var tr = "";
    for (var i = 0; i < dataArray.length; i++) {
        tr = tr + '<tr>' +
            "<td class=\"tb_zhidui\">" + dataArray[i].name + "</td>" +
            "<td class=\"tb_time\">" + dataArray[i].time + "</td>" +
            "<td class=\"tb_type\">" + dataArray[i].type + "</td>" +
            "<td class=\"tb_content\">" + dataArray[i].content + "</td>" +
            '</tr>';
    }
    $('#wn_tb1').append(tr);
}

function tb_wn2() {
    var dataArray = [{
            name: "史意芳",
            time: "2020-8-17 10:00",
            type: "心理测询",
            content: "心理测询异常",
            flag: "最新预警"
        },
        {
            name: "潘栋",
            time: "2020-8-17 09:10",
            type: "政治教育",
            content: "考试不及格",
            flag: "最新预警"
        },
        {
            name: "余峰",
            time: "2020-8-16 08:00",
            type: "智慧党建",
            content: "未参加主题党日活动",
            flag: "最新预警"
        },
        {
            name: "曹雷",
            time: "2020-8-15 13:00",
            type: "心理测询",
            content: "睡眠质量一直不良",
            flag: "最新预警"
        },
        {
            name: "何予栋",
            time: "2020-8-15 14:00",
            type: "政治教育",
            content: "本月还未参加学习",
            flag: "最新预警"
        },
        {
            name: "孙小康",
            time: "2020-8-13 08:00",
            type: "全员考核",
            content: "未参加全员考核",
            flag: "最新预警"
        },
        {
            name: "谌基海",
            time: "2020-8-12 09:00",
            type: "全员考核",
            content: "本月被评定为不称职",
            flag: "最新预警"
        },
        {
            name: "张云",
            time: "2020-8-09 15:00",
            type: "全员考核",
            content: "本月训练不合格",
            flag: "最新预警"
        },

    ];
    var tr = "";
    for (var i = 0; i < dataArray.length; i++) {
        tr = tr + '<tr>' +
            "<td class=\"tb_zhidui\">" + dataArray[i].name + "</td>" +
            "<td class=\"tb_time\">" + dataArray[i].time + "</td>" +
            "<td class=\"tb_type\">" + dataArray[i].type + "</td>" +
            "<td class=\"tb_content\">" + dataArray[i].content + "</td>" +
            '</tr>';
    }
    $('#wn_tb2').append(tr);
}