// 支部展开率
function assess_11 () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('assess_11'));

  option = {
    tooltip: {
      formatter: "{b}：{c}"
    },
    series: [{
      tooltip: {
        show: false
      },
      "name": 'wrap',
      "type": 'pie',
      "hoverAnimation": false,
      "legendHoverLink": false,
      center: ['50%', '70%'],
      "radius": ['0%', '7%'],
      "z": 5,
      "label": {
        "normal": {
          "show": false,
          "position": 'center'
        },
        "emphasis": {
          "show": false
        }
      },
      "labelLine": {
        "normal": {
          "show": false
        }
      },
      "data": [{
        "value": 100,
        itemStyle: {
          normal: {
            color: "#072B79"
          },
          emphasis: {
            color: "#072B79"
          }
        }
      }]
    }, {
      tooltip: {
        show: false
      },
      "name": 'wrap',
      "type": 'pie',
      "hoverAnimation": false,
      "legendHoverLink": false,
      center: ['50%', '70%'],
      "radius": ['6%', '8%'],
      "z": 5,
      "label": {
        "normal": {
          "show": false,
          "position": 'center'
        },
        "emphasis": {
          "show": false
        }
      },
      "labelLine": {
        "normal": {
          "show": false
        }
      },
      "data": [{
        "value": 100,
        itemStyle: {
          normal: {
            color: "#24D8E7"
          },
          emphasis: {
            color: "#24D8E7"
          }
        }
      }]
    }, {
      tooltip: {
        show: false
      },
      name: '刻度',
      type: 'gauge',
      radius: '105%',
      z: 1,
      min: 0,
      max: 1,
      center: ['50%', '70%'],
      splitNumber: 5, //刻度数量
      startAngle: 180,
      endAngle: 0,
      axisLine: {
        show: true,
        lineStyle: {
          width: 4,
          color: [
            [0.2, '#ed3f35'],
            [0.4, '#F88168'],
            [0.6, '#ffff00'],
            [0.8, '#00f2f1'],
            [1, '#7FFF00'],
          ]
        }
      }, //仪表盘轴线
      axisLabel: {
        show: false
      }, //刻度标签。
      axisTick: {
        show: true,
        lineStyle: {
          color: 'auto',
          width: 0
        },
        length: -15
      }, //刻度样式
      splitLine: {
        show: true,
        length: 0,
        lineStyle: {
          color: 'auto',
          width: 2
        }
      }, //分隔线样式
      detail: {
        show: false
      },
      pointer: {
        show: false
      }
    }, {
      name: '本期',
      type: 'gauge',
      radius: '95%',
      min: 0,
      max: 1,
      center: ['50%', '70%'],
      data: [{
        value: developRate,
        name: '支部开展率'
      }],
      splitNumber: 4, //刻度数量
      startAngle: 180,
      endAngle: 0,
      z: 5,
      axisLine: {
        show: true,
        lineStyle: {
          width: 0,
          color: [
            [0.2, '#ed3f35'],
            [0.4, '#F88168'],
            [0.6, '#ffff00'],
            [0.8, '#00f2f1'],
            [1, '#7FFF00'],
          ]
        }
      }, //仪表盘轴线
      axisLabel: {
        show: true,
        color: '#fff',
        fontSize: 14,
        distance: -38,
        formatter: function (params) {
          var value = params.toFixed(2)
          if (value == 0.00) {
            return '危'
          } else if (value == 0.25) {
            return '差'
          } else if (value == 0.50) {
            return '中'
          } else if (value == 0.75) {
            return '良'
          } else if (value == 1.00) {
            return '优'
          } else {
            return ''
          }
        }
      }, //刻度标签。
      axisTick: {
        splitNumber: 10,
        show: true,
        lineStyle: {
          color: 'auto',
          width: 2
        },
        length: 6,
      }, //刻度样式
      splitLine: {
        show: true,
        length: 12,
        lineStyle: {
          color: 'auto',
          width: 1
        }
      }, //分隔线样式

      "itemStyle": {
        "normal": {
          "color": "#24D8E7" //指针颜色
        }
      },
      pointer: {
        width: 5,
        length: '85%'
      },
      detail: {
        formatter: function (params) {
          return (params * 100).toFixed(0) + '%'
        },
        fontSize: 16,
        offsetCenter: ['0%', '-50%']
      },
      title: {
        offsetCenter: ['0', '40%'],
        fontSize: 16,
        color: "#fff",
        show: true
      },
    }]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}
// 支部完成率
function assess_12 () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('assess_12'));

  option = {
    tooltip: {
      formatter: "{b}：{c}"
    },
    series: [{
      tooltip: {
        show: false
      },
      "name": 'wrap',
      "type": 'pie',
      "hoverAnimation": false,
      "legendHoverLink": false,
      center: ['50%', '70%'],
      "radius": ['0%', '7%'],
      "z": 5,
      "label": {
        "normal": {
          "show": false,
          "position": 'center'
        },
        "emphasis": {
          "show": false
        }
      },
      "labelLine": {
        "normal": {
          "show": false
        }
      },
      "data": [{
        "value": 100,
        itemStyle: {
          normal: {
            color: "#072B79"
          },
          emphasis: {
            color: "#072B79"
          }
        }
      }]
    }, {
      tooltip: {
        show: false
      },
      "name": 'wrap',
      "type": 'pie',
      "hoverAnimation": false,
      "legendHoverLink": false,
      center: ['50%', '70%'],
      "radius": ['6%', '8%'],
      "z": 5,
      "label": {
        "normal": {
          "show": false,
          "position": 'center'
        },
        "emphasis": {
          "show": false
        }
      },
      "labelLine": {
        "normal": {
          "show": false
        }
      },
      "data": [{
        "value": 100,
        itemStyle: {
          normal: {
            color: "#24D8E7"
          },
          emphasis: {
            color: "#24D8E7"
          }
        }
      }]
    }, {
      tooltip: {
        show: false
      },
      name: '刻度',
      type: 'gauge',
      radius: '105%',
      z: 1,
      min: 0,
      max: 1,
      center: ['50%', '70%'],
      splitNumber: 5, //刻度数量
      startAngle: 180,
      endAngle: 0,
      axisLine: {
        show: true,
        lineStyle: {
          width: 4,
          color: [
            [0.2, '#ed3f35'],
            [0.4, '#F88168'],
            [0.6, '#ffff00'],
            [0.8, '#00f2f1'],
            [1, '#7FFF00'],
          ]
        }
      }, //仪表盘轴线
      axisLabel: {
        show: false
      }, //刻度标签。
      axisTick: {
        show: true,
        lineStyle: {
          color: 'auto',
          width: 0
        },
        length: -15
      }, //刻度样式
      splitLine: {
        show: true,
        length: 0,
        lineStyle: {
          color: 'auto',
          width: 2
        }
      }, //分隔线样式
      detail: {
        show: false
      },
      pointer: {
        show: false
      }
    }, {
      name: '本期',
      type: 'gauge',
      radius: '95%',
      min: 0,
      max: 1,
      center: ['50%', '70%'],
      data: [{
        value: finishRate,
        name: '支部完成率'
      }],
      splitNumber: 4, //刻度数量
      startAngle: 180,
      endAngle: 0,
      z: 5,
      axisLine: {
        show: true,
        lineStyle: {
          width: 0,
          color: [
            [0.2, '#ed3f35'],
            [0.4, '#F88168'],
            [0.6, '#ffff00'],
            [0.8, '#00f2f1'],
            [1, '#7FFF00'],
          ]
        }
      }, //仪表盘轴线
      axisLabel: {
        show: true,
        color: '#fff',
        fontSize: 14,
        distance: -38,
        formatter: function (params) {
          var value = params.toFixed(2)
          if (value == 0.00) {
            return '危'
          } else if (value == 0.25) {
            return '差'
          } else if (value == 0.50) {
            return '中'
          } else if (value == 0.75) {
            return '良'
          } else if (value == 1.00) {
            return '优'
          } else {
            return ''
          }
        }
      }, //刻度标签。
      axisTick: {
        splitNumber: 10,
        show: true,
        lineStyle: {
          color: 'auto',
          width: 2
        },
        length: 6,
      }, //刻度样式
      splitLine: {
        show: true,
        length: 12,
        lineStyle: {
          color: 'auto',
          width: 1
        }
      }, //分隔线样式

      "itemStyle": {
        "normal": {
          "color": "#24D8E7" //指针颜色
        }
      },
      pointer: {
        width: 5,
        length: '85%'
      },
      detail: {
        formatter: function (params) {
          return (params * 100).toFixed(0) + '%'
        },
        fontSize: 16,
        offsetCenter: ['0%', '-50%']
      },
      title: {
        offsetCenter: ['0', '40%'],
        fontSize: 16,
        color: "#fff",
        show: true
      },
    }]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}
//不称职人员
function assess_21 () {
  var dataArray = notPassPerson;

  var tr = "";
  for (var i = 0; i < dataArray.length; i++) {
    tr = tr + '<tr>' +
      "<td>" + (i + 1) + "</td>" +
      "<td>" + dataArray[i].uname + "</td>" +
      '</tr>';
  }
  $('#assess_21').append(tr);
}
//未按规定考核人员信息
function assess_22 () {
  var dataArray = notAssessPerson;

  var tr = "";
  for (var i = 0; i < dataArray.length; i++) {
    tr = tr + '<tr>' +
      "<td>" + (i + 1) + "</td>" +
      "<td>" + dataArray[i].uname + "</td>" +
      '</tr>';
  }
  $('#assess_22').append(tr);
}
// 当月全员考核情况汇总
function assess_3 () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector("#assess_3"));
  var legendData = ['优秀', '称职', '基本称职', '不称职'];
  let title = '总人数';
  let color = ["#22EC20", "#F1C62C", '#FF8352', '#E271DE'];
  let echartData = [{
    name: '优秀',
    value: excellent
  },
  {
    name: '称职',
    value: good
  },
  {
    name: '基本称职',
    value: pass
  },
  {
    name: '不称职',
    value: noPass
  }
  ];

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

//全员考核情况年度分析
function assess_4 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#assess_4"));
  var legendData = ['优秀(%)', '称职(%)', '基本称职(%)', '不称职(%)'];
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
        formatter: '{value}%',
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
function assess_5 () {
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
    },],

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
function assess_6 () {
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
    },],

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


let developRate = [] //开展率
let finishRate = [] //完成率
let excellent = 0 //优秀
let good = 0 //称职
let pass = 0 //基本称职
let noPass = 0 //不称职

let notPassPerson = []
let notAssessPerson = []

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

function getAssessDetailData () {

  $.ajax({
    type: 'GET',
    url: 'http://localhost:8880/assessUnit/getAssessUnit',
    traditional: true,
    data: {
      unitId: localStorage.getItem("unitId"),
      month: localStorage.getItem("month"),
    },
    success: function (response) {
      let assess = response.extra.assessmentUnit
      developRate = (assess.startNum / assess.total).toFixed(2)
      finishRate = (assess.finishNum / assess.total).toFixed(2)
      excellent = assess.excellent
      good = assess.good
      pass = assess.pass
      noPass = assess.nopass

      assess_11();
      assess_12();
      assess_3();
    },
    error: function (response) {
      console.log(response);
    }
  })


  $.ajax({
    type: 'GET',
    url: 'http://localhost:8880/assessPerson/getAssessPersonByUnit',
    traditional: true,
    data: {
      unitId: localStorage.getItem("unitId"),
      month: localStorage.getItem("month")
    },
    success: function (response) {
      let personList = response.extra.personList
      for (let i = 0; i < personList.length; i++) {
        let person = personList[i]
        if (person.isStart == 2) {
          notAssessPerson.push(person)
        } else if (person.assessLevel == 4) {
          notPassPerson.push(person)
        }
      }

      assess_21();
      assess_22();
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
      unitId: localStorage.getItem("unitId"),
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