//当月心理测询参评人次及比例统计
function heart_1() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#heart_1"));
  var xData = ["武汉", "宜昌", "鄂州", "襄阳", "黄石", "荆门", "咸宁", "十堰", "随州", "孝感", "荆州", "黄冈", "恩施", "汉江", "训保"];
  var data = {
    edu: [
      [1546, 454, 456, 452, 346, 352, 269, 452, 341, 334, 253, 345, 265, 254, 542],
      [88, 91, 78, 89, 67, 89, 56, 92, 90, 91, 94, 82, 93, 95, 81]
    ]
  };
  // 指定配置和数据
  option = {
    color: ["#22EC20", "#F1C62C"],
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
        fontSize: 12
      },
    },
    yAxis: [{
        name: '参评人数',
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
        name: '参评率',
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
        name: "参评率",
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

//当月心理测询异常人数及比例统计
function heart_2() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#heart_2"));
  var xData = ["武汉", "宜昌", "鄂州", "襄阳", "黄石", "荆门", "咸宁", "十堰", "随州", "孝感", "荆州", "黄冈", "恩施", "汉江", "训保"];
  var data = {
    edu: [
      [342, 68, 58, 65, 44, 65, 25, 26, 66, 16, 36, 29, 16, 16, 66],
      [22, 15, 13, 14, 27, 18, 9, 9, 6, 19, 5, 14, 9, 6, 12]
    ]
  };
  // 指定配置和数据
  option = {
    color: ["#FF9A00", "#00f2f1"],
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
        fontSize: 12
      },
    },
    yAxis: [{
        name: '异常人数',
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
        name: '异常率',
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
        name: "异常人数",
        type: "bar",
        // 是否让线条圆滑显示
        smooth: false,
        data: data.edu[0]
      },
      {
        name: "异常率",
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
// 当月心理测询结果整体分析
function heart_3() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector("#heart_3"));
  var legendData = ['躁狂', '强迫', '抑郁', '敌对', '焦虑', '其他'];
  let title = '总人数';
  let color = ["#22EC20", "#F1C62C", '#FF8352', '#E271DE', '#00f2f1', "#E5ED60"];
  let echartData = [{
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
//心理重度异常人数变化趋势年度统计
function heart_4() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#heart_4"));
  var xData = ["8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月", "6月", "7月"];
  var data = {
    edu: [
      [98, 56, 100, 156, 93, 79, 99, 108, 93, 88, 74, 67]
    ]
  };
  // 指定配置和数据
  option = {
    color: ["#22EC20", "#F1C62C"],
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
      left: "10%",
      right: "5%",
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
        fontSize: 15
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

//心理咨询师人数统计
function heart_5() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#heart_5"));
  var xData = ["武汉", "宜昌", "鄂州", "襄阳", "黄石", "荆门", "咸宁", "十堰", "随州", "孝感", "荆州", "黄冈", "恩施", "汉江", "训保"];
  var data = {
    edu: [
      [45, 11, 21, 23, 17, 11, 17, 23, 24, 11, 14, 22, 34, 15, 18]
    ]
  };
  // 指定配置和数据
  option = {
    color: ["#00f2f1"],
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
        fontSize: 12
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
      name: "心理咨询师人数",
      type: "bar",
      // 是否让线条圆滑显示
      // smooth: false,
      data: data.edu[0]
    }]
  };

  // 把配置给实例对象
  myChart.setOption(option);

  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

//当月心理测询正在干预及已干预
function heart_6() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#heart_6"));
  var legendData = ['已干预', '正在干预'];
  var xAxisData = ["武汉", "宜昌", "鄂州", "襄阳", "黄石", "荆门", "咸宁", "十堰", "随州", "孝感", "荆州", "黄冈", "恩施", "汉江", "训保"];
  var ktData = [12, 12, 8, 21, 8, 14, 14, 6, 27, 5, 8, 9, 19, 18, 8];
  var xlData = [15, 9, 16, 2, 17, 5, 9, 15, 0, 17, 15, 13, 7, 8, 7];
  //总计
  var allData = function () {
    var datas = [];
    for (var i = 0; i < ktData.length; i++) {
      datas.push(ktData[i] + xlData[i]);
    }
    return datas;
  }();
  var option = {
    color: ["#22EC20", "#F1C62C"],
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
      },
      data: legendData
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
        fontSize: 12
      },
    }],
    yAxis: [{
      name: "人数",
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
        formatter: '{value}',
        fontSize: 12
      }
    }],
    series: [{
        name: legendData[0],
        type: 'line',
        stack: '总量',
        areaStyle: {
          normal: {}
        },
        // color: ["#22EC20", "#F1C62C"],

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
        data: ktData
      },
      {
        name: legendData[1],
        type: 'line',
        stack: '总量',
        areaStyle: {
          normal: {}
        },
        // lineStyle: {
        //   normal: {
        //     color: "#F1C62C"
        //   }
        // },
        data: xlData
      },
      {
        name: '总量',
        type: 'line',
        stack: 'sum',
        lineStyle: {
          normal: {
            color: "#F1C62C"
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