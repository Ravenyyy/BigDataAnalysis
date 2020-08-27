//当月在线考试平均分和参与率统计柱状图
function edu_1() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#edu_1"));
  var xData = ["武汉", "宜昌", "鄂州", "襄阳", "黄石", "荆门", "咸宁", "十堰", "随州", "孝感", "荆州", "黄冈", "恩施", "汉江", "训保"];
  var data = {
    edu: [
      [90, 99, 92, 80, 88, 81, 89, 91, 89, 91, 92, 88, 91, 82, 83],
      [88, 91, 100, 100, 100, 89, 99, 92, 93, 91, 94, 100, 93, 95, 100]
    ]
  };
  // 指定配置和数据
  option = {
    color: ["#F1C62C", "#00f2f1"],
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
      right: "10%",
      bottom: "15%",
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
        name: '平均分',
        type: "value",
        min: 50,
        max: 100,
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
        name: '参与率',
        type: "value",
        min: 70,
        max: 100,
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
        name: "参与率",
        type: "bar",
        // 是否让线条圆滑显示
        smooth: false,
        data: data.edu[0]
      },
      {
        name: "平均分",
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

//当月在线考试及格比例和优秀比例统计折线图
function edu_2() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#edu_2"));
  var xData = ["武汉", "宜昌", "鄂州", "襄阳", "黄石", "荆门", "咸宁", "十堰", "随州", "孝感", "荆州", "黄冈", "恩施", "汉江", "训保"];
  var data = {
    edu: [
      [98, 91, 100, 100, 100, 99, 99, 92, 93, 91, 94, 100, 93, 95, 100],
      [34, 23, 45, 34, 56, 67, 65, 56, 34, 24, 67, 45, 34, 67, 24]
    ]
  };
  // 指定配置和数据
  option = {
    color: ["#FD866A", "#00f2f1"],
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
      bottom: "15%",
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
      name: '参与率',
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
        name: "及格率",
        type: "line",
        lineStyle: {
          width: 3,
        },
        // 是否让线条圆滑显示
        smooth: false,
        data: data.edu[0]
      },
      {
        name: "优秀率",
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

//当月荆楚政线APP使用活跃度统计柱状图
function edu_3() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#edu_3"));
  var xData = ["武汉", "宜昌", "鄂州", "襄阳", "黄石", "荆门", "咸宁", "十堰", "随州", "孝感", "荆州", "黄冈", "恩施", "汉江", "训保"];
  var data = {
    edu: [
      [98, 91, 67, 78, 82, 91, 77, 92, 93, 91, 94, 82, 90, 95, 78]
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
      left: "8%",
      right: "5%",
      bottom: "15%",
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
      name: '活跃度',
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
      name: "APP使用活跃度",
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

//当月必修课、选修课、在线考试完成率情况分布
function edu_4() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#edu_4"));
  var xData = ["武汉", "宜昌", "鄂州", "襄阳", "黄石", "荆门", "咸宁", "十堰", "随州", "孝感", "荆州", "黄冈", "恩施", "汉江", "训保"];
  var data = {
    edu: [
      [98, 91, 100, 100, 100, 99, 99, 92, 93, 91, 94, 100, 93, 95, 100],
      [94, 88, 78, 82, 95, 91, 90, 89, 83, 85, 86, 88, 93, 91, 96],
      [89, 87, 96, 92, 85, 86, 93, 87, 98, 91, 87, 87, 92, 90, 87]
    ]
  };
  // 指定配置和数据
  option = {
    color: ["#FD866A", "#00f2f1", "#F1C62C"],
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
      right: "5%",
      bottom: "15%",
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
      name: '参与率',
      min: 50,
      max: 100,
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
        name: "必修课完成率",
        type: "line",
        // 是否让线条圆滑显示
        smooth: false,
        lineStyle: {
          width: 3,
        },
        data: data.edu[0]
      },
      {
        name: "选修课完成率",
        type: "line",
        smooth: false,
        lineStyle: {
          width: 3,
        },
        data: data.edu[1]
      },
      {
        name: "在线考试完成率",
        type: "line",
        lineStyle: {
          width: 3,
        },
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

//近12个月在线考试平均成绩走势图
function edu_5() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#edu_5"));
  var xData = ["8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月", "6月", "7月"];
  var data = {
    edu: [
      [98, 91, 100, 100, 100, 99, 99, 92, 93, 91, 94, 100],
      [94, 88, 78, 82, 95, 91, 90, 89, 83, 85, 86, 88]
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
      bottom: "15%",
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
      name: '分数',
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
        name: "平均总分",
        type: "line",
        // 是否让线条圆滑显示
        smooth: false,
        lineStyle: {
          width: 3,
        },
        data: data.edu[0]
      },
      {
        name: "考试平均成绩",
        type: "line",
        smooth: false,
        lineStyle: {
          width: 3,
        },
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

//近12个月在线考试平均成绩走势图
function edu_6() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#edu_6"));
  var xData = ["8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月", "6月", "7月"];
  var data = {
    edu: [
      [98, 91, 100, 90, 100, 95, 99, 92, 93, 91, 94, 95],
      [94, 88, 88, 82, 95, 88, 80, 89, 73, 85, 86, 78]
    ]
  };
  // 指定配置和数据
  option = {
    color: ["#D420EC", "#F1C62C"],
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
      bottom: "15%",
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
      // name: '分数',
      type: "value",
      min: 50,
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
        name: "参与率",
        type: "line",
        // 是否让线条圆滑显示
        smooth: false,
        lineStyle: {
          width: 3,
        },
        data: data.edu[0]
      },
      {
        name: "完成率",
        type: "line",
        smooth: false,
        lineStyle: {
          width: 3,
        },
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