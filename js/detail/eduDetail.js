//当月在线考试平均分和参与率统计柱状图
function edu_1 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#edu_1"));
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
      data: unitNameList,
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
      name: "参与率(%)",
      type: "bar",
      // 是否让线条圆滑显示
      smooth: false,
      data: examJoinRateList,
    },
    {
      name: "平均分",
      type: "line",
      lineStyle: {
        width: 3,
      },
      smooth: false,
      data: examAverageList
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
function edu_2 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#edu_2"));
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
      data: unitNameList,
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
    },],

    series: [{
      name: "及格率(%)",
      type: "line",
      lineStyle: {
        width: 3,
      },
      // 是否让线条圆滑显示
      smooth: false,
      data: examPassRateList
    },
    {
      name: "优秀率(%)",
      lineStyle: {
        width: 3,
      },
      type: "line",
      smooth: false,
      data: examGoodRateList
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
function edu_3 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#edu_3"));
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
      data: unitNameList,
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
        formatter: '{value}%'
      }
    },],

    series: [{
      name: "APP使用活跃度(%)",
      type: "bar",
      // 是否让线条圆滑显示
      // smooth: false,
      data: appActiveList
    }]
  };

  // 把配置给实例对象
  myChart.setOption(option);

  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

//当月必修课、选修课、在线考试完成率情况分布
function edu_4 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#edu_4"));
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
      data: unitNameList,
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
    },],

    series: [{
      name: "必修课完成率(%)",
      type: "line",
      // 是否让线条圆滑显示
      smooth: false,
      lineStyle: {
        width: 3,
      },
      data: bixiuFinishRateList
    },
    {
      name: "选修课完成率(%)",
      type: "line",
      smooth: false,
      lineStyle: {
        width: 3,
      },
      data: electFinishRateList
    },
    {
      name: "在线考试完成率(%)",
      type: "line",
      lineStyle: {
        width: 3,
      },
      smooth: false,
      data: examFinishRateList
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
function edu_5 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#edu_5"));
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
      data: monthList,
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
    },],

    series: [{
      name: "平均总分",
      type: "line",
      // 是否让线条圆滑显示
      smooth: false,
      lineStyle: {
        width: 3,
      },
      data: eduAverageList
    },
    {
      name: "考试平均成绩",
      type: "line",
      smooth: false,
      lineStyle: {
        width: 3,
      },
      data: examAverageMonthList
    }
    ]
  };

  // 把配置给实例对象
  myChart.setOption(option);

  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

//参与率、完成率整体走势年度统计
function edu_6 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#edu_6"));
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
      data: monthList,
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
    },],

    series: [{
      name: "参与率(%)",
      type: "line",
      // 是否让线条圆滑显示
      smooth: false,
      lineStyle: {
        width: 3,
      },
      data: eduJoinRateList
    },
    {
      name: "完成率(%)",
      type: "line",
      smooth: false,
      lineStyle: {
        width: 3,
      },
      data: eduFinishRateList
    }
    ]
  };

  // 把配置给实例对象
  myChart.setOption(option);

  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

let unitNameList = [];
let examJoinRateList = [];
let examAverageList = [];
let examPassRateList = [];
let examGoodRateList = [];
let appActiveList = [];
let bixiuFinishRateList = [];
let electFinishRateList = [];
let examFinishRateList = [];
let eduAverageList = [];
let monthList = [];
let examAverageMonthList = [];
let eduJoinRateList = [];
let eduFinishRateList = [];
function getEduDetailData () {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:8880/educationUnit/getUnitByParent',
    traditional: true,
    data: {
      parentId: localStorage.getItem("unitId"),
      month: localStorage.getItem("month")
    },
    success: function (response) {
      console.log(response);
      var unitList = response.extra.unitList;
      console.log(unitList)
      for (var index in unitList) {
        unitNameList.push(unitList[index].unitName)
        examJoinRateList.push(unitList[index].examJoinRate)
        examAverageList.push(unitList[index].examAverage)
        examPassRateList.push(unitList[index].examPassRate)
        examGoodRateList.push(unitList[index].examGoodRate)
        appActiveList.push((unitList[index].appActive / unitList[index].total).toFixed(2) * 100)
        bixiuFinishRateList.push(unitList[index].bixiuFinishRate)
        electFinishRateList.push(unitList[index].electFinishRate)
        examFinishRateList.push(unitList[index].examFinishRate)
        edu_1();
        edu_2();
        edu_3();
        edu_4();
      }
    },
    error: function (response) {
      console.log(response);
    }
  })

  $.ajax({
    type: 'GET',
    url: 'http://localhost:8880/educationUnit/getOneYearList',
    traditional: true,
    data: {
      unitId: localStorage.getItem("unitId"),
    },
    success: function (response) {
      console.log(response)
      var unitList = response.extra.unitList;
      for (var index in unitList) {
        monthList.push(unitList[index].month.substring(5, 7) + '月')
        eduAverageList.push(unitList[index].eduAverage)
        examAverageMonthList.push(unitList[index].examAverage)
        eduJoinRateList.push(unitList[index].eduJoinRate)
        eduFinishRateList.push(unitList[index].eduFinishRate)
      }
      edu_5();
      edu_6();
    },
    error: function (response) {
      console.log(response);
    }
  })
}