// 全员考核
function assess_1 () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector("#assess_1"));

  option = {
    color: ["#ed3f35", "#BBFFFF", "#4EEE94", "#FAD860"],
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      top: '0',
      data: ['优秀', '称职', '基本称职', '不称职'],
      textStyle: {
        color: "white"
      }
    },
    grid: {
      top: '10%',
      left: '3%',
      right: '5%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      // data: ['武汉', '宜昌', '鄂州', '襄阳', '黄石', '荆门', '咸宁', '十堰', '随州', '孝感', '荆州', '黄冈', '恩施', '汉江', '训保'],
      data: nameArr,
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
    yAxis: {
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
    series: [{
      name: '优秀',
      type: 'bar',
      barWidth: '40%',
      stack: '总量',
      // data: [330, 302, 301, 334, 140, 210, 200, 220, 302, 301, 334, 99, 102, 100, 230],
      data: excellentArr,

    },
    {
      name: '称职',
      type: 'bar',
      barWidth: '40%',
      stack: '总量',
      // data: [520, 232, 201, 134, 200, 360, 330, 320, 132, 101, 194, 320, 310, 300, 300],
      data: goodArr,

    },
    {
      name: '基本称职',
      type: 'bar',
      barWidth: '40%',
      stack: '总量',
      // data: [320, 182, 191, 234, 230, 330, 310, 340, 182, 191, 234, 104, 98, 130, 199],
      data: passArr,

    },
    {
      name: '不称职',
      type: 'bar',
      barWidth: '40%',
      stack: '总量',
      // data: [110, 212, 201, 154, 110, 160, 120, 150, 212, 201, 154, 80, 90, 100, 251],
      data: noPassArr,

    }
    ]
  };


  // 3. 把配置和数据给实例对象
  myChart.setOption(option);

  // 重新把配置好的新数据给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

//全员考核的两个数字仪表盘
function assess_2 () {

  option = {
    title: {
      text: '',
      x: 'center',
      y: 'center',
      textStyle: {
        rich: {
          a: {
            fontSize: 19,
            color: '#ffffff'
          },
          c: {
            fontSize: 12,
            color: '#ffffff',
            padding: [3, 3]
          },

        }
      }
    },
    grid: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    series: [{
      type: 'gauge',
      radius: '90%',
      clockwise: false,
      startAngle: '90',
      endAngle: '-269.9999',
      //调整间隔距离
      splitNumber: 0,
      detail: {
        offsetCenter: [0, -20],
        formatter: ' '
      },
      pointer: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: [
            [0, '#468EFD'],
            //计算比例
            [0.7622, 'rgba(32,187,252,0.15)'],

            [1, '#00F5FF']
          ],
          width: 6
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: true,
        length: 0,
        lineStyle: {
          width: 6
        }
      },
      axisLabel: {
        show: false
      }
    }]
  };

  let value = developRate;
  let title = '支部开展率';

  option.title.text = '{a|' + value + '%}\n{c|' + title + '}'
  var myChart1 = echarts.init(document.querySelector("#assess_2"));
  // 3. 把配置和数据给实例对象
  myChart1.setOption(option);
  window.addEventListener("resize", function () {
    myChart1.resize();
  });

  value = joinRate
  title = '人员参与率'
  option.title.text = '{a|' + value + '%}\n{c|' + title + '}'
  var myChart2 = echarts.init(document.querySelector("#assess_3"));
  // 3. 把配置和数据给实例对象
  myChart2.setOption(option);
  window.addEventListener("resize", function () {
    myChart2.resize();
  });

  value = excellent
  title = '优秀人数'
  option.title.text = '{a|' + value + '}\n{c|' + title + '}'
  var myChart3 = echarts.init(document.querySelector("#assess_4"));
  // 3. 把配置和数据给实例对象
  myChart3.setOption(option);
  window.addEventListener("resize", function () {
    myChart3.resize();
  });

  value = noPass
  title = '不称职人数'
  option.title.text = '{a|' + value + '}\n{c|' + title + '}'
  var myChart4 = echarts.init(document.querySelector("#assess_5"));
  // 3. 把配置和数据给实例对象
  myChart4.setOption(option);
  window.addEventListener("resize", function () {
    myChart4.resize();
  });
}

let developRate = 0;
let joinRate = 0;
let excellent = 0;
let noPass = 0;
let nameArr = [];
let excellentArr = [];
let goodArr = [];
let passArr = [];
let noPassArr = [];


function getAssessData () {
  $.ajax({
    type: 'GET',
    url: localStorage.getItem("url") + 'assessUnit/getAssessUnit',
    traditional: true,
    data: {
      unitId: localStorage.getItem("unitId"),
      month: localStorage.getItem("month")
    },
    success: function (response) {
      dataProcess2(response)
      assess_2()
    },
    error: function (response) {
      console.log(response);
    }
  })

  $.ajax({
    type: 'GET',
    url: localStorage.getItem("url") + 'assessUnit/getUnitByParent',
    traditional: true,
    data: {
      parentId: localStorage.getItem("unitId"),
      month: localStorage.getItem("month")
    },
    success: function (response) {
      dataProcess1(response)
      assess_1()
    },
    error: function (response) {
      console.log(response);
    }
  })
}

function dataProcess1 (response) {
  let unitList = response.extra.unitList
  for (let i = 0; i < unitList.length; i++) {
    nameArr.push(unitList[i].unitName)
    excellentArr.push(unitList[i].excellent)
    goodArr.push(unitList[i].good)
    passArr.push(unitList[i].pass)
    noPassArr.push(unitList[i].nopass)
  }

}

function dataProcess2 (response) {
  let assessment = response.extra.assessmentUnit
  developRate = 100 * assessment.startNum / assessment.total
  developRate = developRate.toFixed(2)
  joinRate = 100 * assessment.finishNum / assessment.total
  joinRate = joinRate.toFixed(2)
  excellent = assessment.excellent
  noPass = assessment.nopass
}