//组织生活完成情况
function dj_3() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#dj_3"));
  var xData = ["党员大会", "支委会", "党小组会", "党课", "党委会", "民主生活会", "组织生活会"];
  var data = {
    edu: [
      [32, 8, 18, 15, 14, 5, 5],
      [30, 6, 18, 13, 12, 4, 5],
      [82, 85, 93, 84, 87, 88, 89]
    ]
  };
  // 指定配置和数据
  option = {
    color: ["#FF9A00", "#00f2f1", "#22EC20"],
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
      left: "7%",
      right: "9%",
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
        name: "规定数量",
        type: "bar",
        // 是否让线条圆滑显示
        smooth: false,
        data: data.edu[0]
      },
      {
        name: "完成数量",
        type: "bar",
        // 是否让线条圆滑显示
        smooth: false,
        data: data.edu[1]
      },
      {
        name: "参会率(%)",
        type: "line",
        lineStyle: {
          width: 3,
        },
        smooth: false,
        yAxisIndex: 1,
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
//十事联动完成情况
function dj_4() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#dj_4"));
  var xData = ["缴纳党费", "重温誓词", "诵读党章", "集中学习", "民主议事", "特色实践", "党员汇报", "民主监督", "积分考评", "组织生活"];
  var data = {
    edu: [
      [95, 86, 100, 86, 93, 89, 89, 88, 93, 88]
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
        fontSize: 16
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
        fontSize: 13
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
        formatter: '{value}%',
        // normal: {
        fontSize: 13
        // }
      }
    }, ],

    series: [{
      name: "完成率(%)",
      type: "bar",
      data: data.edu[0]
    }]
  };

  // 把配置给实例对象
  myChart.setOption(option);

  window.addEventListener("resize", function () {
    myChart.resize();
  });
}
//十事联动、组织生活整体完成情况年度统计
function dj_5() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#dj_5"));
  var xData = ["8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月", "6月", "7月"];
  var data = {
    edu: [
      [98, 91, 100, 100, 100, 99, 99, 92, 93, 91, 94, 100, 93, 95, 100],
      [84, 83, 85, 84, 86, 87, 85, 86, 94, 94, 87, 85, 84, 87, 84]
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
        fontSize: 13
      },
    },
    yAxis: [{
      name: '完成率',
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
        name: "十事联动完成率",
        type: "line",
        lineStyle: {
          width: 3,
        },
        // 是否让线条圆滑显示
        smooth: false,
        data: data.edu[0]
      },
      {
        name: "组织生活完成率",
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
//党员数量及占比情况年度分析
function dj_6() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector("#dj_6"));
  var xData = ["8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月", "6月", "7月"];
  var yData = [
    [61, 54, 49, 53, 51, 52, 53, 42, 52, 52, 52, 52],
    [17, 33, 25, 14, 34, 43, 46, 37, 45, 14, 15, 25],
    [56, 67, 54, 53, 53, 52, 65, 67, 67, 78, 73, 76],
  ];
  option = {
    color: ["#ed3f35", "#BBFFFF", "#FAD860", "#FF9A00"],
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      top: "5%",
      // 距离容器10%
      right: "10%",
      // data: ['党员', '非党员'],
      textStyle: {
        color: "white",
        fontSize: 15
      }
    },
    grid: {
      top: '20%',
      left: '2%',
      right: '5%',
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
        name: '党员数量',
        type: 'bar',
        barWidth: '40%',
        stack: '总量',
        data: yData[0]

      },
      {
        name: '非党员数量',
        type: 'bar',
        barWidth: '40%',
        stack: '总量',
        data: yData[1]
      },
      {
        name: "党员占比(%)",
        type: "line",
        lineStyle: {
          width: 3,
        },
        smooth: false,
        yAxisIndex: 1,
        data: yData[2]
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