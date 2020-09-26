//组织结构图
const structureTempla = `
<Tree class = "tree" :data="data6"style = "overflow-y: scroll;height:4.8rem">
</Tree>
`

const structure = new Vue({
  el: '#dj_3',
  template: structureTempla,
  data () {
    return {
      data6: [{
        title: '武汉市消防支队党委',
        expand: true,
        contextmenu: true,
        children: [{
          title: '书记',
          expand: true,
          contextmenu: true,
          children: []
        },
        {
          title: '副书记',
          expand: true,
          contextmenu: true,
          children: []
        },
        {
          title: '委员',
          expand: true,
          contextmenu: true,
          children: []
        }
        ]
      }],
      contextData: null
    }
  },
  methods: {

  }
})
//主题党日“十事联动”支部开展情况统计
function dj_1 () {

  var tr = "";
  for (var i = 0; i < ssldDevelopArr.length; i++) {
    tr = tr + '<tr>' +
      "<td>" + ssldDevelopArr[i].name + "</td>" +
      "<td>" + ssldDevelopArr[i].col1 + "</td>" +
      "<td>" + ssldDevelopArr[i].col2 + "</td>" +
      "<td>" + ssldDevelopArr[i].col3 + "</td>" +
      "<td>" + ssldDevelopArr[i].col4 + "</td>" +
      "<td>" + ssldDevelopArr[i].col5 + "</td>" +
      "<td>" + ssldDevelopArr[i].col6 + "</td>" +
      "<td>" + ssldDevelopArr[i].col7 + "</td>" +
      "<td>" + ssldDevelopArr[i].col8 + "</td>" +
      "<td>" + ssldDevelopArr[i].col9 + "</td>" +
      "<td>" + ssldDevelopArr[i].col10 + "</td>" +
      '</tr>';
  }
  $('#dj_1').append(tr);
}
//组织生活开展情况统计
function dj_2 () {
  var tr = "";
  for (var i = 0; i < zzshDevelopArr.length; i++) {
    tr = tr + '<tr>' +
      "<td>" + zzshDevelopArr[i].name + "</td>" +
      "<td>" + zzshDevelopArr[i].col1 + "</td>" +
      "<td>" + zzshDevelopArr[i].col2 + "</td>" +
      "<td>" + zzshDevelopArr[i].col3 + "</td>" +
      "<td>" + zzshDevelopArr[i].col4 + "</td>" +
      "<td>" + zzshDevelopArr[i].col5 + "</td>" +
      "<td>" + zzshDevelopArr[i].col6 + "</td>" +
      "<td>" + zzshDevelopArr[i].col7 + "</td>" +
      '</tr>';
  }
  $('#dj_2').append(tr);
}
//党员数量及占比统计
function dj_4 () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector("#dj_4"));
  var xData = unitNameArr;
  var yData = [
    dyNumArr,
    notDyNumArr,
    dyRateArr,
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
function dj_5 () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector("#dj_5"));
  var xData = unitNameArr;
  var yData = [
    dwNumArr,
    dzbNumArr
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
function dj_6 () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector("#dj_6"));
  var xData = monthArr;
  var yData = [
    yearDyArr,
    yearNotDyArr,
    yearDyRate,
  ];
  option = {
    color: ["#FF9A00", "#ed3f35", "#BBFFFF",],
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

let ssldDevelopArr = [] //十事联动开展率数组
let zzshDevelopArr = [] //组织生活开展率数组
let unitNameArr = [] //下级单位名数组
let dwNumArr = [] //党委数量数组
let dzbNumArr = [] //党支部数量数组
let dyNumArr = [] //党员数量数组
let notDyNumArr = [] //非党员数组
let dyRateArr = [] //党员占比数组
let monthArr = [] //一年的月份
let yearDyArr = [] // 年度统计党员数量
let yearNotDyArr = [] //年度统计非党员数量
let yearDyRate = [] //年度统计党员占比

function getDjDetailData () {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:8880/partyBuildUnit/getUnitByParent',
    traditional: true,
    data: {
      parentId: localStorage.getItem("unitId"),
      month: localStorage.getItem("month")
    },
    success: function (response) {
      let unitList = response.extra.unitList
      for (let i = 0; i < unitList.length; i++) {
        let item_1 = {
          name: unitList[i].unitName,
          col1: unitList[i].jndfDevelopRate * 100 + '%',
          col2: unitList[i].cwscDevelopRate * 100 + '%',
          col3: unitList[i].sddzDevelopRate * 100 + '%',
          col4: unitList[i].jzxxDevelopRate * 100 + '%',
          col5: unitList[i].mzysDevelopRate * 100 + '%',
          col6: unitList[i].tssjDevelopRate * 100 + '%',
          col7: unitList[i].dyhbDevelopRate * 100 + '%',
          col8: unitList[i].mzjdDevelopRate * 100 + '%',
          col9: unitList[i].jfkpDevelopRate * 100 + '%',
          col10: unitList[i].zzshDevelopRate * 100 + '%',
        }
        let item_2 = {
          name: unitList[i].unitName,
          col1: unitList[i].dydhDevelopRate * 100 + '%',
          col2: unitList[i].zwhDevelopRate * 100 + '%',
          col3: unitList[i].dzxhDevelopRate * 100 + '%',
          col4: unitList[i].dkDevelopRate * 100 + '%',
          col5: unitList[i].dwhDevelopRate * 100 + '%',
          col6: unitList[i].mzshhDevelopRate * 100 + '%',
          col7: unitList[i].zzshhDevelopRate * 100 + '%',
        }
        ssldDevelopArr.push(item_1)
        zzshDevelopArr.push(item_2)

        unitNameArr.push(unitList[i].unitName)
        dwNumArr.push(unitList[i].dwMun)
        dzbNumArr.push(unitList[i].dzbMun)
        dyNumArr.push(unitList[i].partyMember)
        notDyNumArr.push(unitList[i].total - unitList[i].partyMember)
        dyRateArr.push(((unitList[i].partyMember / unitList[i].total) * 100).toFixed(2))
      }
      dj_1();
      dj_2();
      dj_4();
      dj_5();
    },
    error: function (response) {
      console.log(response);
    }
  })

  $.ajax({
    type: 'GET',
    url: 'http://localhost:8880/partyBuildUnit/getOneYearList',
    traditional: true,
    data: {
      unitId: localStorage.getItem("unitId"),
      month: localStorage.getItem("month")

    },
    success: function (response) {
      let unitList = response.extra.unitList
      for (let i = 0; i < unitList.length; i++) {
        monthArr.push(unitList[i].month.substring(5, 7) + '月')
        yearDyArr.push(unitList[i].partyMember)
        yearNotDyArr.push(unitList[i].total - unitList[i].partyMember)
        yearDyRate.push(((unitList[i].partyMember / unitList[i].total) * 100).toFixed(2))
      }
      dj_6();
    },
    error: function (response) {
      console.log(response);
    }
  })

  $.ajax({
    type: 'GET',
    url: 'http://localhost:8880/user/getDwByUnitId',
    traditional: true,
    data: {
      unitId: localStorage.getItem("unitId"),
    },
    success: function (response) {
      let userList = response.extra.userList
      structure.data6[0].title = response.extra.title
      for (let i = 0; i < userList.length; i++) {
        let item = {
          title: userList[i].uname,
          contextmenu: true
        }
        if (userList[i].position == 1) {
          structure.data6[0].children[0].children.push(item)
        } else if (userList[i].position == 2) {
          structure.data6[0].children[1].children.push(item)
        } else if (userList[i].position == 3) {
          structure.data6[0].children[2].children.push(item)
        }
      }
    },
    error: function (response) {
      console.log(response);
    }
  })



}