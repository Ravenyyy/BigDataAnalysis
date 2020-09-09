//政治教育1
function edu_1 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#edu_1"));
  var data = {
    edu: [
      [100, 100, 100, 100, 100, 100, 100, 100, 100, 82, 96, 100, 100, 100, 85],
      [97.7, 95.3, 98.2, 96.5, 99.2, 97.8, 98.3, 95.7, 99.1, 83.2, 92.2, 89.2, 96.6, 97.5, 89.2]
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
      bottom: "10%",
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
      data: [
        "武汉",
        "宜昌",
        "鄂州",
        "襄阳",
        "黄石",
        "荆门",
        "咸宁",
        "十堰",
        "随州",
        "孝感",
        "荆州",
        "黄冈",
        "恩施",
        "汉江",
        "训保"
      ],
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
      name: '平均分',
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
          color: "rgba(255,255,255,0.2)",
        }
      }
    },
    {
      name: '总完成率',
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
      name: "总完成率",
      type: "line",
      // 是否让线条圆滑显示
      smooth: true,
      data: data.edu[0]
    },
    {
      name: "平均分",
      type: "line",
      smooth: true,
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