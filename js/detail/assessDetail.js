//当月全员考核支部开展率、完成率统计
function assess_1() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#assess_1"));
  var xData = unitNameArr;
  var data = {
    edu: [
      developRate,
      finishRate
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
        name: "开展率（%）",
        type: "line",
        lineStyle: {
          width: 3,
        },
        // 是否让线条圆滑显示
        smooth: false,
        data: data.edu[0]
      },
      {
        name: "完成率（%）",
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
  var xData = unitNameArr;
  var data = {
    edu: [
      submintRate,
      assessOtherRate,
      orgAssessRate
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
        name: "工作提交参与率（%）",
        type: "line",
        lineStyle: {
          width: 3,
        },
        // 是否让线条圆滑显示
        smooth: false,
        data: data.edu[0]
      },
      {
        name: "互评参与率（%）",
        lineStyle: {
          width: 3,
        },
        type: "line",
        smooth: false,
        data: data.edu[1]
      },
      {
        name: "组织评定参与率（%）",
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
  var xData = unitNameArr;
  var yData = [
    excellentArr,
    goodArr,
    passArr,
    noPassArr,
    excellentRateArr
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
//全员考核情况年度分析
function assess_4() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#assess_4"));
  var legendData = ['优秀', '称职', '基本称职', '不称职'];
  var xAxisData = monthArr;
  var ktData = yearExcellent;
  var xlData = yearGood;
  var saData = yearPass;
  var siData = yearNotPass;

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
        formatter: '{value}',
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
  var xData = monthArr;
  var data = {
    edu: [
      yearDevelop,
      yearFinish
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
        name: "开展率（%）",
        type: "line",
        lineStyle: {
          width: 3,
        },
        // 是否让线条圆滑显示
        smooth: false,
        data: data.edu[0]
      },
      {
        name: "完成率（%）",
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
  var xData = monthArr;
  var data = {
    edu: [
      yearSubmit,
      yearAssess,
      yearOrg
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
        name: "工作提交参与率（%）",
        type: "line",
        lineStyle: {
          width: 3,
        },
        // 是否让线条圆滑显示
        smooth: false,
        data: data.edu[0]
      },
      {
        name: "互评参与率（%）",
        lineStyle: {
          width: 3,
        },
        type: "line",
        smooth: false,
        data: data.edu[1]
      },
      {
        name: "组织评定参与率（%）",
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

let unitNameArr = [] //下级单位名数组
let developRate = [] //开展率
let finishRate = [] //完成率
let submintRate = [] //工作提交率
let assessOtherRate = [] //互评参与率
let orgAssessRate = [] //组织评定参与率
let excellentArr = [] //优秀
let goodArr = [] //称职
let passArr = [] //基本称职
let noPassArr = [] //不称职
let excellentRateArr = [] //优秀占比

let monthArr = []
let yearDevelop = []
let yearFinish = []
let yearSubmit = []
let yearAssess = []
let yearOrg = []
let yearExcellent = []
let yearGood = []
let yearPass = []
let yearNotPass = []

function getAssessDetailData() {

  $.ajax({
    type: 'GET',
    url: 'http://localhost:8880/assessUnit/getUnitByParent',
    traditional: true,
    data: {
      parentId: 1,
      month: '2020-09'
    },
    success: function (response) {
      let unitList = response.extra.unitList
      for (let i = 0; i < unitList.length; i++) {
        unitNameArr.push(unitList[i].unitName)
        developRate.push(((unitList[i].startNum / unitList[i].total) * 100).toFixed(2))
        finishRate.push(((unitList[i].finishNum / unitList[i].total) * 100).toFixed(2))
        submintRate.push(((unitList[i].taskSubmitNum / unitList[i].total) * 100).toFixed(2))
        assessOtherRate.push(((unitList[i].assessOtherNum / unitList[i].total) * 100).toFixed(2))
        orgAssessRate.push(((unitList[i].orgAssessNum / unitList[i].total) * 100).toFixed(2))
        excellentArr.push(unitList[i].excellent)
        goodArr.push(unitList[i].good)
        passArr.push(unitList[i].pass)
        noPassArr.push(unitList[i].nopass)
        excellentRateArr.push(((unitList[i].excellent / unitList[i].total) * 100).toFixed(2))
      }
      assess_1();
      assess_2();
      assess_3();
    },
    error: function (response) {
      console.log(response);
    }
  })

  $.ajax({
    type: 'GET',
    url: 'http://localhost:8880/assessUnit/getOneYearList',
    traditional: true,
    data: {
      unitId: 1
    },
    success: function (response) {
      let unitList = response.extra.unitList
      for (let i = 0; i < unitList.length; i++) {
        monthArr.push(unitList[i].month.substring(5, 7) + '月')
        yearDevelop.push(((unitList[i].startNum / unitList[i].total) * 100).toFixed(2))
        yearFinish.push(((unitList[i].finishNum / unitList[i].total) * 100).toFixed(2))
        yearSubmit.push(((unitList[i].taskSubmitNum / unitList[i].total) * 100).toFixed(2))
        yearAssess.push(((unitList[i].assessOtherNum / unitList[i].total) * 100).toFixed(2))
        yearOrg.push(((unitList[i].orgAssessNum / unitList[i].total) * 100).toFixed(2))
        yearExcellent.push(unitList[i].excellent)
        yearGood.push(unitList[i].good)
        yearPass.push(unitList[i].pass)
        yearNotPass.push(unitList[i].nopass)
      }
      assess_4();
      assess_5();
      assess_6();
    },
    error: function (response) {
      console.log(response);
    }
  })


}