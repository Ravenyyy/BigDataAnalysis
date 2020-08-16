// onload
$(function () {
    init_wn1();
    init_wn2();
    init_edu();
    init_appActive();
    init_detail();
});

function init_appActive() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector("#appActive"));
    // 指定配置和数据
    var option = {
      color: ["#56D0E3"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: "0%",
        top: "10%",
        right: "0%",
        bottom: "1%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: [
            '武汉', '宜昌', '鄂州', '襄阳', '黄石', '荆门', '咸宁', '十堰', 
            '随州', '孝感', '荆州', '黄冈', '恩施', '汉江', '训保'
          ],
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255, 1)",
              fontSize: "12",
              
            },
            interval: 0
          },
          axisLine: {
            show: false
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255, 1)",
              fontSize: "12"
            }
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255, .1)"
              // width: 1,
              // type: "solid"
            }
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255, .1)"
            }
          }
        }
      ],
      series: [
        {
          name: "活跃度",
          type: "bar",
          barWidth: "35%",
          data: [200, 300, 700, 900, 600, 1500, 1200, 600, 700, 900, 1000, 620, 580, 460, 300],
          itemStyle: {
            barBorderRadius: 5
          }
        }
      ]
    };
  
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
}

function init_detail() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector("#detail"));
    var data = [
        [24, 40, 101, 134, 155, 170, 210, 230, 120, 230, 160, 120, 74, 60, 151],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 150, 100, 80, 204],
        [60, 88, 151, 194, 250, 300, 350, 323, 270, 230, 200, 170, 191, 100, 290],
        [50, 84, 121, 224, 290, 330, 300, 300, 280, 260, 240, 200, 140, 122, 191]
    ];
    
    var percentData = [
    {
        areaName:"武汉",
        data:[10, 20, 30, 40]
    },
    {
        areaName:"宜昌",
        data:[11, 21, 31, 41]
    },
    {
        areaName:"鄂州",
        data:[12, 22, 32, 42]
    },
    {
        areaName:"襄阳",
        data:[10, 20, 30, 40]
    },
    {
        areaName:"黄石",
        data:[10, 20, 30, 40]
    },
    {
        areaName:"荆门",
        data:[10, 20, 30, 40]
    },
    {
        areaName:"咸宁",
        data:[10, 20, 30, 40]
    },
    {
        areaName:"十堰",
        data:[10, 20, 30, 40]
    },
    {
        areaName:"随州",
        data:[10, 20, 30, 40]
    },
    {
        areaName:"孝感",
        data:[10, 20, 30, 40]
    },
    {
        areaName:"荆州",
        data:[10, 20, 30, 40]
    },
    {
        areaName:"黄冈",
        data:[10, 20, 30, 40]
    },
    {
        areaName:"恩施",
        data:[10, 20, 30, 40]
    },
    {
        areaName:"汉江",
        data:[10, 20, 30, 40]
    },
    {
        areaName:"训保",
        data:[10, 20, 30, 40]
    },
    ];

    // 2. 指定配置和数据
    var option = {
    color: ["#00f2f1", "#ed3f35", "#e8e082", "#4EEE94"],
    tooltip: {
        // 通过坐标轴来触发
        trigger: "axis",
        formatter: function (params, ticket, callback) {
        var htmlStr = '';
        for(var i=0;i<params.length;i++){
            var param = params[i];
            var xName = param.name;//x轴的名称
            var seriesName = param.seriesName;//图例名称
            var value = param.value;//y轴值
            var color = param.color;//图例颜色
            
            if(i===0){
            htmlStr += xName + '<br/>';//x轴的名称
            }
            htmlStr +='<div>';
            htmlStr += '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:'+color+';"></span>';

            for(var j=0; j<percentData.length; j++){
            if(percentData[j].areaName == xName){
                if(seriesName == '必修课完成')
                htmlStr += seriesName + '：' + value + '&nbsp' + percentData[j].data[0] + '%';
                if(seriesName == '选修课完成')
                htmlStr += seriesName + '：' + value + '&nbsp' + percentData[j].data[1] + '%';
                if(seriesName == '考试完成')
                htmlStr += seriesName + '：' + value + '&nbsp' + percentData[j].data[2] + '%';
                if(seriesName == '考试合格')
                htmlStr += seriesName + '：' + value + '&nbsp' + percentData[j].data[3] + '%';
                break;
            }
            }
            htmlStr += '</div>';
        }
        return htmlStr;
        }
    },
    legend: {
        // 距离容器10%
        top: "3%",
        right: "10%",
        // 修饰图例文字的颜色
        textStyle: {
        color: "#4c9bfd"
        }
        // 如果series 里面设置了name，此时图例组件的data可以省略
        // data: ["邮件营销", "联盟广告"]
    },
    grid: {
        top: "10%",
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
    },

    xAxis: {
        type: "category",
        boundaryGap: false,
        data: ['武汉', '宜昌', '鄂州', '襄阳', '黄石', '荆门', '咸宁', '十堰', 
        '随州', '孝感', '荆州', '黄冈', '恩施', '汉江', '训保'],
        // 去除刻度
        axisTick: {
            show: false
        },
        // 修饰刻度标签的颜色
        axisLabel: {
            color: "rgba(255,255,255, 1)",
            interval: 0
        },
        // 去除x坐标轴的颜色
        axisLine: {
            show: false
        }
    },
    yAxis: {
        type: "value",
        // 去除刻度
        axisTick: {
            show: false
        },
        // 修饰刻度标签的颜色
        axisLabel: {
            color: "rgba(255,255,255, 1)"
        },
        // 修改y轴分割线的颜色
        splitLine: {
            lineStyle: {
                color: "rgba(255,255,255, .1)"
            }
        },
        axisLine: {
            lineStyle: {
              color: "rgba(255,255,255, .1)"
            }
        },
    },
    series: [
        {
            name: "必修课完成",
            type: "line",
            // 是否让线条圆滑显示
            smooth: true,
            data: data[0]
        },
        {
            name: "选修课完成",
            type: "line",
            smooth: true,
            data: data[1]
        },
        {
            name: "考试完成",
            type: "line",
            smooth: true,
            data: data[2]
        },
        {
            name: "考试合格",
            type: "line",
            smooth: true,
            data: data[3]
        }
    ]
    };
    // 3. 把配置和数据给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
}

function init_wn1() {
    var dataArray = [
        {
        name:"武汉支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"最新预警"
        },
        {
        name:"武汉支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx训练考核不达标",flag:"最新预警"
        },
        {
        name:"宜昌支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"最新预警"
        },
        {
        name:"宜昌支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"最新预警"
        },
        {
        name:"武汉支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"最新预警"
        },
        {
        name:"武汉支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"最新预警"
        },
        {
        name:"武汉支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"最新预警"
        },
        {
        name:"宜昌支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"最新预警"
        },
        {
        name:"武汉支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"最新预警"
        },
        {
        name:"宜昌支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"最新预警"
        }
    ];
    var tr = "";
    for(var i=0; i<dataArray.length; i++){
      tr = tr+'<tr>'+
              "<td>" + dataArray[i].name + "</td>"+
              "<td>" + dataArray[i].time + "</td>"+
              "<td>" + dataArray[i].type + "</td>"+
              "<td>" + dataArray[i].content + "</td>"+
              "<td>" + dataArray[i].flag + "</td>"+
              '</tr>';
    }
    $('#wn_tb1').append(tr);
}

function init_wn2() {
    var dataArray = [
        {
        name:"武汉支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"正在处理"
        },
        {
        name:"武汉支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx训练考核不达标",flag:"正在处理"
        },
        {
        name:"宜昌支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"正在处理"
        },
        {
        name:"宜昌支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"正在处理"
        },
        {
        name:"武汉支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"正在处理"
        },
        {
        name:"武汉支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"正在处理"
        },
        {
        name:"武汉支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"正在处理"
        },
        {
        name:"宜昌支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"正在处理"
        }
    ];
    var tr = "";
    for(var i=0; i<dataArray.length; i++){
      tr = tr+'<tr>'+
              "<td>" + dataArray[i].name + "</td>"+
              "<td>" + dataArray[i].time + "</td>"+
              "<td>" + dataArray[i].type + "</td>"+
              "<td>" + dataArray[i].content + "</td>"+
              "<td>" + dataArray[i].flag + "</td>"+
              '</tr>';
    }
    $('#wn_tb2').append(tr);
}

function init_edu() {
    var dataArray = [
        {
        name:"武汉支队",pass:90.5
        },
        {
        name:"宜昌支队",pass:85.3
        },
        {
        name:"鄂州支队",pass:81.2
        },
        {
        name:"襄阳支队",pass:75.6
        },
        {
        name:"黄石支队",pass:80.6
        },
        {
        name:"荆门支队",pass:79.3
        },
        {
        name:"咸宁支队",pass:77.2
        },
        {
        name:"十堰支队",pass:79.3
        },
        {
        name:"随州支队",pass:80.7
        },
        {
        name:"孝感支队",pass:80.5
        },
        {
        name:"荆州支队",pass:72.5
        },
        {
        name:"黄冈支队",pass:77.9
        },
        {
        name:"恩施支队",pass:83.5
        },
        {
        name:"汉江支队",pass:89.6
        },
        {
        name:"训保支队",pass:74.5
        },
    ];

    dataArray.sort(function(a, b){return b.pass - a.pass}); 
    var tr = "";
    for(var i=0; i<dataArray.length; i++){
      tr = tr+'<tr>'+
            "<td>" + (i+1) + "</td>"+
            "<td>" + dataArray[i].name + "</td>"+
            "<td>" + dataArray[i].pass + "%</td>"+
            '</tr>';
    }
    $('#rank_tb').append(tr);
}