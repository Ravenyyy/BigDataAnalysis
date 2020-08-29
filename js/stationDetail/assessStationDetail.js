// 支部展开率
function assess_11() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('assess_11'));

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
        fontSize: 16,
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
// 支部完成率
function assess_12() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('assess_12'));

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
        value: 0.95,
        name: '支部完成率'
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
        fontSize: 16,
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
//不称职人员
function assess_21() {
  var dataArray = [{
      dataIndex: "1",
      name: "周大龙",
    }, {
      dataIndex: "2",
      name: "李海",
    }, {
      dataIndex: "3",
      name: "刘大伟",
    },
    {
      dataIndex: "4",
      name: "李冰",
    }, {
      dataIndex: "5",
      name: "李赫",
    }, {
      dataIndex: "6",
      name: "李建",
    }, {
      dataIndex: "7",
      name: "刘大伟",
    },
    {
      dataIndex: "8",
      name: "李冰",
    }, {
      dataIndex: "9",
      name: "李赫",
    }, {
      dataIndex: "10",
      name: "李建",
    }
  ];

  var tr = "";
  for (var i = 0; i < dataArray.length; i++) {
    tr = tr + '<tr>' +
      "<td>" + dataArray[i].dataIndex + "</td>" +
      "<td>" + dataArray[i].name + "</td>" +
      '</tr>';
  }
  $('#assess_21').append(tr);
}
//未按规定考核人员信息
function assess_22() {
  var dataArray = [{
      dataIndex: "1",
      name: "李赫",
    }, {
      dataIndex: "2",
      name: "李建",
    }, {
      dataIndex: "3",
      name: "刘大伟",
    },
    {
      dataIndex: "4",
      name: "李冰",
    }, {
      dataIndex: "5",
      name: "李赫",
    }, {
      dataIndex: "6",
      name: "李建",
    },
    {
      dataIndex: "7",
      name: "周大龙",
    }, {
      dataIndex: "8",
      name: "李海",
    }, {
      dataIndex: "9",
      name: "刘大伟",
    },
    {
      dataIndex: "10",
      name: "李冰",
    },
  ];

  var tr = "";
  for (var i = 0; i < dataArray.length; i++) {
    tr = tr + '<tr>' +
      "<td>" + dataArray[i].dataIndex + "</td>" +
      "<td>" + dataArray[i].name + "</td>" +
      '</tr>';
  }
  $('#assess_22').append(tr);
}
// 当月全员考核情况汇总
function assess_3() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector("#assess_3"));
  var legendData = ['优秀', '称职', '基本称职', '不称职'];
  let title = '总人数';
  let color = ["#22EC20", "#F1C62C", '#FF8352', '#E271DE'];
  let echartData = [{
      name: '优秀',
      value: 11
    },
    {
      name: '称职',
      value: 9
    },
    {
      name: '基本称职',
      value: 17
    },
    {
      name: '不称职',
      value: 8
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
    legend: {
      type: "scroll",
      orient: 'vertical',
      left: 'left',
      align: 'auto',
      top: 'middle',
      textStyle: {
        color: '#fff',
        fontSize: 16
      },
      data: legendData
    },
    title: [{
      text: '{name|' + title + '}\n{val|' + formatNumber(total) + '}',
      top: 'center',
      left: 'center',
      textStyle: {
        rich: {
          name: {
            fontSize: 19,
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
      radius: ['45%', '65%'],
      center: ['50%', '50%'],
      data: echartData,
      hoverAnimation: true,
      itemStyle: {
        normal: {
          borderColor: "rgba(255,255,255,0.2)",
          borderWidth: 2,
          label: {
            show: true,
            position: 'outside',
            formatter: "{b}\n{d}%",
            fontSize: 16,
            fontWeight: 'bold',
          },
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

//全员考核情况年度分析
function assess_4() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#assess_4"));
  var legendData = ['优秀(%)', '称职(%)', '基本称职(%)', '不称职(%)'];
  var xAxisData = ["8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月", "6月", "7月"];
  var ktData = [12, 12, 18, 21, 18, 14, 14, 26, 27, 25, 28, 39, 19, 18, 28];
  var xlData = [25, 19, 16, 12, 17, 25, 19, 14, 30, 15, 12, 11, 27, 38, 27];
  var saData = [15, 19, 26, 12, 25, 25, 19, 25, 13, 27, 35, 23, 24, 14, 15];
  var siData = [48, 50, 40, 55, 40, 36, 48, 35, 30, 33, 25, 27, 30, 30, 20];

  //总计
  var allData = function () {
    var datas = [];
    for (var i = 0; i < ktData.length; i++) {
      datas.push(ktData[i] + xlData[i] + saData[i] + siData[i]);
    }
    return datas;
  }();
  var option = {
    color: ["#22EC20", "#F1C62C", '#FF9A00', '#00f2f1'],
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      top: "5%",
      // 距离容器10%
      right: "20%",
      // 修饰图例文字的颜色
      textStyle: {
        color: "#FFFFFF",
        fontSize: 15
      },
      data: legendData
    },
    grid: {
      top: "20%",
      left: "8%",
      right: "4%",
      bottom: "11%",
      show: true,
      borderColor: "white",
      containLabel: false
    },
    xAxis: [{
      type: 'category',

      boundaryGap: false,
      data: xAxisData,
      axisPointer: {
        type: 'shadow'
      },
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
    }],
    yAxis: [{
      // name: "比率",
      type: 'value',
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
      },
      axisLabel: {
        formatter: '{value}%',
        fontSize: 13
      }
    }],
    series: [{
        name: legendData[0],
        type: 'line',
        stack: '总量',
        areaStyle: {
          normal: {}
        },
        lineStyle: {
          normal: {
            color: "#22EC20"
          }
        },
        label: {
          normal: {
            show: true,
            position: 'bottom',
            textStyle: {
              color: 'white',
              fontSize: 13
            }
          }
        },
        data: ktData
      },
      {
        name: legendData[1],
        type: 'line',
        stack: '总量',
        areaStyle: {
          normal: {}
        },
        label: {
          normal: {
            show: true,
            position: 'bottom',
            textStyle: {
              color: 'white',
              fontSize: 13
            }
          }
        },
        data: xlData
      },
      {
        name: legendData[2],
        type: 'line',
        stack: '总量',
        areaStyle: {
          normal: {}
        },
        lineStyle: {
          normal: {
            color: "#22EC20"
          }
        },
        label: {
          normal: {
            show: true,
            position: 'bottom',
            textStyle: {
              color: 'white',
              fontSize: 13
            }
          }
        },
        data: saData
      },
      {
        name: legendData[3],
        type: 'line',
        stack: '总量',
        areaStyle: {
          normal: {}
        },
        lineStyle: {
          normal: {
            color: "#22EC20"
          }
        },
        label: {
          normal: {
            show: true,
            position: 'top',
            textStyle: {
              color: 'white',
              fontSize: 13
            }
          }
        },
        data: siData
      },
      {
        name: '总量',
        type: 'line',
        stack: 'sum',
        lineStyle: {
          normal: {
            color: "#00f2f1"
          }
        },
        data: allData
      }
    ]
  };


  // 把配置给实例对象
  myChart.setOption(option);

  window.addEventListener("resize", function () {
    myChart.resize();
  });
}
//支部开展率、完成率走势年度分析
function assess_5() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#assess_5"));
  var xData = ["8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月", "6月", "7月"];
  var data = {
    edu: [
      [90, 91, 100, 100, 100, 95, 94, 88, 83, 91, 94, 100],
      [66, 73, 75, 76, 76, 77, 75, 76, 64, 61, 67, 65]
    ]
  };
  // 指定配置和数据
  option = {
    color: ["#E5ED60", "#00f2f1"],
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      top: "5%",
      // 距离容器10%
      right: "10%",
      // 修饰图例文字的颜色
      textStyle: {
        color: "#FFFFFF",
        fontSize: 15
      }
    },
    grid: {
      top: "20%",
      left: "10%",
      right: "4%",
      bottom: "11%",
      show: true,
      borderColor: "white",
      containLabel: false
    },
    xAxis: {
      type: "category",
      axisPointer: {
        type: 'shadow'
      },
      data: xData,
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
      name: '比率',
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
      },
      axisLabel: {
        formatter: '{value} %'
      }
    }, ],

    series: [{
        name: "开展率",
        type: "line",
        lineStyle: {
          width: 3,
        },
        // 是否让线条圆滑显示
        smooth: false,
        data: data.edu[0]
      },
      {
        name: "完成率",
        lineStyle: {
          width: 3,
        },
        type: "line",
        smooth: false,
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
//人员参与率走势年度统计
function assess_6() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#assess_6"));
  var xData = ["8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月", "6月", "7月"];
  var data = {
    edu: [
      [98, 91, 100, 95, 95, 95, 94, 90, 93, 91, 94, 94, 93, 95, 90],
      [54, 53, 55, 55, 56, 57, 57, 56, 61, 61, 57, 55, 54, 57, 54],
      [64, 43, 75, 74, 66, 57, 65, 46, 84, 81, 67, 45, 44, 87, 84]
    ]
  };
  // 指定配置和数据
  option = {
    color: ["#F1C62C", "#60ED79", "#DE7C85"],
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      top: "5%",
      // 距离容器10%
      right: "5%",
      // 修饰图例文字的颜色
      textStyle: {
        color: "#FFFFFF",
        fontSize: 15
      }
    },
    grid: {
      top: "20%",
      left: "10%",
      right: "3%",
      bottom: "11%",
      show: true,
      borderColor: "white",
      containLabel: false
    },
    xAxis: {
      type: "category",
      axisPointer: {
        type: 'shadow'
      },
      data: xData,
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
      name: '比率',
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
      },
      axisLabel: {
        formatter: '{value} %'
      }
    }, ],

    series: [{
        name: "工作提交参与率",
        type: "line",
        lineStyle: {
          width: 3,
        },
        // 是否让线条圆滑显示
        smooth: false,
        data: data.edu[0]
      },
      {
        name: "互评参与率",
        lineStyle: {
          width: 3,
        },
        type: "line",
        smooth: false,
        data: data.edu[1]
      },
      {
        name: "组织评定参与率",
        lineStyle: {
          width: 3,
        },
        type: "line",
        smooth: false,
        data: data.edu[2]
      }
    ]
  };

  // 把配置给实例对象
  myChart.setOption(option);

  window.addEventListener("resize", function () {
    myChart.resize();
  });
}