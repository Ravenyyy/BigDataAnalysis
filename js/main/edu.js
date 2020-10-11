//政治教育1
function edu_1 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#edu_1"));
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
        color: "#FFFFFF"
      }
    },
    grid: {
      top: "20%",
      left: "8%",
      right: "12%",
      bottom: "17%",
      show: true,
      borderColor: "rgba(255,255,255,0.2)",
      containLabel: false
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
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
        fontSize: 12,
        formatter:function(value){
          var res = value;
          if(res.length > 3) {
            res = res.substring(0, 2);
          }
          return res.split("").join("\n");
        }
      },
    },
    yAxis: [{
      name: '平均分',
      type: "value",
      // min: 70,
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
      name: '总完成率',
      type: "value",
      // min: 70,
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
      },
      axisLabel: {
        formatter: '{value} %'
      }
    },
    ],

    series: [{
      name: "总完成率",
      type: "line",
      // 是否让线条圆滑显示
      smooth: true,
      data: yData1
    },
    {
      name: "平均分",
      type: "line",
      smooth: true,
      data: yData2
    }
    ]
  };
  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

function getEduData () {
  $.ajax({
    type: 'GET',
    url: localStorage.getItem("url") + 'educationUnit/getUnitByParent',
    traditional: true,
    data: {
      parentId: localStorage.getItem("unitId"),
      month: localStorage.getItem("month")
    },
    success: function (response) {
      dataProcess(response);
      edu_1();
    },
    error: function (response) {
      console.log(response);
    }
  })
}

let unitNameList = [];
let yData1 = [];
let yData2 = [];
function dataProcess (response) {
  console.log(response)
  // let list = response.extra.unitList;
  // console.log(list)
  // for (var i = 0; i < response.extra.unitList.length; i++) {
  //   unitNameList.push(response.extra.unitList[i].unitName)
  //   yData1.push(response.extra.unitList[i].eduFinishRate)
  //   yData2.push(response.extra.unitList[i].eduAverage)
  // }
  for (var index in response.extra.unitList) {
    unitNameList.push(response.extra.unitList[index].unitName)
    yData1.push(response.extra.unitList[index].eduFinishRate * 100)
    yData2.push(response.extra.unitList[index].eduAverage)
    // console.log(yData2)
    // console.log(yData2)
  }
}