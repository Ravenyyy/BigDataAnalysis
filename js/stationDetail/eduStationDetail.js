//在线考试成绩TOP10
function edu_2 () {
  var tr = "";
  for (var i = 0; i < examTop10List.length; i++) {
    tr = tr + '<tr>' +
      "<td>" + (i + 1) + "</td>" +
      "<td>" + examTop10List[i].uname + "</td>" +
      "<td>" + examTop10List[i].examAverage + "</td>" +
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
      data: appActiveList
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
let appActiveList = [];
let examTop10List = [];
function getEduStationDetailData () {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:8880/educationPerson/getTop10Person',
    traditional: true,
    data: {
      unitId: 266,
      month: '2020-07'
    },
    success: function (response) {
      console.log(response)
      examTop10List = response.extra.personList;
      edu_2();
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
        appActiveList.push(unitList[index].appActive / unitList[index].total * 100)
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

function strToArray (string) {
  var array = [];
  var length = string.length
  for (var i = 0; i < length; i++) {
    string1 = string.substr(0, 1)
    array.push(string1)
    string = string.replace(string1, '')
  }
  // console.log(array)
  return array;
}
function getBoxData () {
  let examAverage = 0;
  let examJoinNum = 0;
  let examNotPassNum = 0;
  let appActiveRate = 0;
  $.ajax({
    type: 'GET',
    url: 'http://localhost:8880/educationUnit/getEduUnit',
    traditional: true,
    data: {
      unitId: 49,
      month: '2020-09'
    },
    success: function (response) {
      console.log(response)
      var unit = response.extra.educationUnit;
      examAverage = unit.examAverage + '';
      examJoinNum = unit.examJoinNum + '';
      examNotPassNum = unit.examJoinNum - unit.examPassNum + '';
      appActiveRate = (unit.appActive / unit.total).toFixed(2) * 100 + "%"

      var examAverageArray = strToArray(examAverage)
      var examAverageStr = ""
      for (var i = 0; i < examAverage.length; i++) {
        examAverageStr += '<div class= "block">' + examAverageArray[i] + '</div>';
      }
      document.getElementById("examAverage").innerHTML = examAverageStr;

      var examJoinNumArray = strToArray(examJoinNum)
      var examJoinNumStr = ""
      for (var i = 0; i < examJoinNum.length; i++) {
        examJoinNumStr += '<div class= "block">' + examJoinNumArray[i] + '</div>';
      }
      document.getElementById("examJoinNum").innerHTML = examJoinNumStr;

      var examNotPassNumArray = strToArray(examNotPassNum)
      var examNotPassNumStr = ""
      for (var i = 0; i < examNotPassNum.length; i++) {
        examNotPassNumStr += '<div class= "block">' + examNotPassNumArray[i] + '</div>';
      }
      document.getElementById("examNotPassNum").innerHTML = examNotPassNumStr;

      var appActiveRateArray = strToArray(appActiveRate)
      var appActiveRateStr = ""
      for (var i = 0; i < appActiveRate.length; i++) {
        appActiveRateStr += '<div class= "block">' + appActiveRateArray[i] + '</div>';
      }
      document.getElementById("appActiveRate").innerHTML = appActiveRateStr;
    },
    error: function (response) {
      console.log(response);
    }
  })
}