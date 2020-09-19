//当月违规使用手机人数、违规使用手机总次数统计
function smart_1 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#smart_1"));
  var xData = ["武汉", "宜昌", "鄂州", "襄阳", "黄石", "荆门", "咸宁", "十堰", "随州", "孝感", "荆州", "黄冈", "恩施", "汉江", "训保"];
  var data = {
    edu: [
      [56, 54, 46, 52, 46, 32, 29, 42, 31, 34, 23, 35, 25, 54, 52],
      [188, 91, 178, 189, 167, 89, 56, 92, 90, 91, 94, 82, 93, 95, 181]
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
      right: "10%",
      // 修饰图例文字的颜色
      textStyle: {
        color: "#FFFFFF",
        fontSize: 15
      }
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
      name: '数量',
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
    }],

    series: [{
      name: "违规使用手机人数",
      type: "bar",
      // 是否让线条圆滑显示
      smooth: false,
      data: data.edu[0]
    },
    {
      name: "违规使用手机总次数",
      type: "line",
      lineStyle: {
        width: 3,
      },
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
//当月违规驾驶人数、危险驾驶总次数统计
function smart_2 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#smart_2"));
  var xData = ["武汉", "宜昌", "鄂州", "襄阳", "黄石", "荆门", "咸宁", "十堰", "随州", "孝感", "荆州", "黄冈", "恩施", "汉江", "训保"];
  var data = {
    edu: [
      [26, 14, 16, 12, 26, 16, 19, 12, 11, 14, 20, 15, 21, 14, 12],
      [38, 31, 78, 19, 67, 29, 26, 32, 30, 31, 64, 42, 53, 25, 31]
    ]
  };
  // 指定配置和数据
  option = {
    color: ['#FF8352', '#00f2f1'],
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
      left: "8%",
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
      name: '数量',
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
    }],

    series: [{
      name: "违规驾驶人数",
      type: "bar",
      // 是否让线条圆滑显示
      smooth: false,
      data: data.edu[0]
    },
    {
      name: "危险驾驶总次数",
      type: "line",
      lineStyle: {
        width: 3,
      },
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
//当月指战员综合睡眠质量结果统计
function smart_3 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#smart_3"));
  var xData = ["武汉", "宜昌", "鄂州", "襄阳", "黄石", "荆门", "咸宁", "十堰", "随州", "孝感", "荆州", "黄冈", "恩施", "汉江", "训保"];
  var data = {
    edu: [
      [26, 14, 16, 12, 26, 16, 19, 12, 11, 14, 20, 15, 21, 14, 12],
      [48, 31, 48, 29, 67, 29, 26, 32, 30, 21, 64, 32, 43, 35, 31]
    ]
  };
  // 指定配置和数据
  option = {
    color: ["#F1C62C", "#22EC20"],
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
      left: "8%",
      right: "7%",
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
      name: '数量',
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
    }],

    series: [{
      name: "睡眠不良人数",
      type: "bar",
      // 是否让线条圆滑显示
      smooth: false,
      data: data.edu[0]
    },
    {
      name: "睡眠不良次数",
      type: "line",
      lineStyle: {
        width: 3,
      },
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
//当月训练不合格人数、指战员训练平均成绩统计
function smart_4 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#smart_4"));
  var xData = ["武汉", "宜昌", "鄂州", "襄阳", "黄石", "荆门", "咸宁", "十堰", "随州", "孝感", "荆州", "黄冈", "恩施", "汉江", "训保"];
  var data = {
    edu: [
      [46, 44, 56, 52, 34, 32, 26, 52, 31, 34, 25, 35, 25, 24, 42],
      [88, 91, 78, 89, 67, 89, 56, 92, 90, 91, 94, 82, 93, 95, 81]
    ]
  };
  // 指定配置和数据
  option = {
    color: ["#E5ED60", "#22EC20"],
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
      left: "8%",
      right: "7%",
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
      name: '不合格人数',
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
      name: '平均成绩',
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
        formatter: '{value}'
      }
    },
    ],

    series: [{
      name: "不合格人数",
      type: "bar",
      // 是否让线条圆滑显示
      smooth: false,
      data: data.edu[0]
    },
    {
      name: "平均成绩",
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
//当月训练开展率、人员参与率统计
function smart_5 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#smart_5"));
  var xData = ["武汉", "宜昌", "鄂州", "襄阳", "黄石", "荆门", "咸宁", "十堰", "随州", "孝感", "荆州", "黄冈", "恩施", "汉江", "训保"];
  var data = {
    edu: [
      [89, 100, 92, 92, 100, 100, 94, 92, 98, 100, 100, 92, 90, 92, 93],
      [88, 91, 78, 89, 67, 89, 56, 92, 90, 91, 94, 82, 93, 95, 81]
    ]
  };
  // 指定配置和数据
  option = {
    color: ['#FF8352', '#00f2f1'],
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
      left: "9%",
      right: "1%",
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
          color: "#white"
        }
      },
      axisLabel: {
        formatter: '{value}%'
      }
    },],

    series: [{
      name: "训练开展率",
      type: "line",
      // 是否让线条圆滑显示
      smooth: false,
      data: data.edu[0]
    },
    {
      name: "人员参与率",
      type: "line",
      lineStyle: {
        width: 3,
      },
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
//违规驾驶人数、危险驾驶总次数走势年度统计
function smart_6 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#smart_6"));
  var xData = ["8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月", "6月", "7月"];
  var data = {
    edu: [
      [126, 124, 136, 123, 126, 136, 119, 132, 211, 124, 120, 125],
      [328, 311, 278, 189, 167, 229, 216, 322, 310, 311, 264, 242]
    ]
  };
  // 指定配置和数据
  option = {
    color: ['#00f2f1', '#FF8352'],
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
      left: "9%",
      right: "1%",
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
      name: '数量',
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
    }],

    series: [{
      name: "违规驾驶人数",
      type: "bar",
      // 是否让线条圆滑显示
      smooth: false,
      data: data.edu[0]
    },
    {
      name: "危险驾驶总次数",
      type: "line",
      lineStyle: {
        width: 3,
      },
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