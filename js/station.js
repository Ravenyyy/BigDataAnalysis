// 心理测询1
function heart_1() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector("#heart_1"));
    var value = 82;
    // 指定配置和数据
    var option = {
        color: ["#ff9d6f", "#00f2f1"],
        title: {
            text: `6776`,
            left: 'center',
            top: 'center', //top待调整
            textStyle: {
                color: '#fff',
                fontSize: 14,
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
                radius: ["55%", "53%"],
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
                radius: "70%",
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
                        fontSize: 10
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
                "radius": ["0%", "70%"],
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
            text: `98`,
            left: 'center',
            top: 'center', //top待调整
            textStyle: {
                color: '#fff',
                fontSize: 14,
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
                radius: ["55%", "53%"],
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
                radius: "70%",
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
                        fontSize: 10
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
                "radius": ["0%", "70%"],
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
    var colorList = ['#ff4343', '#ffff00', '#7fff00', '#00f2f1', '#FD866A', '#9E87FF', '#58D5FF'];
    option = {
        title: {
            text: '异常人数\n301 人',
            x: 'center',
            y: '39%',
            // subtext: '301',
            textStyle: {
                color: '#ffff00',
                fontSize: 12,
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
                        fontSize: 9,
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
                            fontSize: 10
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
                    'value': 81
                }, {
                    'name': '已干预',
                    'value': 240
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
    var data = {
        edu: [
            [100, 100, 100, 100, 100, 100, 100, 100, 100, 82, 96, 100, 100, 100, 85],
            [97.7, 95.3, 98.2, 96.5, 99.2, 97.8, 98.3, 95.7, 99.1, 83.2, 92.2, 89.2, 96.6, 97.5, 89.2]
        ]
    };
    // 指定配置和数据
    option = {
        color: ["#FD866A", "#00f2f1"],
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            top: "5%",
            // 距离容器10%
            right: "30%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#FFFFFF"
            }
        },
        grid: {
            top: "20%",
            left: "8%",
            right: "12%",
            bottom: "10%",
            show: true,
            borderColor: "rgba(255,255,255,0.2)",
            containLabel: false
        },
        xAxis: {
            type: "category",
            boundaryGap: false,
            axisPointer: {
                type: 'shadow'
            },
            data: [
                "武汉",
                "宜昌",
                "鄂州",
                "襄阳",
                "黄石",
                "荆门",
                "咸宁",
                "十堰",
                "随州",
                "孝感",
                "荆州",
                "黄冈",
                "恩施",
                "汉江",
                "训保"
            ],
            // 修饰刻度标签的颜色
            axisLine: {
                lineStyle: {
                    color: "white"
                }
            },
            axisLabel: {
                interval: 0,
                fontSize: 12
            },
        },
        yAxis: [{
                name: '平均分',
                type: "value",
                min: 70,
                max: 100,
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
            },
            {
                name: '总完成率',
                type: "value",
                min: 70,
                max: 100,
                // 修饰刻度标签的颜色
                axisLine: {
                    lineStyle: {
                        color: "white"
                    }
                },
                // 修改y轴分割线的颜色
                splitLine: {
                    lineStyle: {
                        color: "#white"
                    }
                },
                axisLabel: {
                    formatter: '{value} %'
                }
            },
        ],

        series: [{
                name: "总完成率",
                type: "line",
                // 是否让线条圆滑显示
                smooth: true,
                data: data.edu[0]
            },
            {
                name: "平均分",
                type: "line",
                smooth: true,
                data: data.edu[1]
            }
        ]
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
        var sum = getData[i].sleep+getData[i].train+getData[i].drive+getData[i].phone
        data1.push([getData[i].day,sum])
    } 

    var color = ["#00f2f1", "#ed3f35", "#BBFFFF", "#4EEE94"]

    var option = {
        tooltip: {
            trigger: 'item',
            formatter:function (params, ticket, callback) {
                console.log(params);
                var htmlStr = '';
                var seriesName = params.seriesName;//图例名称    
                htmlStr += seriesName + '<br/>';//x轴的名称
                // console.log(getData);

                for(var j=0; j<4; j++){
                    var sname = ''
                    var svalue = ''
                    if(j==0){
                        sname = '睡眠质量不良'
                        svalue = getData[j].sleep
                    }else if(j==1){
                        sname = '训练不合格'
                        svalue = getData[j].train
                    }else if(j==2){
                        sname = '违规驾驶'
                        svalue = getData[j].drive
                    }else if(j==3){
                        sname = '手机违规使用'
                        svalue = getData[j].phone
                    }

                    htmlStr +='<div>';
                    htmlStr += '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:'+color[j]+';"></span>';
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
            yearLabel: {show: false},
            monthLabel:{show: false},
            dayLabel: {
                firstDay: 1,
                margin: 8,
                nameMap: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
                textStyle: {
                    color: '#ffffff'
                }
            },
            itemStyle:{
                color:"rgba(0, 0, 0, 0)",
                borderColor:"rgba(255, 255, 255, 0.5)",
                borderWidth:1
            }
        }],
        series: [
            {
                name: '违规人员统计',
                type: 'effectScatter',
                coordinateSystem: 'calendar',
                data: data1,
                symbolSize: function(val) {
                        val = val[1] / 7;
                        if(val != 0){
                            val = val <5 ? 5 : Math.min(val, 9);
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
                    formatter (params) {
                        return params.value[0].split("-")[2]
                    },
                    offset: [11, -11],
                    color: '#FFFFFF'
                }
            }
        ]

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

    let formatNumber = function(num) {
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
            name:"张世君", score:93
        },
        {
            name:"胡城瑞", score:98
        },
        {
            name:"谢杨", score:97
        },
        {
            name:"童更", score:95
        },
        {
            name:"刘健", score:92
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
            name:"余峰", score:90
        },
        {
            name:"郭海涛", score:91
        },
        {
            name:"夏乾胜", score:97
        },
        {
            name:"肖露", score:95
        },
        {
            name:"刘健", score:92
        },
        {
            name:"宋奎", score:94
        },
        {
            name:"黎飞", score:97
        },
        {
            name:"徐志恒", score:95
        },
        {
            name:"余峰", score:90
        },
        {
            name:"郭海涛", score:91
        },
    ]

    dataArray.sort(function(a, b){return b.score - a.score}); 
    var tr = "";
    var length = dataArray.length>10 ? 10:dataArray.length
    for(var i=0; i<dataArray.length; i++){
      tr = tr+'<tr>'+
            "<td>" + (i+1) + "</td>"+
            "<td>" + dataArray[i].name + "</td>"+
            "<td>" + dataArray[i].score + "</td>"+
            '</tr>';
    }
    $('#asswss_tb').append(tr);
}

// 智慧党建
function dj_1() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('dj1'));

    option = {
        tooltip: {
            formatter: "{b}：{c}"
        },
        series: [{
            tooltip: {
                show: false
            },
            "name": 'wrap',
            "type": 'pie',
            "hoverAnimation": false,
            "legendHoverLink": false,
            center: ['50%', '70%'],
            "radius": ['0%', '7%'],
            "z": 5,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
                    "show": false
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 100,
                itemStyle: {
                    normal: {
                        color: "#072B79"
                    },
                    emphasis: {
                        color: "#072B79"
                    }
                }
            }]
        }, {
            tooltip: {
                show: false
            },
            "name": 'wrap',
            "type": 'pie',
            "hoverAnimation": false,
            "legendHoverLink": false,
            center: ['50%', '70%'],
            "radius": ['6%', '8%'],
            "z": 5,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
                    "show": false
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 100,
                itemStyle: {
                    normal: {
                        color: "#24D8E7"
                    },
                    emphasis: {
                        color: "#24D8E7"
                    }
                }
            }]
        }, {
            tooltip: {
                show: false
            },
            name: '刻度',
            type: 'gauge',
            radius: '105%',
            z: 1,
            min: 0,
            max: 1,
            center: ['50%', '70%'],
            splitNumber: 5, //刻度数量
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 4,
                    color: [
                        [0.2, '#ed3f35'],
                        [0.4, '#F88168'],
                        [0.6, '#ffff00'],
                        [0.8, '#00f2f1'],
                        [1, '#7FFF00'],
                    ]
                }
            }, //仪表盘轴线
            axisLabel: {
                show: false
            }, //刻度标签。
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 0
                },
                length: -15
            }, //刻度样式
            splitLine: {
                show: true,
                length: 0,
                lineStyle: {
                    color: 'auto',
                    width: 2
                }
            }, //分隔线样式
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        }, {
            name: '本期',
            type: 'gauge',
            radius: '95%',
            min: 0,
            max: 1,
            center: ['50%', '70%'],
            data: [{
                value: 0.89,
                name: '支部开展率'
            }],
            splitNumber: 4, //刻度数量
            startAngle: 180,
            endAngle: 0,
            z: 5,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 0,
                    color: [
                        [0.2, '#ed3f35'],
                        [0.4, '#F88168'],
                        [0.6, '#ffff00'],
                        [0.8, '#00f2f1'],
                        [1, '#7FFF00'],
                    ]
                }
            }, //仪表盘轴线
            axisLabel: {
                show: true,
                color: '#fff',
                fontSize: 12,
                distance: -35,
                formatter: function (params) {
                    var value = params.toFixed(2)
                    if (value == 0.00) {
                        return '危'
                    } else if (value == 0.25) {
                        return '差'
                    } else if (value == 0.50) {
                        return '中'
                    } else if (value == 0.75) {
                        return '良'
                    } else if (value == 1.00) {
                        return '优'
                    } else {
                        return ''
                    }
                }
            }, //刻度标签。
            axisTick: {
                splitNumber: 10,
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 2
                },
                length: 6,
            }, //刻度样式
            splitLine: {
                show: true,
                length: 12,
                lineStyle: {
                    color: 'auto',
                    width: 1
                }
            }, //分隔线样式

            "itemStyle": {
                "normal": {
                    "color": "#24D8E7" //指针颜色
                }
            },
            pointer: {
                width: 5,
                length: '85%'
            },
            detail: {
                formatter: function (params) {
                    return (params * 100).toFixed(0) + '%'
                },
                fontSize: 14,
                offsetCenter: ['0%', '-50%']
            },
            title: {
                offsetCenter: ['0', '40%'],
                fontSize: 14,
                color: "#fff",
                show: true
            },
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

function dj_2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('dj2'));


    option = {
        tooltip: {
            formatter: "{b}：{c}"
        },
        series: [{
            tooltip: {
                show: false
            },
            "name": 'wrap',
            "type": 'pie',
            "hoverAnimation": false,
            "legendHoverLink": false,
            center: ['50%', '70%'],
            "radius": ['0%', '7%'],
            "z": 5,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
                    "show": false
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 100,
                itemStyle: {
                    normal: {
                        color: "#072B79"
                    },
                    emphasis: {
                        color: "#072B79"
                    }
                }
            }]
        }, {
            tooltip: {
                show: false
            },
            "name": 'wrap',
            "type": 'pie',
            "hoverAnimation": false,
            "legendHoverLink": false,
            center: ['50%', '70%'],
            "radius": ['6%', '8%'],
            "z": 5,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
                    "show": false
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 100,
                itemStyle: {
                    normal: {
                        color: "#24D8E7"
                    },
                    emphasis: {
                        color: "#24D8E7"
                    }
                }
            }]
        }, {
            tooltip: {
                show: false
            },
            name: '刻度',
            type: 'gauge',
            radius: '105%',
            z: 1,
            min: 0,
            max: 1,
            center: ['50%', '70%'],
            splitNumber: 5, //刻度数量
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 4,
                    color: [
                        [0.2, '#ed3f35'],
                        [0.4, '#F88168'],
                        [0.6, '#ffff00'],
                        [0.8, '#00f2f1'],
                        [1, '#7FFF00'],
                    ]
                }
            }, //仪表盘轴线
            axisLabel: {
                show: false
            }, //刻度标签。
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 0
                },
                length: -15
            }, //刻度样式
            splitLine: {
                show: true,
                length: 0,
                lineStyle: {
                    color: 'auto',
                    width: 2
                }
            }, //分隔线样式
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        }, {
            name: '本期',
            type: 'gauge',
            radius: '95%',
            min: 0,
            max: 1,
            center: ['50%', '70%'],
            data: [{
                value: 0.71,
                name: '党员参与率'
            }],
            splitNumber: 4, //刻度数量
            startAngle: 180,
            endAngle: 0,
            z: 5,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 0,
                    color: [
                        [0.2, '#ed3f35'],
                        [0.4, '#F88168'],
                        [0.6, '#ffff00'],
                        [0.8, '#00f2f1'],
                        [1, '#7FFF00'],
                    ]
                }
            }, //仪表盘轴线
            axisLabel: {
                show: true,
                color: '#fff',
                fontSize: 12,
                distance: -35,
                formatter: function (params) {
                    var value = params.toFixed(2)
                    if (value == 0.00) {
                        return '危'
                    } else if (value == 0.25) {
                        return '差'
                    } else if (value == 0.50) {
                        return '中'
                    } else if (value == 0.75) {
                        return '良'
                    } else if (value == 1.00) {
                        return '优'
                    } else {
                        return ''
                    }
                }
            }, //刻度标签。
            axisTick: {
                splitNumber: 10,
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 2
                },
                length: 6,
            }, //刻度样式
            splitLine: {
                show: true,
                length: 12,
                lineStyle: {
                    color: 'auto',
                    width: 1
                }
            }, //分隔线样式

            "itemStyle": {
                "normal": {
                    "color": "#24D8E7" //指针颜色
                }
            },
            pointer: {
                width: 5,
                length: '85%'
            },
            detail: {
                formatter: function (params) {
                    return (params * 100).toFixed(0) + '%'
                },
                fontSize: 14,
                offsetCenter: ['0%', '-50%']
            },
            title: {
                offsetCenter: ['0', '40%'],
                fontSize: 14,
                color: "#fff",
                show: true
            },
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

function dj_3() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('dj3'));

    var placeHolderStyle = {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            color: "rgba(0,0,0,0)",
            borderWidth: 0
        },
        emphasis: {
            color: "rgba(0,0,0,0)",
            borderWidth: 0
        }
    };


    var dataStyle = {
        normal: {
            formatter: '{c}个',
            position: 'center',
            show: true,
            textStyle: {
                fontSize: '14',
                fontWeight: 'normal',
                color: '#ffffff'
            }
        }
    };


    option = {
        title: [{
            text: '党委数',
            left: '20%',
            y: 'bottom',
            textAlign: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: '14',
                color: '#fff',
                textAlign: 'center',
            },
        }, {
            text: '支部数',
            left: '75%',
            y: 'bottom',
            textAlign: 'center',
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: '14',
                textAlign: 'center',
            },
        }],

        //第一个图表
        series: [{
                type: 'pie',
                hoverAnimation: false, //鼠标经过的特效
                radius: ['55%', '75%'],
                center: ['22%', '42%'],
                startAngle: 225,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                    normal: {
                        y: '40%'
                    }
                },
                data: [{
                        value: 100,
                        "itemStyle": {
                            "normal": {
                                "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    "offset": 0,
                                    "color": '#8470FF'
                                }, {
                                    "offset": 1,
                                    "color": '#00FFFF'
                                }]),
                            }
                        },
                    }, {
                        value: 35,
                        itemStyle: placeHolderStyle,
                    },

                ]
            },
            //上层环形配置
            {
                type: 'pie',
                hoverAnimation: false, //鼠标经过的特效
                radius: ['55%', '75%'],
                center: ['22%', '42%'],
                startAngle: 225,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                    normal: {
                        y: '40%'
                    }
                },
                data: [{
                        value: 212,
                        "itemStyle": {
                            "normal": {
                                "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    "offset": 0,
                                    "color": '#8470FF'
                                }, {
                                    "offset": 1,
                                    "color": '#00FFFF'
                                }]),
                            }
                        },
                        label: dataStyle,
                    }, {
                        value: 220,
                        itemStyle: placeHolderStyle,
                    },

                ]
            },


            //第二个图表
            {
                type: 'pie',
                hoverAnimation: false,
                radius: ['55%', '75%'],
                center: ['77%', '42%'],
                startAngle: 225,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                    normal: {
                        y: '40%'
                    }
                },
                data: [{
                        value: 100,
                        "itemStyle": {
                            "normal": {
                                "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    "offset": 0,
                                    "color": '#00FF00'
                                }, {
                                    "offset": 1,
                                    "color": '#ffff00'
                                }]),
                            }
                        },
                    }, {
                        value: 35,
                        itemStyle: placeHolderStyle,
                    },

                ]
            },

            //上层环形配置
            {
                type: 'pie',
                hoverAnimation: false,
                radius: ['55%', '70%'],
                center: ['77%', '42%'],
                startAngle: 225,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                    normal: {
                        y: '40%'
                    }
                },
                data: [{
                        value: 984,
                        "itemStyle": {
                            "normal": {
                                "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    "offset": 0,
                                    "color": '#00FF7F'
                                }, {
                                    "offset": 1,
                                    "color": '#ffff00'
                                }]),
                            }
                        },
                        label: dataStyle,
                    }, {
                        value: 1000,
                        itemStyle: placeHolderStyle,
                    },

                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

function dj_4() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('dj4'));


    let color = ['#ff4343', '#ffff00', '#7fff00', '#00f2f1'];
    let names = ["普通党员", "预备党员", "书记", "委员"];
    let data = [1044, 40, 170, 380];
    let list = [];
    let total = 0;
    for (let i in data) {
        total += data[i]
    }

    let placeHolderStyle = {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 0
        }
    };

    let rich = {
        white: {
            align: 'center',
            padding: [3, 0]
        }
    };

    for (let i in data) {
        list.push({
            value: data[i],
            name: names[i],
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    shadowBlur: 20,
                    borderColor: color[i],
                    shadowColor: color[i],
                    color: color[i]
                }
            }
        }, {
            value: total / 30,
            name: '',
            itemStyle: placeHolderStyle
        })
    }

    let func = (params) => {
        let percent = ((params.value / total) * 100).toFixed(1)
        let name = params.name.replace(/\n/g, '')
        if (params.name !== '') {
            return name + '\n{white|' + percent + '%}'
        } else {
            return ''
        }
    }

    option = {
        title: {
            text: '人员概况',
            left: 'center',
            y: 'bottom',
            textStyle: {
                color: '#fff',
                fontSize: 14
            }
        },
        tooltip: {
            trigger: 'item',
            textStyle: {
                fontSize: 14
            },
            formatter: '{b}:{c}人'
        },
        series: [{
                name: '',
                type: 'pie',
                clockWise: false,
                startAngle: '90',
                center: ['50%', '40%'],
                radius: ['65%', '70%'],
                hoverAnimation: false,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'outside',
                            formatter: func,
                            rich: rich,
                            fontSize: 8,
                            fontWeight: 'bold',
                        },
                        labelLine: {
                            length: 10,
                            length2: 10,
                            show: true,
                            color: '#00ffff',

                        }
                    }
                },
                data: list,
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return idx * 50;
                }
            },
            {
                name: '',
                type: 'pie',
                center: ['50%', '40%'],
                radius: ['49%', '49%'],
                itemStyle: {
                    color: 'transparant'
                },
                tooltip: {
                    show: false
                },
                startAngle: '90',
                data: [{
                    value: total,
                    name: '',
                    label: {
                        normal: {
                            show: true,
                            formatter: "党员人数\n{c|{c}} {b|}人",
                            rich: {
                                c: {
                                    color: '#00f2f1',
                                    fontSize: 14,
                                    fontWeight: 'bold',
                                    lineHeight: 5
                                },
                                b: {
                                    color: '#00f2f1',
                                    fontSize: 10,
                                    lineHeight: 5
                                }
                            },
                            textStyle: {
                                fontSize: 14,
                                fontWeight: 'bold',
                                color: '#00f2f1',
                            },
                            position: 'center'
                        }
                    }
                }]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

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