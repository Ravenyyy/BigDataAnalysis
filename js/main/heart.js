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
      text: `98`,
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
    url: 'http://localhost:8880/psyUnit/getPsyUnit',
    traditional: true,
    data: {
      unitId: localStorage.getItem("unitId"),
      month: localStorage.getItem("month")
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
