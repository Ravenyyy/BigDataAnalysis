// 心理测询1
function heart () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#heart"));
  // 指定配置和数据
  var option = {
    title: {
      text: "是否异常:" + isProblem,
      right: "10%",
      textStyle: {
        color: heartColor
      }
    },
    grid: {
      top: "12%",
      bottom: "12%"
    },
    tooltip: {
      show: true,
      trigger: 'item',
      padding: [5, 10],
      formatter: function (params) {
        let parm = [{
          name: '躁狂',
          max: 10
        },
        {
          name: '抑郁',
          max: 10
        },
        {
          name: '焦虑',
          max: 10
        },
        {
          name: '敌对',
          max: 10
        },
        {
          name: '强迫',
          max: 10
        },
        {
          name: '其他',
          max: 10
        }
        ]
        let obj = ''
        for (let i = 0; i < parm.length; i++) {
          obj = obj + '<div style="display: flex;align-items:center;justify-content:space-between;"><span>' + parm[i].name +
            '：</span><span style="margin-left:5px">' + (params.data.value[i] - 3) + '分</span></div>\n'
        }
        return params.seriesName + obj
      }

    },
    radar: {
      splitNumber: 4,
      name: {
        textStyle: {
          color: '#fff',
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: 3,
          padding: [2, 2]
        }
      },
      indicator: [{
        name: '躁狂',
        max: 10
      },
      {
        name: '抑郁',
        max: 10
      },
      {
        name: '焦虑',
        max: 10
      },
      {
        name: '敌对',
        max: 10
      },
      {
        name: '强迫',
        max: 10
      },
      {
        name: '其他',
        max: 10
      }
      ]
    },
    series: [{
      name: '心理测询',
      type: 'radar',
      areaStyle: {
        normal: {
          width: 1,
          opacity: 0.7,
        },
      },
      data: [{
        itemStyle: {
          normal: {
            color: '#67abff',
            lineStyle: {
              color: '#67abff',
            },
          },
        },
        value: heartList
      }]
    }]
  };

  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });

}

//智慧营区
function smart () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('smart'));

  var myColor = ['#00FFFF', '#00FFFF', '#00FFFF', '#00FFFF', '#00FFFF'];
  option = {
    grid: {
      left: '6%',
      top: '20%',
      right: '3%',
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
          fontSize: '14',
        }
      },
      data: ['手机违规使用次数',
        '违规驾驶次数',
        '训练不合格次数',
        '睡眠质量不良次数'
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
      data: ['1', '2', '0', '5']
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
      data: ['1', '2', '0', '5'],
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
      data: [10, 10, 10, 10],
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
      data: [10, 10, 10, 10],
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

// 全员考核
function assess_1 () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector("#assess"));

  var placeHolderStyle = {
    normal: {
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      color: "rgba(0,0,0,0)",
      borderWidth: 0
    },
    emphasis: {
      color: "rgba(0,0,0,0)",
      borderWidth: 0
    }
  };

  var dataStyle = {
    normal: {
      formatter: '{c}',
      position: 'center',
      show: true,
      textStyle: {
        fontSize: '30',
        fontWeight: 'normal',
        color: '#ffffff'
      }
    }
  };

  option = {
    title: {
      text: '本月考核',
      left: '45%',
      bottom: '20%',
      textAlign: 'center',
      textStyle: {
        color: '#fff',
        fontWeight: 'normal',
        fontSize: '25',
        textAlign: 'center',
      },
    },
    series: [{
      type: 'pie',
      hoverAnimation: false,
      radius: ['55%', '75%'],
      center: ['45%', '42%'],
      startAngle: 225,
      labelLine: {
        normal: {
          show: false
        }
      },
      label: {
        normal: {
          y: '40%'
        }
      },
      data: [{
        value: 100,
        "itemStyle": {
          "normal": {
            "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              "offset": 0,
              "color": '#00FF00'
            }, {
              "offset": 1,
              "color": '#ffff00'
            }]),
          }
        },
      }, {
        value: 35,
        itemStyle: placeHolderStyle,
      },

      ]
    },

    //上层环形配置
    {
      type: 'pie',
      hoverAnimation: false,
      radius: ['55%', '70%'],
      center: ['45%', '42%'],
      startAngle: 225,
      labelLine: {
        normal: {
          show: false
        }
      },
      label: {
        normal: {
          y: '40%'
        }
      },
      data: [{
        value: level,
        "itemStyle": {
          "normal": {
            "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              "offset": 0,
              "color": '#00FF7F'
            }, {
              "offset": 1,
              "color": '#ffff00'
            }]),
          }
        },
        label: dataStyle,
      }, {
        value: 1000,
        itemStyle: placeHolderStyle,
      },]
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

// 智慧党建1
function dj_1 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#dj1"));
  var data = {
    dj1: [
      ssld
    ]
  };
  var color = ["#FD866A", "#00f2f1", '#FFE4C4', '#ffff00', '#7fff00', '#00f2f1', '#FD866A', '#9E87FF', '#9ACD32', "#CD4F39"],
    // 指定配置和数据
    option = {
      tooltip: {
        // trigger: 'axis',
        trigger: 'item',
        formatter: "开展情况<br/>{c}次"
      },
      grid: {
        top: "10%",
        left: "27%",
        right: "8%",
        bottom: "10%",
        // show: true,
        borderColor: "white",
        // containLabel: false
      },
      yAxis: {
        type: "category",
        data: [
          "缴纳党费",
          "重温誓词",
          "诵读党章",
          "集中学习",
          "民主议事",
          "特色实践",
          "党员汇报",
          "民主监督",
          "积分考评",
          "组织生活"
        ],
        // 修饰刻度标签的颜色
        axisLine: {
          lineStyle: {
            color: "white"
          }
        },
        axisLabel: {
          // interval: 0,
          fontSize: 11
        },
      },
      xAxis: [{
        // name: '开展情况',
        type: "value",
        // 修饰刻度标签的颜色
        axisLine: {
          lineStyle: {
            color: "white",
            fontSize: 10
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
      }],

      series: [{
        type: "bar",
        // width: "5%",
        data: data.dj1[0],
        itemStyle: {
          normal: {
            color: function (params) {
              return color[params.dataIndex]
            }
          }
        },
      }]
    };
  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });

}
//智慧党建2
function dj_2 () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector("#dj2"));
  var data = {
    dj1: [
      zzsh
    ]
  };
  var color = ["#FD866A", "#00f2f1", '#FFE4C4', '#ffff00', '#7fff00', '#00f2f1', '#FD866A', '#9E87FF', '#9ACD32', "#CD4F39"],
    // 指定配置和数据
    option = {
      title: {
        show: true,
        text: '三会一课参与情况',
        right: "0",
        textStyle: {
          fontSize: 13,
          color: "#ffffff"
        }
      },
      tooltip: {
        // trigger: 'axis',
        trigger: 'item',
        formatter: "三会一课参与情况<br/>{c}次"
      },
      grid: {
        top: "25%",
        left: "10%",
        right: "10%",
        bottom: "10%",
        // show: true,
        borderColor: "white",
        containLabel: false
      },
      xAxis: {
        type: "category",
        data: ['党员大会', '支部会', '党小组会', '党课'],
        // 修饰刻度标签的颜色
        axisLine: {
          lineStyle: {
            color: "white"
          }
        },
        axisLabel: {
          interval: 0,
          fontSize: 10
        },
      },
      yAxis: [{
        name: '次数',
        type: "value",
        // 修饰刻度标签的颜色
        min: 0,
        max: 3,
        interval: 1,
        axisLine: {
          lineStyle: {
            color: "white",
            fontSize: 10
          }
        },
        // 修改y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,0.2)",
          }
        },
        // axisLabel: {
        //     formatter: '{value}'
        // }
      }],

      series: [{
        type: "bar",
        // width: "5%",
        data: data.dj1[0],
        itemStyle: {
          normal: {
            color: function (params) {
              return color[params.dataIndex]
            }
          }
        },
      }]
    };
  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });

}

function tb_wn1 () {
  var dataArray = [{
    time: "2020-8-17 09:10",
    type: "政治教育",
    content: "考试不及格",
    flag: "最新预警"
  },
  {
    time: "2020-8-16 14:00",
    type: "政治教育",
    content: "未参加学习",
    flag: "最新预警"
  },
  {
    time: "2020-8-16 08:00",
    type: "智慧党建",
    content: "未参加主题党日活动",
    flag: "最新预警"
  },
  {
    time: "2020-8-15 12:20",
    type: "智慧党建",
    content: "参加主题党日活动",
    flag: "最新预警"
  },
  {
    time: "2020-8-15 10:00",
    type: "心理测询",
    content: "心理测询异常",
    flag: "最新预警"
  },
  {
    time: "2020-8-15 12:20",
    type: "智慧党建",
    content: "参加主题党日活动",
    flag: "最新预警"
  },
  ];
  var tr = "";
  for (var i = 0; i < dataArray.length; i++) {
    tr = tr + '<tr>' +
      "<td class=\"tb_time\">" + dataArray[i].time + "</td>" +
      "<td class=\"tb_type\">" + dataArray[i].type + "</td>" +
      "<td class=\"tb_content\">" + dataArray[i].content + "</td>" +
      '</tr>';
  }
  $('#wn_tb1').append(tr);
}

function tb_wn2 () {
  var dataArray = [{
    time: "2020-8-17 10:00",
    type: "心理测询",
    content: "心理测询异常",
    flag: "最新预警"
  },
  {
    time: "2020-8-16 08:00",
    type: "智慧党建",
    content: "未参加主题党日活动",
    flag: "最新预警"
  },
  {
    time: "2020-8-15 13:00",
    type: "心理测询",
    content: "睡眠质量一直不良",
    flag: "最新预警"
  },
  {
    time: "2020-8-15 14:00",
    type: "政治教育",
    content: "未参加学习",
    flag: "最新预警"
  },
  {
    time: "2020-8-16 08:00",
    type: "智慧党建",
    content: "未参加主题党日活动",
    flag: "最新预警"
  },
  {
    time: "2020-8-15 10:00",
    type: "心理测询",
    content: "心理测询异常",
    flag: "最新预警"
  }
  ];
  var tr = "";
  for (var i = 0; i < dataArray.length; i++) {
    tr = tr + '<tr>' +
      "<td class=\"tb_time\">" + dataArray[i].time + "</td>" +
      "<td class=\"tb_type\">" + dataArray[i].type + "</td>" +
      "<td class=\"tb_content\">" + dataArray[i].content + "</td>" +
      '</tr>';
  }
  $('#wn_tb2').append(tr);
}

function assess_tb () {
  var tr = "";
  for (var i = 0; i < workArray.length; i++) {
    tr = tr + '<tr>' +
      "<td>" + (i + 1) + "</td>" +
      "<td>" + workArray[i].content + "</td>" +
      '</tr>';
  }
  $('#assess_tb').append(tr);
}

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
let dictionary = ['未参评', '优秀', '称职', '基本称职', '不称职']
let ssld = []
let zzsh = []
let level = ''
let assessX = '' //互评
let assessY = '' //组织评定
let workArray = []
let kecheng = ''
let kaoshi = ''
let examAverage = ''
let heartList = []
let isProblem = ""
let heartColor = ''

function getDjData () {
  $.ajax({
    type: 'GET',
    url: localStorage.getItem("url") + 'partyBuildPerson/getPartyBuildPerson',
    traditional: true,
    data: {
      uid: localStorage.getItem("personId"),
      month: localStorage.getItem("month"),
    },
    success: function (response) {
      let partyBuild = response.extra.partyBuildPerson
      ssld.push(partyBuild.jndf)
      ssld.push(partyBuild.cwsc)
      ssld.push(partyBuild.sddz)
      ssld.push(partyBuild.jzxx)
      ssld.push(partyBuild.mzys)
      ssld.push(partyBuild.tssj)
      ssld.push(partyBuild.dyhb)
      ssld.push(partyBuild.mzjd)
      ssld.push(partyBuild.jfkp)
      ssld.push(partyBuild.zzsh)

      zzsh.push(partyBuild.dydh)
      zzsh.push(partyBuild.zwh)
      zzsh.push(partyBuild.dzxh)
      zzsh.push(partyBuild.dk)

      dj_1();
      dj_2();
    },
    error: function (response) {
      console.log(response);
    }
  })
}

function getAssessData () {
  $.ajax({
    type: 'GET',
    url: localStorage.getItem("url") + 'assessPerson/getAssessPerson',
    traditional: true,
    data: {
      uid: localStorage.getItem("personId"),
      month: localStorage.getItem("month"),
    },
    success: function (response) {
      let person = response.extra.assessPerson
      if (person.isStart == 1) {
        level = dictionary[person.assessLevel]
        assessX = dictionary[person.otherAssessLevel]
        assessY = dictionary[person.orgAssessLevel]
      } else {
        level = '未参评'
        assessX = '未参评'
        assessY = '未参评'
      }

      $('#otherAssess').html('互评： ' + assessX)
      $('#orgAssess').html('组织评定： ' + assessY)

      assess_1();
    },
    error: function (response) {
      console.log(response);
    }
  })

  $.ajax({
    type: 'GET',
    url: localStorage.getItem("url") + 'assessPerson/getPersonWorks',
    traditional: true,
    data: {
      uid: localStorage.getItem("personId"),
      month: localStorage.getItem("month"),
    },
    success: function (response) {
      let workList = response.extra.workList

      workArray = workList

      assess_tb();
    },
    error: function (response) {
      console.log(response);
    }
  })

}

function getEduData () {
  $.ajax({
    type: 'GET',
    url: localStorage.getItem("url") + 'educationPerson/getEduPerson',
    traditional: true,
    data: {
      uid: localStorage.getItem("personId"),
      month: localStorage.getItem("month"),
    },
    success: function (response) {
      console.log(response)
      let person = response.extra.educationPerson
      kecheng = (person.bixiuFinish + person.electFinish) + '/' + (person.bixiuNum + person.electNum)
      kaoshi = (person.examFinish / person.examNum).toFixed(1) * 100 + '%'
      examAverage = person.examAverage + ''

      var kechengArray = strToArray(kecheng)
      var kechengStr = ""
      for (var i = 0; i < kecheng.length; i++) {
        kechengStr += '<div class= "block">' + kechengArray[i] + '</div>';
      }
      document.getElementById("kecheng").innerHTML = kechengStr;

      var kaoshiArray = strToArray(kaoshi)
      var kaoshiStr = ""
      for (var i = 0; i < kaoshi.length; i++) {
        kaoshiStr += '<div class= "block">' + kaoshiArray[i] + '</div>';
      }
      document.getElementById("kaoshi").innerHTML = kaoshiStr;

      var examAverageArray = strToArray(examAverage)
      var examAverageStr = ""
      for (var i = 0; i < examAverage.length; i++) {
        examAverageStr += '<div class= "block">' + examAverageArray[i] + '</div>';
      }
      document.getElementById("examAverage").innerHTML = examAverageStr;
    },
    error: function (response) {
      console.log(response);
    }
  })

}

function getHeartData () {
  $.ajax({
    type: 'GET',
    url: localStorage.getItem("url") + 'psyPerson/getPsyPerson',
    traditional: true,
    data: {
      uid: localStorage.getItem("personId"),
      month: localStorage.getItem("month"),
    },
    success: function (response) {
      console.log(response)
      let person = response.extra.psyPerson;
      if (person.irritable == 1) {
        heartList.push(person.irritable * 7 + 3)
      } else {
        heartList.push(3)
      }
      if (person.depressive == 1) {
        heartList.push(person.depressive * 7 + 3)
      } else {
        heartList.push(3)
      }
      if (person.anxious == 1) {
        heartList.push(person.anxious * 7 + 3)
      } else {
        heartList.push(3)
      }
      if (person.hostile == 1) {
        heartList.push(person.hostile * 7 + 3)
      } else {
        heartList.push(3)
      }
      if (person.force == 1) {
        heartList.push(person.force * 7 + 3)
      } else {
        heartList.push(3)
      }
      if (person.other == 1) {
        heartList.push(person.other * 7 + 3)
      } else {
        heartList.push(3)
      }
      if (person.isProblem != undefined && person.isProblem != null && person.isProblem == 1) {
        isProblem = "是"
        heartColor = "#DB7093"
      } else {
        isProblem = "否"
        heartColor = "#7CFC00"
      }
      heart();
    },
    error: function (response) {
      console.log(response);
    }
  })
}