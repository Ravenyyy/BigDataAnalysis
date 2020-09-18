//当月心理测询参评人次及比例统计
function heart_1 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#heart_1"));
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
      data: testNumList
    },
    {
      name: "参评率(%)",
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

//当月心理测询异常人数及比例统计
function heart_2 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#heart_2"));
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
      data: problemNumList
    },
    {
      name: "异常率(%)",
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
//心理重度异常人数变化趋势年度统计
function heart_4 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#heart_4"));
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

//心理咨询师人数统计
function heart_5 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#heart_5"));
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
      name: "心理咨询师人数",
      type: "bar",
      // 是否让线条圆滑显示
      // smooth: false,
      data: psychologistlist
    }]
  };

  // 把配置给实例对象
  myChart.setOption(option);

  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

//当月心理测询正在干预及已干预
function heart_6 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#heart_6"));
  var legendData = ['已干预', '正在干预'];
  //总计
  var allData = function () {
    var datas = [];
    for (var index in onTreatList) {
      datas.push(onTreatList[index] + hasTreatList[index]);
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
      data: unitNameList,
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
          position: 'bottom',
          textStyle: {
            color: 'white',
            fontSize: 13
          }
        }
      },
      data: onTreatList
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
          position: 'top',
          textStyle: {
            color: 'white',
            fontSize: 13
          }
        }
      },
      data: hasTreatList
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

let unitNameList = [];
let testNumList = [];
let testRateList = [];
let problemNumList = [];
let problemRateList = [];
let monthList = [];
let seriousMonthList = [];
let psychologistlist = [];
let onTreatList = [];
let hasTreatList = [];
function getHeartDetailData () {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:8880/psyUnit/getUnitByParent',
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
        testNumList.push(unitList[index].testNum)
        testRateList.push((unitList[index].testNum / unitList[index].total).toFixed(2) * 100)
        problemNumList.push(unitList[index].problemNum)
        problemRateList.push((unitList[index].problemNum / unitList[index].total).toFixed(2) * 100)
        psychologistlist.push(unitList[index].psychologist)
        onTreatList.push(unitList[index].onTreat)
        hasTreatList.push(unitList[index].hasTreat)
      }
      heart_1();
      heart_2();
      heart_5();
      heart_6();
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
      unitId: localStorage.getItem("unitId"),
      month: localStorage.getItem("month")
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
      unitId: 1
    },
    success: function (response) {
      console.log(response)
      var unitList = response.extra.unitList;
      for (var index in unitList) {
        monthList.push(unitList[index].month.substring(5, 7) + '月')
        seriousMonthList.push(unitList[index].seriousNum)
      }
      heart_4();
    },
    error: function (response) {
      console.log(response);
    }
  })

}