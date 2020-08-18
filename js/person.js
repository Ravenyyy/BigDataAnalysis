// 心理测询1
function heart() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector("#heart"));
    // 指定配置和数据
    var option = {
        title: {
            text: "无需干预",
            right: "10%",
            textStyle: {
                color: "#7CFC00"
            }
        },
        grid: {
            top: "12%",
            bottom: "12%"
        },
        tooltip: {
            show: true,
            trigger: 'item',
            padding: [5, 10],
            formatter: function (params) {
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
                for (let i = 0; i < parm.length; i++) {
                    obj = obj + '<div style="display: flex;align-items:center;justify-content:space-between;"><span>' + parm[i].name +
                        '：</span><span style="margin-left:5px">' + (params.data.value[i] - 3) + '分</span></div>\n'
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
                value: [3, 3, 3, 3, 3, 3]
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

// 智慧党建1
function dj_1() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector("#dj1"));
    var data = {
        dj1: [
            [85, 90, 98, 89, 82, 91, 88, 97, 90, 93]
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
    var data = {
        dj1: [
            [0, 1, 1, 1]
        ]
    };
    var color = ["#FD866A", "#00f2f1", '#FFE4C4', '#ffff00', '#7fff00', '#00f2f1', '#FD866A', '#9E87FF', '#9ACD32', "#CD4F39"],
        // 指定配置和数据
        option = {
            tooltip: {
                // trigger: 'axis',
                trigger: 'item',
                formatter: "三会一课参与情况<br/>{c}次"
            },
            grid: {
                top: "25%",
                left: "25%",
                right: "10%",
                bottom: "10%",
                // show: true,
                borderColor: "white",
                containLabel: false
            },
            xAxis: {
                type: "category",
                data: ['党员大会', '支委会', '党小组会', '党课'],
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
            yAxis: [{
                name: '三会一课参与情况',
                type: "value",
                // 修饰刻度标签的颜色
                min: 0,
                max: 1,
                interval: 1,
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
                // axisLabel: {
                //     formatter: '{value}'
                // }
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
// function dj_2() {
//     // 实例化对象
//     var myChart = echarts.init(document.querySelector("#dj2"));
//     var xData = ['党员大会', '支委会', '党小组会', '党课'];
//     var yData = ['0', '1', '1', '1'];

//     function rand(m, n) {
//         if (!n) {
//             return Math.floor(Math.random() * m);
//         } else {
//             var c = n - m + 1;
//             return Math.floor(Math.random() * c + m);
//         }
//     }

//     function getMax(arr, key) {
//         var max = 0,
//             len = arr.length;
//         for (var i = 0; i < len; i++) {
//             var item = arr[i][key];
//             if (max < item) max = item;
//         }
//         return max;
//     }

//     function getValArr(arr, key) {
//         var val = [],
//             len = arr.length;
//         for (var i = 0; i < len; i++) {
//             val.push(arr[i][key]);
//         }
//         return val;
//     }

//     var arr = [];
//     for (var i = 0; i < 4; i++) {
//         arr.push({
//             name: xData[i],
//             amount: yData[i] // 采购金额
//         });
//     }

//     var max = getMax(arr, 'amount'),
//         angleAxisData = getValArr(arr, 'name');
//     $.each(arr, function (i, e) {
//         e.value = (e.amount / max * 100).toFixed(2);
//     });
//     // 指定配置和数据
//     option = {
//         tooltip: {
//             trigger: 'item',
//             formatter: '{b}:{c}',
//             textStyle: {
//                 fontSize: 10,
//                 color: '#fff',
//                 fontFamily: 'Microsoft YaHei'
//             }
//         },
//         grid: {
//             top: "1%",
//             left: "10%",
//             right: "15%",
//             bottom: "10%",
//             // show: true,
//             borderColor: "white",
//             containLabel: false
//         },
//         angleAxis: {
//             type: 'category',
//             axisLine: {
//                 lineStyle: {
//                     color: '#6d8a92'
//                 }
//             },
//             axisLabel: {
//                 interval: 0,
//                 fontSize: 11,
//                 color: '#fff',
//                 fontFamily: 'Microsoft YaHei'
//             },
//             axisTick: {
//                 show: false
//             },
//             data: angleAxisData,
//             z: 10
//         },
//         radiusAxis: {
//             max: 100,
//             min: 50,
//             axisTick: {
//                 show: false
//             },
//             axisLine: {
//                 show: true,
//                 lineStyle: {
//                     color: '#6d8a92'
//                 }
//             },
//             axisLabel: {
//                 // formatter: '{value}%',
//                 // textStyle: {
//                 //     fontSize: 11,
//                 //     color: '#61d9fb',
//                 //     fontFamily: 'Microsoft YaHei'
//                 // }
//                 show: false
//             },
//             splitLine: {
//                 show: true,
//                 lineStyle: {
//                     color: '#6d8a92'
//                 }
//             },
//             splitArea: {
//                 areaStyle: {
//                     color: 'transparent'
//                 }
//             }
//         },
//         polar: {
//             center: ['50%', '50%'],
//             radius: '65%',
//         },
//         series: [{
//             type: 'bar',
//             data: arr,
//             itemStyle: {
//                 color: function (params) {
//                     var colorList = ['#5cc6ca', '#d87a7f', '#f5b97f', '#b6a2de'];
//                     return colorList[params.dataIndex];
//                 }
//             },
//             coordinateSystem: 'polar',
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