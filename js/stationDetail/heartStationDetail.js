//本季度心理异常程度为重度的人员信息
function heart_2 () {
  var hasTreat = "";
  var tr = "";
  for (var i = 0; i < seriousPersonList.length; i++) {
    if (seriousPersonList[i].hasTreat != undefined && seriousPersonList[i].hasTreat != null
      && seriousPersonList[i].hasTreat == 1) {
      hasTreat = "是"
    } else {
      hasTreat = "否"
    }
    tr = tr + '<tr>' +
      "<td>" + (i + 1) + "</td>" +
      "<td>" + seriousPersonList[i].uname + "</td>" +
      "<td>" + formateDate(seriousPersonList[i].month) + "</td>" +
      "<td>" + hasTreat + "</td>" +
      '</tr>';
  }
  $('#heart_2').append(tr);
}
// 当月心理测询结果整体分析
function heart_3 () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector("#heart_3"));
  var legendData = ['躁狂', '强迫', '抑郁', '敌对', '焦虑', '其他'];
  let title = '总人数';
  let color = ["#22EC20", "#F1C62C", '#FF8352', '#E271DE', '#00f2f1', "#E5ED60"];
  let echartData = [{
    'name': '躁狂',
    'value': irritable
  }, {
    'name': '强迫',
    'value': force
  }, {
    'name': '其他',
    'value': other
  }, {
    'name': '抑郁',
    'value': depressive
  }, {
    'name': '敌对',
    'value': hostile
  }, {
    'name': '焦虑',
    'value': anxious
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
function heart_4 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#heart_4"));
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
      data: monthList,
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
      data: testNumList
    },
    {
      name: "参评比率(%)",
      type: "line",
      lineStyle: {
        width: 3,
      },
      smooth: false,
      yAxisIndex: 1,
      data: testRateList
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
function heart_5 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#heart_5"));
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
      data: monthList,
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
      data: problemNumList
    },
    {
      name: "异常比率(%)",
      type: "line",
      lineStyle: {
        width: 3,
      },
      smooth: false,
      yAxisIndex: 1,
      data: problemRateList
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
function heart_6 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#heart_6"));
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
      data: monthList,
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
    },],

    series: [{
      name: "心理重度异常人数",
      type: "line",
      // 是否让线条圆滑显示
      smooth: false,
      lineStyle: {
        width: 3,
      },
      data: seriousMonthList
    }]
  };

  // 把配置给实例对象
  myChart.setOption(option);

  window.addEventListener("resize", function () {
    myChart.resize();
  });
}
//日期格式转换
function formateDate (datetime) {
  function addDateZero (num) {
    return (num < 10 ? "0" + num : num);
  }
  let d = new Date(datetime);
  let formatdatetime = d.getFullYear() + '-' + addDateZero(d.getMonth() + 1) + '-' + addDateZero(d.getDate());
  return formatdatetime;
}
//字符串转数组
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
let monthList = [];
let testNumList = [];
let testRateList = [];
let problemNumList = [];
let problemRateList = [];
let seriousMonthList = [];
let testNum = 0;
let problemNum = 0;
let psychologist = 0;
let onTreat = 0;
let hasTreat = 0;
let seriousPersonList = [];
function getHeartDetailData () {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:8880/psyPerson/getSeriousPeople',
    traditional: true,
    data: {
      unitId: 266
    },
    success: function (response) {
      console.log(response)
      seriousPersonList = response.extra.personList;
      heart_2();
    },
    error: function (response) {
      console.log(response);
    }
  })
  $.ajax({
    type: 'GET',
    url: 'http://localhost:8880/psyUnit/getPsyUnit',
    traditional: true,
    data: {
      unitId: 109,
      month: '2020-09'
    },
    success: function (response) {
      var psyUnit = response.extra.psyUnit;
      console.log(response)
      anxious = psyUnit.anxious;
      hostile = psyUnit.hostile;
      depressive = psyUnit.depressive;
      irritable = psyUnit.irritable;
      force = psyUnit.force;
      other = psyUnit.other;

      testNum = psyUnit.testNum + '';
      problemNum = psyUnit.problemNum + '';
      psychologist = psyUnit.psychologist + '';
      treat = psyUnit.onTreat + "/" + psyUnit.hasTreat;

      var testNumArray = strToArray(testNum)
      var testNumStr = ""
      for (var i = 0; i < testNum.length; i++) {
        testNumStr += '<div class= "block">' + testNumArray[i] + '</div>';
      }
      document.getElementById("testNum").innerHTML = testNumStr;

      var problemNumArray = strToArray(problemNum)
      var problemNumStr = ""
      for (var i = 0; i < problemNum.length; i++) {
        problemNumStr += '<div class= "block">' + problemNumArray[i] + '</div>';
      }
      document.getElementById("problemNum").innerHTML = problemNumStr;

      var psychologistArray = strToArray(psychologist)
      var psychologistStr = ""
      for (var i = 0; i < psychologist.length; i++) {
        psychologistStr += '<div class= "block">' + psychologistArray[i] + '</div>';
      }
      document.getElementById("psychologist").innerHTML = psychologistStr;

      var treatArray = strToArray(treat)
      var treatStr = ""
      for (var i = 0; i < treat.length; i++) {
        treatStr += '<div class= "block">' + treatArray[i] + '</div>';
      }
      document.getElementById("treat").innerHTML = treatStr;

      heart_3();
    },
    error: function (response) {
      console.log(response);
    }
  })

  $.ajax({
    type: 'GET',
    url: 'http://localhost:8880/psyUnit/getOneYearList',
    traditional: true,
    data: {
      unitId: 109
    },
    success: function (response) {
      console.log(response)
      var unitList = response.extra.unitList;
      for (var index in unitList) {
        monthList.push(unitList[index].month.substring(5, 7) + '月')
        testNumList.push(unitList[index].testNum)
        testRateList.push((unitList[index].testNum / unitList[index].total).toFixed(2) * 100)
        problemNumList.push(unitList[index].problemNum)
        problemRateList.push((unitList[index].problemNum / unitList[index].total).toFixed(2) * 100)
        seriousMonthList.push(unitList[index].seriousNum)
      }
      heart_4();
      heart_5();
      heart_6();
    },
    error: function (response) {
      console.log(response);
    }
  })

}

