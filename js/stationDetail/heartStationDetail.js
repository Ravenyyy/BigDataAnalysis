//本季度心理异常程度为重度的人员信息
function heart_2() {
  var dataArray = [{
      dataIndex: "1",
      name: "周大龙",
      type: "抑郁",
      state: "已干预",
    },
    {
      dataIndex: "2",
      name: "李海",
      type: "其他",
      state: "正在干预",
    }, {
      dataIndex: "3",
      name: "李朱赫",
      type: "抑郁",
      state: "正在干预",
    }, {
      dataIndex: "4",
      name: "张新",
      type: "躁狂",
      state: "已干预",
    }, {
      dataIndex: "5",
      name: "李梦",
      type: "强迫",
      state: "已干预",
    }, {
      dataIndex: "6",
      name: "刘庆",
      type: "强迫",
      state: "已干预",
    }
  ];

  var tr = "";
  for (var i = 0; i < dataArray.length; i++) {
    tr = tr + '<tr>' +
      "<td>" + dataArray[i].dataIndex + "</td>" +
      "<td>" + dataArray[i].name + "</td>" +
      "<td>" + dataArray[i].type + "</td>" +
      "<td>" + dataArray[i].state + "</td>" +
      '</tr>';
  }
  $('#heart_2').append(tr);
}
// 当月心理测询结果整体分析
function heart_3() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector("#heart_3"));
  var legendData = ['躁狂', '强迫', '抑郁', '敌对', '焦虑', '其他'];
  let title = '总人数';
  let color = ["#22EC20", "#F1C62C", '#FF8352', '#E271DE', '#00f2f1', "#E5ED60"];
  let echartData = [{
    'name': '躁狂',
    'value': 10
  }, {
    'name': '强迫',
    'value': 2
  }, {
    'name': '其他',
    'value': 5
  }, {
    'name': '抑郁',
    'value': 4
  }, {
    'name': '敌对',
    'value': 11
  }, {
    'name': '焦虑',
    'value': 15
  }];

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
//心理异常人数、异常比率走势年度分析
function heart_4() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#heart_4"));
  var xData = ["8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月", "6月", "7月"];
  var data = {
    edu: [
      [46, 45, 46, 45, 46, 52, 46, 42, 41, 54, 53, 45],
      [87, 84, 77, 80, 83, 91, 81, 79, 80, 90, 89, 78]
    ]
  };
  // 指定配置和数据
  option = {
    color: ["#22EC20", "#00f2f1"],
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
      }
    },
    grid: {
      top: "20%",
      left: "8%",
      right: "10%",
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
        fontSize: 13
      },
    },
    yAxis: [{
        name: '人数',
        type: "value",
        // min: 50,
        // max: 100,
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
        name: '比率',
        type: "value",
        // min: 50,
        // max: 100,
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
        name: "参评人数",
        type: "bar",
        // 是否让线条圆滑显示
        smooth: false,
        data: data.edu[0]
      },
      {
        name: "参评比率(%)",
        type: "line",
        lineStyle: {
          width: 3,
        },
        smooth: false,
        yAxisIndex: 1,
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
//心理测询参评人次、参评比率走势年度统计
function heart_5() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#heart_5"));
  var xData = ["8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月", "6月", "7月"];
  var data = {
    edu: [
      [8, 11, 8, 9, 6, 6, 5, 2, 4, 11, 4, 12],
      [17, 24, 17, 20, 13, 11, 11, 9, 10, 20, 8, 27]
    ]
  };
  // 指定配置和数据
  option = {
    color: ["#FF9A00", "#22EC20"],
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
      }
    },
    grid: {
      top: "20%",
      left: "8%",
      right: "10%",
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
        fontSize: 13
      },
    },
    yAxis: [{
        name: '人数',
        type: "value",
        // min: 50,
        // max: 100,
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
        name: '比率',
        type: "value",
        // min: 50,
        // max: 100,
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
        name: "心理异常人数",
        type: "bar",
        // 是否让线条圆滑显示
        smooth: false,
        data: data.edu[0]
      },
      {
        name: "异常比率(%)",
        type: "line",
        lineStyle: {
          width: 3,
        },
        smooth: false,
        yAxisIndex: 1,
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
//心理重度异常人数变化趋势年度统计
function heart_6() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#heart_6"));
  var xData = ["8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月", "6月", "7月"];
  var data = {
    edu: [
      [8, 5, 1, 6, 3, 7, 9, 8, 3, 0, 4, 6]
    ]
  };
  // 指定配置和数据
  option = {
    color: ["#F1C62C"],
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      top: "5%",
      // 距离容器10%
      right: "30%",
      // 修饰图例文字的颜色
      textStyle: {
        color: "#FFFFFF",
        fontSize: 15
      }
    },
    grid: {
      top: "20%",
      left: "7%",
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
        fontSize: 13
      },
    },
    yAxis: [{
      name: '人数',
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
        formatter: '{value}'
      }
    }, ],

    series: [{
      name: "心理重度异常人数",
      type: "line",
      // 是否让线条圆滑显示
      smooth: false,
      lineStyle: {
        width: 3,
      },
      data: data.edu[0]
    }]
  };

  // 把配置给实例对象
  myChart.setOption(option);

  window.addEventListener("resize", function () {
    myChart.resize();
  });
}