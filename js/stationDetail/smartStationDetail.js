//违规使用手机前三名
function smart_21() {
  var dataArray = [{
    name: "周大龙",
    num: "4",
  }, {
    name: "李海",
    num: "3",
  }, {
    name: "李朱赫",
    num: "3",
  }];

  var tr = "";
  for (var i = 0; i < dataArray.length; i++) {
    tr = tr + '<tr>' +
      "<td>" + dataArray[i].name + "</td>" +
      "<td>" + dataArray[i].num + "</td>" +
      '</tr>';
  }
  $('#smart_21').append(tr);
}
//睡眠质量不合格人员
function smart_22() {
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
  $('#smart_22').append(tr);
}
//训练不合格人数、指战员训练平均成绩走势年度统计
function smart_3() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#smart_3"));
  var xData = ["8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月", "6月", "7月"];
  var data = {
    edu: [
      [6, 4, 5, 2, 4, 3, 6, 5, 3, 4, 2, 3],
      [88, 91, 78, 89, 67, 89, 56, 92, 90, 91, 94, 82]
    ]
  };
  // 指定配置和数据
  option = {
    color: ["#FF8352", "#22EC20"],
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
        axisLine: {
          lineStyle: {
            color: "white",
            fontSize: 15
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
//睡眠不良人数、睡眠不良总次数年度统计
function smart_4() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#smart_4"));
  var xData = ["8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月", "6月", "7月"];
  var data = {
    edu: [
      [6, 2, 6, 2, 6, 6, 4, 2, 4, 4, 2, 5],
      [8, 3, 8, 9, 9, 9, 6, 3, 10, 11, 6, 12]
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
          color: "white",
          fontSize: 15
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
//违规驾驶人数、危险驾驶总次数走势年度统计
function smart_5() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#smart_5"));
  var xData = ["8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月", "6月", "7月"];
  var data = {
    edu: [
      [6, 4, 6, 12, 6, 6, 9, 12, 11, 4, 2, 5],
      [8, 11, 8, 19, 13, 9, 12, 22, 20, 11, 6, 12]
    ]
  };
  // 指定配置和数据
  option = {
    color: ['#00f2f1', '#F1C62C'],
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
          color: "white",
          fontSize: 15
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
//违规使用手机人数、违规使用手机总次数年度统计
function smart_6() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#smart_6"));
  var xData = ["8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月", "6月", "7月"];
  var data = {
    edu: [
      [6, 4, 4, 2, 6, 2, 9, 2, 3, 4, 3, 5],
      [18, 9, 17, 9, 17, 9, 15, 9, 9, 9, 9, 12]
    ]
  };
  // 指定配置和数据
  option = {
    color: ["#22EC20", "#FF8352"],
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