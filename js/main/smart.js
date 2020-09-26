//智慧营区
function smart () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('smart'));

  var myColor = ['#00FFFF', '#00FFFF', '#00FFFF', '#00FFFF', '#00FFFF'];
  option = {
    grid: {
      left: '6%',
      top: '20%',
      right: '0%',
      bottom: '8%',
      containLabel: true
    },
    xAxis: [{
      show: false,
    }],
    yAxis: [{
      axisTick: 'none',
      axisLine: 'none',
      offset: '27',
      axisLabel: {
        textStyle: {
          color: '#ffffff',
          fontSize: '18',
        }
      },
      data: ['手机违规使用人数',
        '违规驾驶人数',
        '训练不合格人数',
        '睡眠质量不良人数'
      ]
    }, {
      axisTick: 'none',
      axisLine: 'none',
      axisLabel: {
        textStyle: {
          color: '#ffffff',
          fontSize: '16',
        }
      },
      data: ['114', '145', '101', '70']
    }, {
      name: '',
      nameGap: '50',
      nameTextStyle: {
        color: '#ffffff',
        fontSize: '16',
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(0,0,0,0)'
        }
      },
      data: [],
    }],
    series: [{
      name: '条',
      type: 'bar',
      yAxisIndex: 0,
      data: ['114', '145', '101', '70'],
      barWidth: 8,
      itemStyle: {
        normal: {
          color: function (params) {
            var num = myColor.length;
            return myColor[params.dataIndex % num]
          },
        }
      },
      z: 2
    }, {
      name: '白框',
      type: 'bar',
      yAxisIndex: 1,
      barGap: '-100%',
      data: [149, 149, 149, 149],
      barWidth: 12,
      itemStyle: {
        normal: {
          color: '#0e2147',
          barBorderRadius: 5,
        }
      },
      z: 1
    }, {
      name: '外框',
      type: 'bar',
      yAxisIndex: 2,
      barGap: '-100%',
      data: [150, 150, 150, 150],
      barWidth: 18,
      itemStyle: {
        normal: {
          color: function (params) {
            var num = myColor.length;
            return myColor[params.dataIndex % num]
          },
          barBorderRadius: 5,
        }
      },
      z: 0
    },
    {
      name: '外圆',
      type: 'scatter',
      hoverAnimation: false,
      data: [0, 0, 0, 0],
      yAxisIndex: 2,
      symbolSize: 26,
      itemStyle: {
        normal: {
          color: function (params) {
            var num = myColor.length;
            return myColor[params.dataIndex % num]
          },
          opacity: 1,
        }
      },
      z: 2
    }
    ]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}