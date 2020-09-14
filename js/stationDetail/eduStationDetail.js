//在线考试成绩TOP10
function edu_2 () {
  var dataArray = [{
    dataIndex: "1",
    name: "李赫",
    grade: "98"
  }, {
    dataIndex: "2",
    name: "李建",
    grade: "96"
  }, {
    dataIndex: "3",
    name: "刘大伟",
    grade: "95"
  },
  {
    dataIndex: "4",
    name: "李冰",
    grade: "95"
  }, {
    dataIndex: "5",
    name: "李赫",
    grade: "92"
  }, {
    dataIndex: "6",
    name: "李建",
    grade: "90"
  },
  {
    dataIndex: "7",
    name: "周大龙",
    grade: "88"
  }, {
    dataIndex: "8",
    name: "李海",
    grade: "88"
  }, {
    dataIndex: "9",
    name: "刘大伟",
    grade: "87"
  },
  {
    dataIndex: "10",
    name: "李冰",
    grade: "85"
  },
  ];

  var tr = "";
  for (var i = 0; i < dataArray.length; i++) {
    tr = tr + '<tr>' +
      "<td>" + dataArray[i].dataIndex + "</td>" +
      "<td>" + dataArray[i].name + "</td>" +
      "<td>" + dataArray[i].grade + "</td>" +
      '</tr>';
  }
  $('#edu_2').append(tr);
}
//必修课、选修课、在线考试完成率、APP活跃度走势年度统计
function edu_3 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#edu_3"));
  // 指定配置和数据
  option = {
    color: ["#FD866A", "#00f2f1", "#F1C62C", "#E271DE"],
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      top: "5%",
      // 距离容器10%
      right: "1%",
      // 修饰图例文字的颜色
      textStyle: {
        color: "#FFFFFF",
        fontSize: 14
      }
    },
    grid: {
      top: "24%",
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
        fontSize: 14
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
    },
    {
      name: "APP使用活跃度(%)",
      type: "line",
      lineStyle: {
        width: 3,
      },
      smooth: false,
      data: appActiveLits
    }
    ]
  };

  // 把配置给实例对象
  myChart.setOption(option);

  window.addEventListener("resize", function () {
    myChart.resize();
  });
}
//在线考试平均分、参与率走势年度统计
function edu_4 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#edu_4"));
  // 指定配置和数据
  option = {
    color: ["#F1C62C", "#00f2f1"],
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
      data: monthList,
      // 修饰刻度标签的颜色
      axisLine: {
        lineStyle: {
          color: "white"
        }
      },
      axisLabel: {
        interval: 0,
        fontSize: 14
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
      data: examJoinRateList
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
//在线考试及格率、优秀率走势年度统计
function edu_5 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#edu_5"));
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
      data: monthList,
      // 修饰刻度标签的颜色
      axisLine: {
        lineStyle: {
          color: "white"
        }
      },
      axisLabel: {
        interval: 0,
        fontSize: 14
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

let monthList = [];
let electFinishRateList = [];
let bixiuFinishRateList = [];
let examFinishRateList = [];
let examJoinRateList = [];
let examAverageList = [];
let examPassRateList = [];
let examGoodRateList = [];
let eduJoinRateList = [];
let eduFinishRateList = [];
let appActiveLits = [];
function getEduStationDetailData () {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:8880/educationUnit/getOneYearList',
    traditional: true,
    data: {
      unitId: 49
    },
    success: function (response) {
      console.log(response)
      var unitList = response.extra.unitList;
      for (var index in unitList) {
        monthList.push(unitList[index].month.substring(5, 7) + '月')
        electFinishRateList.push(unitList[index].electFinishRate)
        bixiuFinishRateList.push(unitList[index].bixiuFinishRate)
        examFinishRateList.push(unitList[index].examFinishRate)
        examJoinRateList.push(unitList[index].examJoinRate)
        examAverageList.push(unitList[index].examAverage)
        examPassRateList.push(unitList[index].examPassRate)
        examGoodRateList.push(unitList[index].examGoodRate)
        eduJoinRateList.push(unitList[index].eduJoinRate)
        eduFinishRateList.push(unitList[index].eduFinishRate)
        appActiveLits.push(unitList[index].appActive / unitList[index].total * 100)
        edu_3();
        edu_4();
        edu_5();
        edu_6();
      }
    },
    error: function (response) {
      console.log(response);
    }
  })
}