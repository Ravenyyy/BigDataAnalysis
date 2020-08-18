// 心理测询1
function heart() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector("#heart"));
    // 指定配置和数据
    var option = {
        title:{
          text:"无需干预",
          right: "10%",
          textStyle:{
              color:"#7CFC00"
          }
        },
        grid:{
            top:"12%",
            bottom:"12%"
        },
        tooltip: {
            show: true,
            trigger: 'item',
            padding: [5, 10],
            formatter: function(params) {
              let parm = [{
                    name: '躁狂',
                    max: 10
                },
                {
                    name: '抑郁',
                    max: 10
                },
                {
                    name: '焦虑',
                    max: 10
                },
                {
                    name: '敌对',
                    max: 10
                },
                {
                    name: '强迫',
                    max: 10
                },
                {
                    name: '其他',
                    max: 10
                }
            ]
              let obj = ''
              for (let i=0;i<parm.length;i++) {
                obj =  obj + '<div style="display: flex;align-items:center;justify-content:space-between;"><span>' + parm[i].name 
                + '：</span><span style="margin-left:5px">' + (params.data.value[i]-3) + '分</span></div>\n'
              }
              return params.seriesName + obj
            }
            
        },
        radar: {
            splitNumber: 4,
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    borderRadius: 3,
                    padding: [2, 2]
                }
            },
            indicator: [{
                    name: '躁狂',
                    max: 10
                },
                {
                    name: '抑郁',
                    max: 10
                },
                {
                    name: '焦虑',
                    max: 10
                },
                {
                    name: '敌对',
                    max: 10
                },
                {
                    name: '强迫',
                    max: 10
                },
                {
                    name: '其他',
                    max: 10
                }
            ]
        },
        series: [{
            name: '心理测询',
            type: 'radar',
            areaStyle: {
                normal: {
                    width: 1,
                    opacity: 0.7,
                },
            },
            data: [{
                itemStyle: {
                    normal: {
                        color: '#67abff',
                        lineStyle: {
                            color: '#67abff',
                        },
                    },
                },
                value: [3,3,3,3,3,3]
            }]
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

    var myColor = ['#00FFFF', '#00FFFF', '#00FFFF', '#00FFFF', '#00FFFF'];
    option = {
        grid: {
            left: '6%',
            top: '20%',
            right: '3%',
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
                    fontSize: '14',
                }
            },
            data: ['手机违规使用次数',
                '违规驾驶次数',
                '训练不合格次数',
                '睡眠质量不良次数'
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
            data: ['1', '2', '0', '5']
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
                data: ['1', '2', '0', '5'],
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
                data: [10, 10, 10, 10],
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
                data: [10, 10, 10, 10],
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
    var myChart = echarts.init(document.querySelector("#assess"));

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
            formatter: '{c}',
            position: 'center',
            show: true,
            textStyle: {
                fontSize: '30',
                fontWeight: 'normal',
                color: '#ffffff'
            }
        }
    };

    option = {
        title: {
            text: '本月考核',
            left: '45%',
            bottom: '20%',
            textAlign: 'center',
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: '25',
                textAlign: 'center',
            },
        },
        series:[{
            type: 'pie',
            hoverAnimation: false,
            radius: ['55%', '75%'],
            center: ['45%', '42%'],
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
            center: ['45%', '42%'],
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
                    value: "称职",
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
        }]
    };


    // 3. 把配置和数据给实例对象
    myChart.setOption(option);

    // 重新把配置好的新数据给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
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
            time: "2020-8-17 09:10",
            type: "政治教育",
            content: "考试不及格",
            flag: "最新预警"
        },
        {
            time: "2020-8-16 14:00",
            type: "政治教育",
            content: "未参加学习",
            flag: "最新预警"
        },
        {
            time: "2020-8-16 08:00",
            type: "智慧党建",
            content: "未参加主题党日活动",
            flag: "最新预警"
        },
        {
            time: "2020-8-15 12:20",
            type: "智慧党建",
            content: "参加主题党日活动",
            flag: "最新预警"
        },
        {
            time: "2020-8-15 10:00",
            type: "心理测询",
            content: "心理测询异常",
            flag: "最新预警"
        },
        {
            time: "2020-8-15 12:20",
            type: "智慧党建",
            content: "参加主题党日活动",
            flag: "最新预警"
        },
    ];
    var tr = "";
    for (var i = 0; i < dataArray.length; i++) {
        tr = tr + '<tr>' +
            "<td class=\"tb_time\">" + dataArray[i].time + "</td>" +
            "<td class=\"tb_type\">" + dataArray[i].type + "</td>" +
            "<td class=\"tb_content\">" + dataArray[i].content + "</td>" +
            '</tr>';
    }
    $('#wn_tb1').append(tr);
}

function tb_wn2() {
    var dataArray = [{
            time: "2020-8-17 10:00",
            type: "心理测询",
            content: "心理测询异常",
            flag: "最新预警"
        },
        {
            time: "2020-8-16 08:00",
            type: "智慧党建",
            content: "未参加主题党日活动",
            flag: "最新预警"
        },
        {
            time: "2020-8-15 13:00",
            type: "心理测询",
            content: "睡眠质量一直不良",
            flag: "最新预警"
        },
        {
            time: "2020-8-15 14:00",
            type: "政治教育",
            content: "未参加学习",
            flag: "最新预警"
        },
        {
            time: "2020-8-16 08:00",
            type: "智慧党建",
            content: "未参加主题党日活动",
            flag: "最新预警"
        },
        {
            time: "2020-8-15 10:00",
            type: "心理测询",
            content: "心理测询异常",
            flag: "最新预警"
        }
    ];
    var tr = "";
    for (var i = 0; i < dataArray.length; i++) {
        tr = tr + '<tr>' +
            "<td class=\"tb_time\">" + dataArray[i].time + "</td>" +
            "<td class=\"tb_type\">" + dataArray[i].type + "</td>" +
            "<td class=\"tb_content\">" + dataArray[i].content + "</td>" +
            '</tr>';
    }
    $('#wn_tb2').append(tr);
}

function assess_tb() {
    var dataArray = [{
            name: "巡查",
            content: "管控区域"
        },
        {
            name: "训练",
            content: "工作内容"
        },
        {
            name: "执行任务",
            content: "出警执行任务"
        },
        {
            name: "执行任务",
            content: "工作内容"
        },
        {
            name: "训练",
            content: "心理测询"
        }
    ];
    var tr = "";
    for (var i = 0; i < dataArray.length; i++) {
        tr = tr + '<tr>' +
            "<td>" + (i+1) + "</td>" +
            "<td>" + dataArray[i].name + "</td>" +
            "<td>" + dataArray[i].content + "</td>" +
            '</tr>';
    }
    $('#assess_tb').append(tr);
}