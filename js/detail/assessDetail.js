//当月全员考核支部开展率、完成率统计
function assess_1() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#assess_1"));
  var xData = ["武汉", "宜昌", "鄂州", "襄阳", "黄石", "荆门", "咸宁", "十堰", "随州", "孝感", "荆州", "黄冈", "恩施", "汉江", "训保"];
  var data = {
    edu: [
      [98, 91, 100, 100, 100, 95, 94, 92, 93, 91, 94, 100, 93, 95, 100],
      [64, 73, 75, 74, 66, 67, 75, 76, 64, 61, 67, 65, 64, 67, 74]
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

//当月全员考核支部开展率、完成率统计
function assess_2() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#assess_2"));
  var xData = ["武汉", "宜昌", "鄂州", "襄阳", "黄石", "荆门", "咸宁", "十堰", "随州", "孝感", "荆州", "黄冈", "恩施", "汉江", "训保"];
  var data = {
    edu: [
      [98, 91, 100, 100, 100, 95, 94, 92, 93, 91, 94, 100, 93, 95, 100],
      [54, 53, 55, 54, 56, 57, 55, 56, 61, 61, 57, 55, 54, 57, 54],
      [84, 43, 75, 84, 66, 57, 85, 46, 84, 81, 67, 45, 44, 87, 84]
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

//当月全员考核情况汇总
function assess_3() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector("#assess_3"));
  var xData = ["武汉", "宜昌", "鄂州", "襄阳", "黄石", "荆门", "咸宁", "十堰", "随州", "孝感", "荆州", "黄冈", "恩施", "汉江", "训保"];
  var yData = [
    [61, 34, 43, 23, 21, 22, 33, 22, 32, 32, 32, 12, 32, 21, 14],
    [87, 43, 45, 54, 34, 53, 46, 37, 45, 34, 45, 45, 34, 34, 56],
    [76, 34, 36, 43, 43, 45, 42, 38, 42, 34, 42, 34, 42, 37, 35],
    [43, 21, 31, 25, 26, 24, 23, 25, 32, 21, 34, 24, 28, 19, 20],
    [23, 11, 13, 14, 15, 16, 17, 11, 16, 18, 21, 19, 10, 18, 10]
  ];
  option = {
    color: ["#ed3f35", "#BBFFFF", "#4EEE94", "#FAD860", "#FF9A00"],
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      top: "5%",
      // 距离容器10%
      right: "20%",
      // data: ['优秀', '称职', '基本称职', '不称职'],
      textStyle: {
        color: "white",
        fontSize: 15
      }
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '9%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: xData,
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
        name: "人数",
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
      {
        name: "比率",
        type: 'value',
        axisLabel: {
          formatter: '{value}%',
        },
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
      }
    ],
    series: [{
        name: '优秀',
        type: 'bar',
        barWidth: '40%',
        stack: '总量',
        data: yData[0]

      },
      {
        name: '称职',
        type: 'bar',
        barWidth: '40%',
        stack: '总量',
        data: yData[1]

      },
      {
        name: '基本称职',
        type: 'bar',
        barWidth: '40%',
        stack: '总量',
        data: yData[2]

      },
      {
        name: '不称职',
        type: 'bar',
        barWidth: '40%',
        stack: '总量',
        data: yData[3]

      },
      {
        name: "优秀占比(%)",
        type: "line",
        lineStyle: {
          width: 3,
        },
        smooth: false,
        yAxisIndex: 1,
        data: yData[4]
      }
    ]
  };


  // 3. 把配置和数据给实例对象
  myChart.setOption(option);

  myChart.on('click', function (params) {
    if (params.dataIndex == 1) {
      window.location = 'station.html'
    }
  })


  window.addEventListener("resize", function () {
    myChart.resize();
  });
}
//当月心理测询正在干预及已干预
function assess_4() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#assess_4"));
  var legendData = ['优秀', '称职', '基本称职', '不称职'];
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