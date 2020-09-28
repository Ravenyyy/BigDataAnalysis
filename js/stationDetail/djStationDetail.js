//组织生活完成情况
function dj_3 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#dj_3"));
  var xData = ["党员大会", "支部会", "党小组会", "党课", "党委会", "民主生活会", "组织生活会"];
  var data = {
    edu: [
      developNum,
      finishNum,
      zzshRate
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
function dj_4 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#dj_4"));
  var xData = ["缴纳党费", "重温誓词", "诵读党章", "集中学习", "民主议事", "特色实践", "党员汇报", "民主监督", "积分考评", "组织生活"];
  var data = {
    edu: [
      ssldRate
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
    },],

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
function dj_5 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#dj_5"));
  var xData = monthArr;
  var data = {
    edu: [
      yearSsldRate,
      yearZzshRate
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
    },],

    series: [{
      name: "十事联动完成率（%）",
      type: "line",
      lineStyle: {
        width: 3,
      },
      // 是否让线条圆滑显示
      smooth: false,
      data: data.edu[0]
    },
    {
      name: "组织生活完成率（%）",
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
function dj_6 () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector("#dj_6"));
  var xData = monthArr;
  var yData = [
    yearDy,
    yearNotDy,
    yearDyRate,
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

//组织结构图
const structureTempla = `
<Tree class = "tree" :data="data6" style = "overflow-y: scroll;height:4.8rem">
</Tree>
`

const structure = new Vue({
  el: '#dj_2',
  template: structureTempla,
  data () {
    return {
      data6: [{
        title: '七里庙消防站消防支队党委',
        expand: true,
        contextmenu: true,
        children: [{
          title: '书记',
          expand: true,
          contextmenu: true,
          children: [{
            title: '李飞',
            contextmenu: true
          }]
        },
        {
          title: '副书记',
          expand: true,
          contextmenu: true,
          children: [{
            title: '刘梦',
            contextmenu: true
          }]
        },
        {
          title: '委员',
          expand: true,
          contextmenu: true,
          children: [{
            title: '李彤',
            contextmenu: true
          },
          {
            title: '杨天保',
            contextmenu: true
          },
          {
            title: '李为',
            contextmenu: true
          }
          ]
        }
        ]
      }],
      contextData: null
    }
  },
  methods: {

  }
})

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

let dw = 0 //党委
let dzb = 0 //党支部
let dy = 0 //党员
let rdjjfz = 0 //入党积极分子

let developNum = [] //组织生活规定数量
let finishNum = [] //组织生活完成数量
let zzshRate = [] //参会率
let ssldRate = [] //十事联动完成率

let monthArr = []
let yearSsldRate = []
let yearZzshRate = []
let yearDy = []
let yearNotDy = []
let yearDyRate = []


function getDjDetailData () {
  $.ajax({
    type: 'GET',
    url: localStorage.getItem("url") + 'partyBuildUnit/getPartyBuildUnit',
    traditional: true,
    data: {
      unitId: localStorage.getItem("unitId"),
      month: localStorage.getItem("month")
    },
    success: function (response) {
      let partyBuild = response.extra.partyBuildUnit
      developNum.push(Math.round(partyBuild.dydhDevelopRate * partyBuild.total))
      developNum.push(Math.round(partyBuild.zwhDevelopRate * partyBuild.total))
      developNum.push(Math.round(partyBuild.dzxhDevelopRate * partyBuild.total))
      developNum.push(Math.round(partyBuild.dkDevelopRate * partyBuild.total))
      developNum.push(Math.round(partyBuild.dwhDevelopRate * partyBuild.total))
      developNum.push(Math.round(partyBuild.mzshhDevelopRate * partyBuild.total))
      developNum.push(Math.round(partyBuild.zzshhDevelopRate * partyBuild.total))
      finishNum.push(Math.round(partyBuild.dydhJoinRate * partyBuild.total))
      finishNum.push(Math.round(partyBuild.zwhJoinRate * partyBuild.total))
      finishNum.push(Math.round(partyBuild.dzxhJoinRate * partyBuild.total))
      finishNum.push(Math.round(partyBuild.dkJoinRate * partyBuild.total))
      finishNum.push(Math.round(partyBuild.dwhJoinRate * partyBuild.total))
      finishNum.push(Math.round(partyBuild.mzshhJoinRate * partyBuild.total))
      finishNum.push(Math.round(partyBuild.zzshhJoinRate * partyBuild.total))
      zzshRate.push((partyBuild.dydhJoinRate / partyBuild.dydhDevelopRate).toFixed(4) * 100)
      zzshRate.push((partyBuild.zwhJoinRate / partyBuild.zwhDevelopRate).toFixed(4) * 100)
      zzshRate.push((partyBuild.dzxhJoinRate / partyBuild.dzxhDevelopRate).toFixed(4) * 100)
      zzshRate.push((partyBuild.dkJoinRate / partyBuild.dkDevelopRate).toFixed(4) * 100)
      zzshRate.push((partyBuild.dwhJoinRate / partyBuild.dwhDevelopRate).toFixed(4) * 100)
      zzshRate.push((partyBuild.mzshhJoinRate / partyBuild.mzshhDevelopRate).toFixed(4) * 100)
      zzshRate.push((partyBuild.zzshhJoinRate / partyBuild.zzshhDevelopRate).toFixed(4) * 100)
      ssldRate.push(partyBuild.jndfJoinRate * 100)
      ssldRate.push(partyBuild.cwscJoinRate * 100)
      ssldRate.push(partyBuild.sddzJoinRate * 100)
      ssldRate.push(partyBuild.jzxxJoinRate * 100)
      ssldRate.push(partyBuild.mzysJoinRate * 100)
      ssldRate.push(partyBuild.tssjJoinRate * 100)
      ssldRate.push(partyBuild.dyhbJoinRate * 100)
      ssldRate.push(partyBuild.mzjdJoinRate * 100)
      ssldRate.push(partyBuild.jfkpJoinRate * 100)
      ssldRate.push(partyBuild.zzshJoinRate * 100)

      dw = partyBuild.dwMun + ''
      dzb = partyBuild.dzbMun + ''
      dy = partyBuild.partyMember + ''
      rdjjfz = partyBuild.candidate + ''

      var dwArray = strToArray(dw)
      var dwStr = ""
      for (var i = 0; i < dw.length; i++) {
        dwStr += '<div class= "block">' + dwArray[i] + '</div>';
      }
      document.getElementById("dw").innerHTML = dwStr;

      var dzbArray = strToArray(dzb)
      var dzbStr = ""
      for (var i = 0; i < dzb.length; i++) {
        dzbStr += '<div class= "block">' + dzbArray[i] + '</div>';
      }
      document.getElementById("dzb").innerHTML = dzbStr;

      var dyArray = strToArray(dy)
      var dyStr = ""
      for (var i = 0; i < dy.length; i++) {
        dyStr += '<div class= "block">' + dyArray[i] + '</div>';
      }
      document.getElementById("dy").innerHTML = dyStr;

      var rdjjfzArray = strToArray(rdjjfz)
      var rdjjfzStr = ""
      for (var i = 0; i < rdjjfz.length; i++) {
        rdjjfzStr += '<div class= "block">' + rdjjfzArray[i] + '</div>';
      }
      document.getElementById("rdjjfz").innerHTML = rdjjfzStr;

      dj_3();
      dj_4();
    },
    error: function (response) {
      console.log(response);
    }
  })

  $.ajax({
    type: 'GET',
    url: localStorage.getItem("url") + 'partyBuildUnit/getOneYearList',
    traditional: true,
    data: {
      unitId: localStorage.getItem("unitId"),
      month: localStorage.getItem("month")
    },
    success: function (response) {
      let unitList = response.extra.unitList
      console.log(unitList);
      for (let i = 0; i < unitList.length; i++) {
        monthArr.push(unitList[i].month.substring(5, 7) + '月')

        yearSsldRate.push(((unitList[i].jndfJoinRate + unitList[i].cwscJoinRate + unitList[i].sddzJoinRate +
          unitList[i].jzxxJoinRate + unitList[i].mzysJoinRate + unitList[i].tssjJoinRate + unitList[i].dyhbJoinRate + unitList[i].mzjdJoinRate +
          unitList[i].jfkpJoinRate + unitList[i].zzshJoinRate) / 10).toFixed(2) * 100)
        yearZzshRate.push(((unitList[i].dydhJoinRate + unitList[i].zwhJoinRate + unitList[i].dzxhJoinRate + unitList[i].dkJoinRate + unitList[i].dwhJoinRate +
          unitList[i].mzshhJoinRate + unitList[i].zzshhJoinRate) / 7).toFixed(2) * 100)

        yearDy.push(unitList[i].partyMember)
        yearNotDy.push(unitList[i].total - unitList[i].partyMember)
        yearDyRate.push(((unitList[i].partyMember / unitList[i].total) * 100).toFixed(2))
      }
      dj_5();
      dj_6();
    },
    error: function (response) {
      console.log(response);
    }
  })

  $.ajax({
    type: 'GET',
    url: localStorage.getItem("url") + 'user/getDwByUnitId',
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