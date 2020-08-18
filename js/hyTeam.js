// 心理测询1
function heart_1() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector("#heart_1"));
    var value = 82;
    // 指定配置和数据
    var option = {
        color: ["#ff9d6f", "#00f2f1"],
        title: {
            text: `120`,
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
            text: `5`,
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
    var colorList = ['#FF6EB4', '#ffff00', '#7fff00', '#00f2f1', '#FD866A', '#9E87FF', '#58D5FF'];
    option = {
        title: {
            text: '异常人数\n6',
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
                        length: 3,
                        length2: 10,
                        show: true,
                        color: '#00ffff',

                    }
                }
            },
            data: [{
                'name': '躁狂',
                'value': 1
            }, {
                'name': '抑郁',
                'value': 2
            }, {
                'name': '敌对',
                'value': 0
            }, {
                'name': '焦虑',
                'value': 1
            }, {
                'name': '强迫',
                'value': 1
            }, {
                'name': '其他',
                'value': 1
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
                    'value': 4
                }, {
                    'name': '已干预',
                    'value': 2
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
            [100, 99, 92, 100, ],
            [95.1, 92.2, 89.2, 97.5]
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
            borderColor: "white",
            containLabel: false
        },
        xAxis: {
            type: "category",
            boundaryGap: false,
            axisPointer: {
                type: 'shadow'
            },
            data: [
                "晴川",
                "七里庙",
                "墨水湖",
                "黄金口"
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
                min: 60,
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
                min: 60,
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

    var myColor = ['#00FFFF', '#00FFFF', '#00FFFF', '#00FFFF', '#00FFFF'];
    option = {
        grid: {
            left: '6%',
            top: '20%',
            right: '0%',
            bottom: '8%',
            containLabel: true
        },
        xAxis: [{
            show: false,
        }],
        yAxis: [{
            axisTick: 'none',
            axisLine: 'none',
            offset: '27',
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '18',
                }
            },
            data: ['手机违规使用人数',
                '违规驾驶人数',
                '训练不合格人数',
                '睡眠质量不良人数'
            ]
        }, {
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '16',
                }
            },
            data: ['4', '6', '3', '1']
        }, {
            name: '',
            nameGap: '50',
            nameTextStyle: {
                color: '#ffffff',
                fontSize: '16',
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [],
        }],
        series: [{
                name: '条',
                type: 'bar',
                yAxisIndex: 0,
                data: ['114', '145', '101', '70'],
                barWidth: 8,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex % num]
                        },
                    }
                },
                z: 2
            }, {
                name: '白框',
                type: 'bar',
                yAxisIndex: 1,
                barGap: '-100%',
                data: [149, 149, 149, 149],
                barWidth: 12,
                itemStyle: {
                    normal: {
                        color: '#0e2147',
                        barBorderRadius: 5,
                    }
                },
                z: 1
            }, {
                name: '外框',
                type: 'bar',
                yAxisIndex: 2,
                barGap: '-100%',
                data: [150, 150, 150, 150],
                barWidth: 18,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex % num]
                        },
                        barBorderRadius: 5,
                    }
                },
                z: 0
            },
            {
                name: '外圆',
                type: 'scatter',
                hoverAnimation: false,
                data: [0, 0, 0, 0],
                yAxisIndex: 2,
                symbolSize: 26,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex % num]
                        },
                        opacity: 1,
                    }
                },
                z: 2
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

    option = {
        color: ["#ed3f35", "#BBFFFF", "#4EEE94", "#FAD860"],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            top: '0',
            data: ['优秀', '称职', '基本称职', '不称职'],
            textStyle: {
                color: "white"
            }
        },
        grid: {
            top: '10%',
            left: '3%',
            right: '5%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: [
                "晴川",
                "七里庙",
                "墨水湖",
                "黄金口"
            ],
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
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: "white"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,0.1)",
                }
            }
        },
        series: [{
                name: '优秀',
                type: 'bar',
                barWidth: '40%',
                stack: '总量',
                data: [6, 4, 3, 4],

            },
            {
                name: '称职',
                type: 'bar',
                barWidth: '40%',
                stack: '总量',
                data: [3, 6, 2, 4],

            },
            {
                name: '基本称职',
                type: 'bar',
                barWidth: '40%',
                stack: '总量',
                data: [2, 3, 6, 4],

            },
            {
                name: '不称职',
                type: 'bar',
                barWidth: '40%',
                stack: '总量',
                data: [4, 2, 2, 4],

            }
        ]
    };


    // 3. 把配置和数据给实例对象
    myChart.setOption(option);

    myChart.on('click', function(params){
        if(params.dataIndex == 1){
            window.location = 'station.html'
        }
    })


    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

//全员考核的两个数字仪表盘
function assess_2() {

    option = {
        title: {
            text: '',
            x: 'center',
            y: 'center',
            textStyle: {
                rich: {
                    a: {
                        fontSize: 19,
                        color: '#ffffff'
                    },
                    c: {
                        fontSize: 12,
                        color: '#ffffff',
                        padding: [3, 3]
                    },

                }
            }
        },
        grid: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        },
        series: [{
            type: 'gauge',
            radius: '90%',
            clockwise: false,
            startAngle: '90',
            endAngle: '-269.9999',
            //调整间隔距离
            splitNumber: 0,
            detail: {
                offsetCenter: [0, -20],
                formatter: ' '
            },
            pointer: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [0, '#468EFD'],
                        //计算比例
                        [0.7622, 'rgba(32,187,252,0.15)'],

                        [1, '#00F5FF']
                    ],
                    width: 6
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 0,
                lineStyle: {
                    width: 6
                }
            },
            axisLabel: {
                show: false
            }
        }]
    };

    let value = 54.1;
    let title = '支部开展率';

    option.title.text = '{a|' + value + '%}\n{c|' + title + '}'
    var myChart1 = echarts.init(document.querySelector("#assess_2"));
    // 3. 把配置和数据给实例对象
    myChart1.setOption(option);
    window.addEventListener("resize", function () {
        myChart1.resize();
    });

    value = 91
    title = '人员参与率'
    option.title.text = '{a|' + value + '%}\n{c|' + title + '}'
    var myChart2 = echarts.init(document.querySelector("#assess_3"));
    // 3. 把配置和数据给实例对象
    myChart2.setOption(option);
    window.addEventListener("resize", function () {
        myChart2.resize();
    });

    value = 16
    title = '优秀人数'
    option.title.text = '{a|' + value + '}\n{c|' + title + '}'
    var myChart3 = echarts.init(document.querySelector("#assess_4"));
    // 3. 把配置和数据给实例对象
    myChart3.setOption(option);
    window.addEventListener("resize", function () {
        myChart3.resize();
    });

    value = 2
    title = '不称职人数'
    option.title.text = '{a|' + value + '}\n{c|' + title + '}'
    var myChart4 = echarts.init(document.querySelector("#assess_5"));
    // 3. 把配置和数据给实例对象
    myChart4.setOption(option);
    window.addEventListener("resize", function () {
        myChart4.resize();
    });

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
                value: 0.69,
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
                fontSize: 14,
                distance: -38,
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
                fontSize: 16,
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
                value: 0.69,
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
                fontSize: 14,
                distance: -38,
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
                fontSize: 16,
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
                fontSize: '18',
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
                fontSize: '16',
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
                fontSize: '16',
                textAlign: 'center',
            },
        }],

        //第一个图表
        series: [{
                type: 'pie',
                hoverAnimation: false, //鼠标经过的特效
                radius: ['60%', '80%'],
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
                radius: ['60%', '80%'],
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
                        value: 5,
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
                radius: ['60%', '80%'],
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
                radius: ['60%', '80%'],
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
                        value: 29,
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


    let color = ['#FF6EB4', '#ffff00', '#7fff00', '#00f2f1'];
    let names = ["预备党员", "书记", "委员", "普通党员"];
    let data = [17, 10, 15, 226];
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
                fontSize: 16
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
                startAngle: '160',
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
                            fontSize: 14,
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
                            formatter: "党员人数\n{c|{c}} {b|}",
                            rich: {
                                c: {
                                    color: '#00f2f1',
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    lineHeight: 5
                                },
                                b: {
                                    color: '#00f2f1',
                                    fontSize: 16,
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
            name: "晴川站",
            time: "2020-8-17 8:20",
            type: "政治教育",
            content: "晴川站本月1人考试不及格",
            flag: "最新预警"
        },
        {
            name: "墨水湖站",
            time: "2020-8-16 12:00",
            type: "智慧党建",
            content: "墨水湖站有2人本月尚未参加主题党日活动",
            flag: "最新预警"
        },
        {
            name: "墨水湖站",
            time: "2020-8-15 11:00",
            type: "心理测询",
            content: "墨水湖站有2人心理测询异常",
            flag: "最新预警"
        },
        {
            name: "七里庙站",
            time: "2020-8-12 9:00",
            type: "全员考核",
            content: "七里庙站有1人本月被评定为不称职",
            flag: "最新预警"
        },
        {
            name: "黄金口站",
            time: "2020-8-09 12:00",
            type: "心理测询",
            content: "黄金口站有1人睡眠质量一直不良",
            flag: "最新预警"
        },
        {
            name: "七里庙站",
            time: "2020-8-09 11:00",
            type: "全员考核",
            content: "七里庙站有1人本月训练不合格",
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
            name: "墨水湖站",
            time: "2020-8-17 9:00",
            type: "心理测询",
            content: "墨水湖站有1人心理测询异常",
            flag: "最新预警"
        },
        {
            name: "黄金口站",
            time: "2020-8-16 11:10",
            type: "政治教育",
            content: "黄金口站本月2人考试不及格",
            flag: "最新预警"
        },
        {
            name: "晴川站",
            time: "2020-8-15 11:00",
            type: "心理测询",
            content: "晴川站有1人睡眠质量一直不良",
            flag: "最新预警"
        },
        {
            name: "七里庙站",
            time: "2020-8-15 12:30",
            type: "政治教育",
            content: "七里庙站本月还有2人未参加学习",
            flag: "最新预警"
        },
        {
            name: "七里庙站",
            time: "2020-8-14 12:20",
            type: "智慧党建",
            content: "七里庙站有1人本月尚未参加主题党日活动",
            flag: "最新预警"
        },
        {
            name: "晴川站",
            time: "2020-8-11 12:00",
            type: "全员考核",
            content: "晴川站有2人本月被评定为不称职",
            flag: "最新预警"
        },
        {
            name: "墨水湖站",
            time: "2020-8-08 15:00",
            type: "全员考核",
            content: "墨水湖站有1人本月训练不合格",
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
    $('#wn_tb2').append(tr);
}