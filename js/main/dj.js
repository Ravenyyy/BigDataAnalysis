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
        value: zbkzRate,
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
        value: dycyRate,
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
            value: dwNum,
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
            value: dzbNum,
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
  let names = ["书记", "副书记", "委员", "普通党员"];
  let data = dyNum;
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
        fontWeight: 'normal',
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
        startAngle: '45',
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
              length2: 15,
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

let zbkzRate = 0;
let dycyRate = 0;
let dwNum = 0;
let dzbNum = 0;
let dyNum = [];

function getPartyBuildData() {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:8880/partyBuildUnit/getPartyBuildUnit',
    traditional: true,
    data: {
      unitId: 1,
      month: '2020-09'
    },
    success: function (response) {
      dataProcess(response);
      dj_1();
      dj_2();
      dj_3();
      dj_4();
    },
    error: function (response) {
      console.log(response);
    }
  })
}

function dataProcess(response) {
  let partyBuild = response.extra.partyBuildUnit
  dwNum = partyBuild.dwMun
  dzbNum = partyBuild.dzbMun
  dyNum.push(partyBuild.secretary)
  dyNum.push(partyBuild.depSecretary)
  dyNum.push(partyBuild.committee)
  dyNum.push(partyBuild.ordinary)
  zbkzRate = (partyBuild.dydhJoinRate + partyBuild.zwhJoinRate + partyBuild.dzxhJoinRate + partyBuild.dkJoinRate + partyBuild.dwhJoinRate +
    partyBuild.mzshhJoinRate + partyBuild.zzshhJoinRate + partyBuild.jndfJoinRate + partyBuild.cwscJoinRate + partyBuild.sddzJoinRate +
    partyBuild.jzxxJoinRate + partyBuild.mzysJoinRate + partyBuild.tssjJoinRate + partyBuild.dyhbJoinRate + partyBuild.mzjdJoinRate +
    partyBuild.jfkpJoinRate + partyBuild.zzshJoinRate) / 17
  dycyRate = (partyBuild.dydhDevelopRate + partyBuild.zwhDevelopRate + partyBuild.dzxhDevelopRate + partyBuild.dkDevelopRate +
    partyBuild.dwhDevelopRate + partyBuild.mzshhDevelopRate + partyBuild.zzshhDevelopRate + partyBuild.jndfDevelopRate +
    partyBuild.cwscDevelopRate + partyBuild.sddzDevelopRate + partyBuild.jzxxDevelopRate + partyBuild.mzysDevelopRate +
    partyBuild.tssjDevelopRate + partyBuild.dyhbDevelopRate + partyBuild.mzjdDevelopRate + partyBuild.jfkpDevelopRate +
    partyBuild.zzshDevelopRate) / 17
}