// 心理测询1
function heart_1 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#heart_1"));
  var value = 82;
  // 指定配置和数据
  var option = {
    color: ["#ff9d6f", "#00f2f1"],
    title: {
      text: takePeopleNumber,
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
function heart_2 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#heart_2"));
  var value = 82;
  // 指定配置和数据
  var option = {
    color: ["#ff9d6f", "#00f2f1"],
    title: {
      text: checkPeopleNumber,
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
function heart_3 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#heart_3"));
  // 指定配置和数据
  var colorList = ['#FF6EB4', '#ffff00', '#7fff00', '#00f2f1', '#FD866A', '#9E87FF', '#58D5FF'];
  option = {
    title: {
      text: '异常人数\n' + problemNum,
      x: 'center',
      y: '39%',
      // subtext: '301',
      textStyle: {
        color: '#ffff00',
        fontSize: 14,
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
      radius: ['50%', '65%'],
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
            length: 5,
            length2: 5,
            show: true,
            color: '#00ffff',

          }
        }
      },
      data: [{
        'name': '躁狂',
        'value': irritable
      }, {
        'name': '强迫',
        'value': force
      }, {
        'name': '其他',
        'value': other
      }, {
        'name': '抑郁',
        'value': depressive
      }, {
        'name': '敌对',
        'value': hostile
      }, {
        'name': '焦虑',
        'value': anxious
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
function heart_4 () {
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
      radius: [0, '70%'],
      label: {
        normal: {
          position: 'outer',
          formatter: "{b}: \n   {c}人",
          textStyle: {
            fontSize: 16
          },
        }
      },
      labelLine: {
        length: 5,
        length2: 5,
        show: true,
        color: '#00ffff',

      },
      data: [{
        'name': '正在干预',
        'value': onTreat
      }, {
        'name': '已干预',
        'value': hasTreat
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
function edu_1 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#edu_1"));
  // 指定配置和数据
  option = {
    color: ['#FD866A', '#9E87FF', '#ff4343'],
    title: {
      text: '课程完成情况占比',
      x: 'center',
      y: '85%',
      textStyle: {
        color: 'white',
        fontSize: 11,
      },
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
        'value': allClass
      }, {
        'name': '正在学习',
        'value': isNowClass
      }, {
        'name': '未学习',
        'value': notTakeClass
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
function edu_2 () {
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
      hoverOffset: 15,
      startAngle: '145',
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
        'value': notTakeExamNum
      }, {
        'name': '已考试',
        'value': takeExamNum
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
function edu_3 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#edu_3"));
  // 指定配置和数据
  option = {
    color: ["#FD866A", "#00f2f1"],
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      top: "8%",
      left: "10%",
      right: "6%",
      bottom: "2%",
      // show: true,
      borderColor: "white",
      containLabel: true
    },
    xAxis: {
      type: "category",
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
      barWidth: '55%',
      data: averageList
    }]
  };
  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });

}

//智慧营区
function smart () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('smart'));

  var myColor = ['#00FFFF', '#00FFFF', '#00FFFF', '#00FFFF', '#00FFFF'];
  option = {
    grid: {
      left: '16%',
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
      data: ['114', '145', '101', '70']
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
function assess_1 () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector("#assess_1"));

  let title = '总人数';
  let color = ['#7FFF00', '#FF8352', '#E271DE', '#FFFF00', '#00FFFF'];
  let echartData = [{
    name: "优秀",
    value: excellent
  },
  {
    name: "称职",
    value: good
  },
  {
    name: "基本称职",
    value: pass
  },
  {
    name: "不称职",
    value: notPass
  },
  {
    name: "未参评",
    value: notJoin
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
      },
      label: {
        fontSize: 16
      }

    }]
  };

  // 3. 把配置和数据给实例对象
  myChart.setOption(option);

  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

//全员考核的表格
function assess_2 () {

  personArr.sort(function (a, b) {
    return b.score - a.score
  });
  console.log(personArr);
  var tr = "";
  var length = personArr.length > 10 ? 10 : personArr.length
  for (var i = 0; i < personArr.length; i++) {
    tr = tr + '<tr>' +
      "<td>" + (i + 1) + "</td>" +
      "<td>" + personArr[i].uname + "</td>" +
      "<td>" + personArr[i].score + "</td>" +
      '</tr>';
  }
  $('#asswss_tb').append(tr);
  addAssessTableClick("asswss_tb")
}

function addAssessTableClick (tableName) {
  $("#" + tableName + " > tbody tr").each(function (trindex, tritem) {
    $(tritem).click(function () {
      localStorage.setItem("personId", personArr[trindex - 1].uid)
      console.log(localStorage.getItem("personId"));
      window.location.href = "person.html"
    })
  })
}

// 智慧党建1
function dj_1 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#dj1"));
  var data = {
    dj1: [
      ssld
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
        left: "27%",
        right: "8%",
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
          fontSize: 12
        },
      },
      xAxis: [{
        // name: '开展情况',
        type: "value",
        // 修饰刻度标签的颜色
        min: 0,
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
function dj_2 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#dj2"));
  var xData = ['党员大会', '支部会', '党小组会', '党课'];
  var yData = zzsh;

  function getValArr (arr, key) {
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

  angleAxisData = getValArr(arr, 'name');
  $.each(arr, function (i, e) {
    e.value = e.amount;
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
      left: "15%",
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
        fontSize: 15,
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
        // },
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


// function tb_wn1() {
//   var dataArray = [{
//       name: "翁超",
//       time: "2020-8-17 09:10",
//       type: "政治教育",
//       content: "考试不及格",
//       flag: "最新预警"
//     },
//     {
//       name: "刘彦淇",
//       time: "2020-8-16 14:00",
//       type: "政治教育",
//       content: "未参加学习",
//       flag: "最新预警"
//     },
//     {
//       name: "王功行",
//       time: "2020-8-15 12:20",
//       type: "智慧党建",
//       content: "未参加主题党日活动",
//       flag: "最新预警"
//     },
//     {
//       name: "文军",
//       time: "2020-8-15 10:00",
//       type: "心理测询",
//       content: "心理测询异常",
//       flag: "最新预警"
//     },
//     {
//       name: "赵章全",
//       time: "2020-8-12 09:00",
//       type: "全员考核",
//       content: "本月被评定为不称职",
//       flag: "最新预警"
//     },
//     {
//       name: "王锦巍",
//       time: "2020-8-09 13:00",
//       type: "心理测询",
//       content: "睡眠质量一直不良",
//       flag: "最新预警"
//     },
//     {
//       name: "李玉潇",
//       time: "2020-8-09 15:00",
//       type: "全员考核",
//       content: "本月训练不合格",
//       flag: "最新预警"
//     }
//   ];
//   var tr = "";
//   for (var i = 0; i < dataArray.length; i++) {
//     tr = tr + '<tr>' +
//       "<td class=\"tb_zhidui\">" + dataArray[i].name + "</td>" +
//       "<td class=\"tb_time\">" + dataArray[i].time + "</td>" +
//       "<td class=\"tb_type\">" + dataArray[i].type + "</td>" +
//       "<td class=\"tb_content\">" + dataArray[i].content + "</td>" +
//       '</tr>';
//   }
//   $('#wn_tb1').append(tr);
// }

// function tb_wn2() {
//   var dataArray = [{
//       name: "史意芳",
//       time: "2020-8-17 10:00",
//       type: "心理测询",
//       content: "心理测询异常",
//       flag: "最新预警"
//     },
//     {
//       name: "潘栋",
//       time: "2020-8-17 09:10",
//       type: "政治教育",
//       content: "考试不及格",
//       flag: "最新预警"
//     },
//     {
//       name: "余峰",
//       time: "2020-8-16 08:00",
//       type: "智慧党建",
//       content: "未参加主题党日活动",
//       flag: "最新预警"
//     },
//     {
//       name: "曹雷",
//       time: "2020-8-15 13:00",
//       type: "心理测询",
//       content: "睡眠质量一直不良",
//       flag: "最新预警"
//     },
//     {
//       name: "何予栋",
//       time: "2020-8-15 14:00",
//       type: "政治教育",
//       content: "本月还未参加学习",
//       flag: "最新预警"
//     },
//     {
//       name: "孙小康",
//       time: "2020-8-13 08:00",
//       type: "全员考核",
//       content: "未参加全员考核",
//       flag: "最新预警"
//     },
//     {
//       name: "谌基海",
//       time: "2020-8-12 09:00",
//       type: "全员考核",
//       content: "本月被评定为不称职",
//       flag: "最新预警"
//     },
//     {
//       name: "张云",
//       time: "2020-8-09 15:00",
//       type: "全员考核",
//       content: "本月训练不合格",
//       flag: "最新预警"
//     },

//   ];
//   var tr = "";
//   for (var i = 0; i < dataArray.length; i++) {
//     tr = tr + '<tr>' +
//       "<td class=\"tb_zhidui\">" + dataArray[i].name + "</td>" +
//       "<td class=\"tb_time\">" + dataArray[i].time + "</td>" +
//       "<td class=\"tb_type\">" + dataArray[i].type + "</td>" +
//       "<td class=\"tb_content\">" + dataArray[i].content + "</td>" +
//       '</tr>';
//   }
//   $('#wn_tb2').append(tr);
// }



let ssld = []
let zzsh = []
let excellent = 0
let good = 0
let pass = 0
let notPass = 0
let notJoin = 0

let personArr = []

function getDjData () {
  $.ajax({
    type: 'GET',
    url: localStorage.getItem("url") + 'partyBuildUnit/getPartyBuildUnit',
    traditional: true,
    data: {
      unitId: localStorage.getItem("unitId"),
      month: localStorage.getItem("month"),
    },
    success: function (response) {
      let partyBuild = response.extra.partyBuildUnit
      ssld.push(partyBuild.jndfDevelopRate * 100)
      ssld.push(partyBuild.cwscDevelopRate * 100)
      ssld.push(partyBuild.sddzDevelopRate * 100)
      ssld.push(partyBuild.jzxxDevelopRate * 100)
      ssld.push(partyBuild.mzysDevelopRate * 100)
      ssld.push(partyBuild.tssjDevelopRate * 100)
      ssld.push(partyBuild.dyhbDevelopRate * 100)
      ssld.push(partyBuild.mzjdDevelopRate * 100)
      ssld.push(partyBuild.jfkpDevelopRate * 100)
      ssld.push(partyBuild.zzshDevelopRate * 100)

      zzsh.push(partyBuild.dydhDevelopRate * 100)
      zzsh.push(partyBuild.zwhDevelopRate * 100)
      zzsh.push(partyBuild.dzxhDevelopRate * 100)
      zzsh.push(partyBuild.dkDevelopRate * 100)


      dj_1();
      dj_2();
    },
    error: function (response) {
      console.log(response);
    }
  })
}

function getSmartData () {
  smart();
}
function tb_hots(){
  var dataArray = [{
    name: "中国",
    num: 633,
    users: 100
  },{
    name: "时代",
    num: 615,
    users: 80
  },{
    name: "习主席",
    num: 592,
    users: 112
  },{
    name: "武警",
    num: 466,
    users: 70
  },{
    name: "娱乐",
    num: 397,
    users: 90
  },{
    name: "王者荣耀",
    num: 284,
    users: 21
  },{
    name: "篮球",
    num: 166,
    users: 155
  },{
    name: "足球",
    num: 133,
    users: 99
  },{
    name: "消防",
    num: 98,
    users: 144
  },{
    name: "管控",
    num: 60,
    users: 78
  },
  ];

  var tr = "";
  for (var i = 0; i < dataArray.length; i++) {
    tr = tr + '<tr>' +
        "<td>" + (i+1) + "</td>" +
        "<td>" + dataArray[i].name + "</td>" +
        "<td>" + dataArray[i].num + "</td>" +
        "<td>" + dataArray[i].users + "</td>" +
        '</tr>';
  }
  $('#hots_tb').append(tr);
}

function tb_sens(){
  var dataArray = [{
    name: "喝酒",
    num: 413,
    users: 20
  },{
    name: "赌球",
    num: 299,
    users: 12
  },{
    name: "抽烟",
    num: 182,
    users: 11
  },{
    name: "借钱",
    num: 108,
    users: 7
  },{
    name: "请假",
    num: 99,
    users: 9
  },{
    name: "游戏",
    num: 78,
    users: 2
  },{
    name: "翘班",
    num: 66,
    users: 15
  },{
    name: "上网",
    num: 53,
    users: 9
  },{
    name: "通宵",
    num: 48,
    users: 14
  },{
    name: "消极",
    num: 40,
    users: 7
  },
  ];

  var tr = "";
  for (var i = 0; i < dataArray.length; i++) {
    tr = tr + '<tr>' +
        "<td>" + (i+1) + "</td>" +
        "<td>" + dataArray[i].name + "</td>" +
        "<td>" + dataArray[i].num + "</td>" +
        "<td>" + dataArray[i].users + "</td>" +
        '</tr>';
  }
  $('#sens_tb').append(tr);
}
function tb_wn1 () {
  var dataArray = [{}]
  $.ajax({
    type: 'GET',
    url: localStorage.getItem("url") + 'warning/getWarningByStation',
    data: {
      id: localStorage.getItem("unitId"),
      resolutionType: 0
    },
    success: function (response) {
      dataArray = response.extra.warningList
      console.log(dataArray)
      var tr = "";
      for (var i = 0; i < dataArray.length; i++) {
        var date = new Date(dataArray[i].createTime)
        var Y = date.getFullYear() + '-'
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
        var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
        var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
        var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
        console.log(Y + M + D + h + m + s)
        tr = tr + '<tr>' +
          "<td class=\"tb_zhidui\">" + dataArray[i].name + "</td>" +
          "<td class=\"tb_time\">" + Y + M + D + h + m + s + "</td>" +
          "<td class=\"tb_type\">" + dataArray[i].warning + "</td>" +
          "<td class=\"tb_content\">" + dataArray[i].content + "</td>" +
          '</tr>';
      }
      $('#wn_tb1').append(tr);
      addTableClick("wn_tb1", dataArray);
    },
    error: function (response) {
      console.log(response);
    }
  })
}

function tb_wn2 () {
  var dataArray = [{}]
  $.ajax({
    type: 'GET',
    url: localStorage.getItem("url") + 'warning/getWarningByStation',
    data: {
      id: localStorage.getItem("unitId"),
      resolutionType: 1
    },
    success: function (response) {
      dataArray = response.extra.warningList
      console.log(dataArray)
      var tr = "";
      for (var i = 0; i < dataArray.length; i++) {
        var date = new Date(dataArray[i].createTime)
        var Y = date.getFullYear() + '-'
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
        var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
        var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
        var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
        console.log(Y + M + D + h + m + s)
        tr = tr + '<tr>' +
          "<td class=\"tb_zhidui\">" + dataArray[i].name + "</td>" +
          "<td class=\"tb_time\">" + Y + M + D + h + m + s + "</td>" +
          "<td class=\"tb_type\">" + dataArray[i].warning + "</td>" +
          "<td class=\"tb_content\">" + dataArray[i].content + "</td>" +
          '</tr>';
      }
      $('#wn_tb2').append(tr);
      addTableClick("wn_tb2", dataArray);

    },
    error: function (response) {
      console.log(response);
    }
  })
}

function tb_wn3 () {
  var dataArray = [{}]
  $.ajax({
    type: 'GET',
    url: localStorage.getItem("url") + 'warning/getWarningByStation',
    data: {
      id: localStorage.getItem("unitId"),
      resolutionType: 2
    },
    success: function (response) {
      dataArray = response.extra.warningList
      console.log(dataArray)
      var tr = "";
      for (var i = 0; i < dataArray.length; i++) {
        var date = new Date(dataArray[i].createTime)
        var Y = date.getFullYear() + '-'
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
        var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
        var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
        var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
        console.log(Y + M + D + h + m + s)
        tr = tr + '<tr>' +
          "<td class=\"tb_zhidui\">" + dataArray[i].name + "</td>" +
          "<td class=\"tb_time\">" + Y + M + D + h + m + s + "</td>" +
          "<td class=\"tb_type\">" + dataArray[i].warning + "</td>" +
          "<td class=\"tb_content\">" + dataArray[i].content + "</td>" +
          '</tr>';
      }
      $('#wn_tb3').append(tr);
      addTableClick("wn_tb3", dataArray);

    },
    error: function (response) {
      console.log(response);
    }
  })
}

function addTableClick (tableName, dataArray) {
  $("#" + tableName + " > tbody tr").each(function (trindex, tritem) {

    $(tritem).click(function () {

      if (tableName == "wn_tb1") {
        $(".modal-body > p").text("最新待处理风险预警信息")
      } else {
        $(".modal-body > p").text("正在处理风险预警信息")
      }
      document.getElementById("simpleModal").style.display = "block";
      var tdContent = dataArray[trindex - 1]
      localStorage.setItem('warningUser', tdContent.id)
      console.log(tdContent)
      $('#modal-ul').find("li").each(function (index, item) {
        console.log(item);
        if (index == 0) {
          $(item).text("来源：" + tdContent.warning)
        } else if (index == 1) {
          $(item).text("详情：" + tdContent.content)
        } else if (index == 2) {
          $(item).text("状态：" + tdContent.typeName)
        }
      })
    })
  })
}

function submitData (resolution, resolutionType) {
  var userId = localStorage.getItem('warningUser');
  console.log(userId)
  console.log(resolutionType)
  console.log(resolution)
  $.ajax({
    type: 'PUT',
    url: localStorage.getItem("url") + 'warning/updateWarningType',
    data: {
      id: userId,
      resolutionType: resolutionType,
      resolution: resolution,
    },
    success: function (response) {
      location.reload();
    },
    error: function (response) {
      console.log(response);
    }
  })
}

function getAssessData () {
  $.ajax({
    type: 'GET',
    url: localStorage.getItem("url") + 'assessUnit/getAssessUnit',
    traditional: true,
    data: {
      unitId: localStorage.getItem("unitId"),
      month: localStorage.getItem("month"),
    },
    success: function (response) {
      let unit = response.extra.assessmentUnit
      excellent = unit.excellent
      good = unit.good
      pass = unit.pass
      notPass = unit.nopass
      notJoin = unit.total - excellent - good - pass - notPass

      assess_1();
    },
    error: function (response) {
      console.log(response);
    }
  })

  $.ajax({
    type: 'GET',
    url: localStorage.getItem("url") + 'assessPerson/getAssessPersonByUnit',
    traditional: true,
    data: {
      unitId: localStorage.getItem("unitId"),
      month: localStorage.getItem("month"),
    },
    success: function (response) {
      let personList = response.extra.personList

      for (let i = 0; i < personList.length; i++) {
        if (personList[i].isStart == 2) {
          personList[i].score = 0
        }
        personArr.push(personList[i])
      }

      assess_2();
    },
    error: function (response) {
      console.log(response);
    }
  })

}


let takePeopleNumber = 0;
let checkPeopleNumber = 0;
let problemNum = 0;
let anxious = 0;
let hostile = 0;
let depressive = 0;
let irritable = 0;
let force = 0;
let other = 0;
let onTreat = 0;
let hasTreat = 0;

function getHeartData () {
  $.ajax({
    type: 'GET',
    url: localStorage.getItem("url") + 'psyUnit/getPsyUnit',
    traditional: true,
    data: {
      unitId: localStorage.getItem("unitId"),
      month: localStorage.getItem("month"),
    },
    success: function (response) {
      takePeopleNumber = response.extra.psyUnit.testNum;
      checkPeopleNumber = response.extra.psyUnit.psychologist;
      problemNum = response.extra.psyUnit.problemNum;
      anxious = response.extra.psyUnit.anxious;
      hostile = response.extra.psyUnit.hostile;
      depressive = response.extra.psyUnit.depressive;
      irritable = response.extra.psyUnit.irritable;
      force = response.extra.psyUnit.force;
      other = response.extra.psyUnit.other;
      onTreat = response.extra.psyUnit.onTreat;
      hasTreat = response.extra.psyUnit.hasTreat;
      heart_1();
      heart_2();
      heart_3();
      heart_4();
    },
    error: function (response) {
      console.log(response);
    }
  })
}

let averageList = [];
let takeExamNum = 0;
let notTakeExamNum = 0;
let notTakeClass = 0;
let allClass = 0;
let isNowClass = 0;

function getEduData () {
  $.ajax({
    type: 'GET',
    url: localStorage.getItem("url") + 'educationPerson/getAverageByLevel',
    traditional: true,
    data: {
      unitId: localStorage.getItem("unitId"),
      month: localStorage.getItem("month"),
    },
    success: function (response) {
      console.log(response)
      averageList = response.extra.list;
      edu_3();
    },
    error: function (response) {
      console.log(response);
    }
  })
  $.ajax({
    type: 'GET',
    url: localStorage.getItem("url") + 'educationPerson/getTakeExamNum',
    traditional: true,
    data: {
      unitId: localStorage.getItem("unitId"),
      month: localStorage.getItem("month"),
    },
    success: function (response) {
      console.log(response)
      takeExamNum = response.extra.takeNum;
      notTakeExamNum = response.extra.allNUm - response.extra.takeNum;
      edu_2();
      edu_3();
    },
    error: function (response) {
      console.log(response);
    }
  })
  $.ajax({
    type: 'GET',
    url: localStorage.getItem("url") + 'educationPerson/getClassNum',
    traditional: true,
    data: {
      unitId: localStorage.getItem("unitId"),
      month: localStorage.getItem("month"),
    },
    success: function (response) {
      console.log(response)
      notTakeClass = response.extra.notTakeClass;
      allClass = response.extra.allClass;
      isNowClass = response.extra.isNowClass;
      edu_1();
    },
    error: function (response) {
      console.log(response);
    }
  })
}