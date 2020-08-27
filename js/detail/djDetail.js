//主题党日“十事联动”支部开展情况统计
function dj_1() {
  var dataArray = [{
      name: "武汉",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
      col8: "100%",
      col9: "100%",
      col10: "100%",
    },
    {
      name: "宜昌",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
      col8: "100%",
      col9: "100%",
      col10: "100%",
    },
    {
      name: "鄂州",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
      col8: "100%",
      col9: "100%",
      col10: "100%",
    },
    {
      name: "襄阳",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
      col8: "100%",
      col9: "100%",
      col10: "100%",
    },
    {
      name: "黄石",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
      col8: "100%",
      col9: "100%",
      col10: "100%",
    },
    {
      name: "荆门",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
      col8: "100%",
      col9: "100%",
      col10: "100%",
    },
    {
      name: "咸宁",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
      col8: "100%",
      col9: "100%",
      col10: "100%",
    },
    {
      name: "十堰",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
      col8: "100%",
      col9: "100%",
      col10: "100%",
    },
    {
      name: "随州",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
      col8: "100%",
      col9: "100%",
      col10: "100%",
    },
    {
      name: "孝感",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
      col8: "100%",
      col9: "100%",
      col10: "100%",
    },
    {
      name: "荆州",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
      col8: "100%",
      col9: "100%",
      col10: "100%",
    },
    {
      name: "黄冈",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
      col8: "100%",
      col9: "100%",
      col10: "100%",
    },
    {
      name: "恩施",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
      col8: "100%",
      col9: "100%",
      col10: "100%",
    },
    {
      name: "汉江",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
      col8: "100%",
      col9: "100%",
      col10: "100%",
    },
    {
      name: "训保",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
      col8: "100%",
      col9: "100%",
      col10: "100%",
    },
  ];

  var tr = "";
  for (var i = 0; i < dataArray.length; i++) {
    tr = tr + '<tr>' +
      "<td>" + dataArray[i].name + "</td>" +
      "<td>" + dataArray[i].col1 + "</td>" +
      "<td>" + dataArray[i].col2 + "</td>" +
      "<td>" + dataArray[i].col3 + "</td>" +
      "<td>" + dataArray[i].col4 + "</td>" +
      "<td>" + dataArray[i].col5 + "</td>" +
      "<td>" + dataArray[i].col6 + "</td>" +
      "<td>" + dataArray[i].col7 + "</td>" +
      "<td>" + dataArray[i].col8 + "</td>" +
      "<td>" + dataArray[i].col9 + "</td>" +
      "<td>" + dataArray[i].col10 + "</td>" +
      '</tr>';
  }
  $('#dj_1').append(tr);
}
//组织生活开展情况统计
function dj_2() {
  var dataArray = [{
      name: "武汉",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
    },
    {
      name: "宜昌",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
    },
    {
      name: "鄂州",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
    },
    {
      name: "襄阳",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
    },
    {
      name: "黄石",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
    },
    {
      name: "荆门",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
    },
    {
      name: "咸宁",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
    },
    {
      name: "十堰",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
    },
    {
      name: "随州",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
    },
    {
      name: "孝感",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
    },
    {
      name: "荆州",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
    },
    {
      name: "黄冈",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
    },
    {
      name: "恩施",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
    },
    {
      name: "汉江",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
    },
    {
      name: "训保",
      col1: "100%",
      col2: "100%",
      col3: "100%",
      col4: "100%",
      col5: "100%",
      col6: "100%",
      col7: "100%",
    },
  ];

  var tr = "";
  for (var i = 0; i < dataArray.length; i++) {
    tr = tr + '<tr>' +
      "<td>" + dataArray[i].name + "</td>" +
      "<td>" + dataArray[i].col1 + "</td>" +
      "<td>" + dataArray[i].col2 + "</td>" +
      "<td>" + dataArray[i].col3 + "</td>" +
      "<td>" + dataArray[i].col4 + "</td>" +
      "<td>" + dataArray[i].col5 + "</td>" +
      "<td>" + dataArray[i].col6 + "</td>" +
      "<td>" + dataArray[i].col7 + "</td>" +
      '</tr>';
  }
  $('#dj_2').append(tr);
}
//党员数量及占比统计
function dj_4() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector("#dj_4"));
  var xData = ["武汉", "宜昌", "鄂州", "襄阳", "黄石", "荆门", "咸宁", "十堰", "随州", "孝感", "荆州", "黄冈", "恩施", "汉江", "训保"];
  var yData = [
    [661, 234, 243, 223, 221, 222, 233, 202, 232, 232, 192, 222, 232, 221, 214],
    [487, 143, 145, 154, 134, 153, 146, 137, 145, 114, 145, 125, 134, 204, 256],
    [56, 67, 54, 53, 53, 52, 65, 67, 67, 68, 63, 59, 58, 54, 55],
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
      left: '4%',
      right: '2%',
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
//党委数量、党支部数量统计
function dj_5() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector("#dj_5"));
  var xData = ["武汉", "宜昌", "鄂州", "襄阳", "黄石", "荆门", "咸宁", "十堰", "随州", "孝感", "荆州", "黄冈", "恩施", "汉江", "训保"];
  var yData = [
    [25, 11, 8, 6, 10, 9, 10, 12, 13, 9, 10, 12, 13, 12, 9],
    [164, 32, 34, 23, 41, 32, 42, 31, 29, 28, 34, 41, 32, 31, 29]
  ];
  option = {
    color: ["#22EC20", "#F1C62C"],
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
      top: '15%',
      left: '2%',
      right: '2%',
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
      name: "数量",
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
    }],
    series: [{
        name: '党委数量',
        type: 'bar',
        barWidth: '40%',
        stack: '总量',
        data: yData[0],
        // label: {
        //   normal: {
        //     show: true,
        //     position: 'middle',
        //     textStyle: {
        //       color: 'white',
        //       fontSize: 13
        //     }
        //   }
        // },
      },
      {
        name: '党支部数量',
        type: 'bar',
        barWidth: '40%',
        stack: '总量',
        data: yData[1],
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
//党员数量及占比情况年度分析
function dj_6() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector("#dj_6"));
  var xData = ["8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月", "6月", "7月"];
  var yData = [
    [661, 234, 243, 223, 221, 222, 233, 202, 232, 232, 192, 222],
    [187, 43, 45, 14, 34, 53, 46, 17, 45, 14, 15, 25],
    [56, 67, 54, 53, 53, 52, 65, 67, 67, 68, 63, 56],
  ];
  option = {
    color: ["#FF9A00", "#ed3f35", "#BBFFFF", ],
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

// $(function () {
//   var strtBlocks = $("div.strt-block");
//   strtBlocks.each(function (n) {
//     var childs = $(this).children();
//     var w = (childs.last().width() - childs.first().width()) / 4;
//     if (w > 0) {
//       $(this).css("margin-left", w)
//     } else {
//       $(this).css("padding-right", -w * 2);
//     }
//   });

//   var strtWrap = $("#strtWrap");
//   strtWrap.width(strtWrap.children().width());
//   strtWrap.draggable({
//     cursor: "move",
//     opacity: 0.5
//   });
// });