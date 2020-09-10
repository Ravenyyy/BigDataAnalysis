function tb_edu () {
  var dataArray = [{
    name: "武汉支队",
    compulsory: "100%",
    elective: "100%",
    exam: "100%",
    finish: "100%",
    average: 97.7
  },
  {
    name: "宜昌支队",
    compulsory: "100%",
    elective: "100%",
    exam: "100%",
    finish: "100%",
    average: 95.3
  },
  {
    name: "鄂州支队",
    compulsory: "100%",
    elective: "100%",
    exam: "100%",
    finish: "100%",
    average: 98.2
  },
  {
    name: "襄阳支队",
    compulsory: "100%",
    elective: "100%",
    exam: "100%",
    finish: "100%",
    average: 96.5
  },
  {
    name: "黄石支队",
    compulsory: "100%",
    elective: "100%",
    exam: "100%",
    finish: "100%",
    average: 99.2
  },
  {
    name: "荆门支队",
    compulsory: "100%",
    elective: "100%",
    exam: "100%",
    finish: "100%",
    average: 97.8
  },
  {
    name: "咸宁支队",
    compulsory: "100%",
    elective: "100%",
    exam: "100%",
    finish: "100%",
    average: 98.3
  },
  {
    name: "十堰支队",
    compulsory: "100%",
    elective: "100%",
    exam: "100%",
    finish: "100%",
    average: 95.7
  },
  {
    name: "随州支队",
    compulsory: "100%",
    elective: "100%",
    exam: "100%",
    finish: "100%",
    average: 99.1
  },
  {
    name: "孝感支队",
    compulsory: "90%",
    elective: "90%",
    exam: "70%",
    finish: "82%",
    average: 83.2
  },
  {
    name: "荆州支队",
    compulsory: "99%",
    elective: "99%",
    exam: "95%",
    finish: "96%",
    average: 92.2
  },
  {
    name: "黄冈支队",
    compulsory: "100%",
    elective: "100%",
    exam: "100%",
    finish: "100%",
    average: 89.2
  },
  {
    name: "恩施支队",
    compulsory: "100%",
    elective: "100%",
    exam: "100%",
    finish: "100%",
    average: 96.6
  },
  {
    name: "汉江支队",
    compulsory: "100%",
    elective: "100%",
    exam: "100%",
    finish: "100%",
    average: 97.5
  },
  {
    name: "训保支队",
    compulsory: "90%",
    elective: "90%",
    exam: "80%",
    finish: "85%",
    average: 89.2
  },
  ];

  var tr = "";
  for (var i = 0; i < dataArray.length; i++) {
    tr = tr + '<tr>' +
      "<td>" + dataArray[i].name + "</td>" +
      "<td>" + dataArray[i].compulsory + "</td>" +
      "<td>" + dataArray[i].elective + "</td>" +
      "<td>" + dataArray[i].exam + "</td>" +
      "<td>" + dataArray[i].finish + "</td>" +
      "<td>" + dataArray[i].average + "</td>" +
      '</tr>';
  }
  $('#edu_tb').append(tr);
}

function tb_wn1 () {
  var dataArray = [{
    name: "武汉支队",
    time: "2020-8-17 09:10",
    type: "政治教育",
    content: "武汉支队本月11人考试不及格",
    flag: "最新预警"
  },
  {
    name: "孝感支队",
    time: "2020-8-16 14:00",
    type: "政治教育",
    content: "孝感支队本月还有31人未参加学习",
    flag: "最新预警"
  },
  {
    name: "荆州支队",
    time: "2020-8-16 08:00",
    type: "智慧党建",
    content: "荆州支队有3个支部本月尚未开展主题党日活动",
    flag: "最新预警"
  },
  {
    name: "荆州支队",
    time: "2020-8-15 12:20",
    type: "智慧党建",
    content: "荆州支队有83人本月尚未参加主题党日活动",
    flag: "最新预警"
  },
  {
    name: "鄂州支队",
    time: "2020-8-15 10:00",
    type: "心理测询",
    content: "鄂州支队有12人心理测询异常",
    flag: "最新预警"
  },
  {
    name: "宜昌支队",
    time: "2020-8-13 08:00",
    type: "全员考核",
    content: "宜昌支队有2个支部本月尚未开展全员考核",
    flag: "最新预警"
  },
  {
    name: "宜昌支队",
    time: "2020-8-12 09:00",
    type: "全员考核",
    content: "宜昌支队有4人本月被评定为不称职",
    flag: "最新预警"
  },
  {
    name: "宜昌支队",
    time: "2020-8-10 11:00",
    type: "全员考核",
    content: "宜昌支队有2个支部本月尚未开展全员考核",
    flag: "最新预警"
  },
  {
    name: "宜昌支队",
    time: "2020-8-09 13:00",
    type: "心理测询",
    content: "宜昌支队有12人睡眠质量一直不良",
    flag: "最新预警"
  },
  {
    name: "宜昌支队",
    time: "2020-8-09 15:00",
    type: "全员考核",
    content: "宜昌支队有4人本月训练不合格",
    flag: "最新预警"
  }
  ];
  var tr = "";
  for (var i = 0; i < dataArray.length; i++) {
    tr = tr + '<tr>' +
      "<td class=\"tb_zhidui\">" + dataArray[i].name + "</td>" +
      "<td class=\"tb_time\">" + dataArray[i].time + "</td>" +
      "<td class=\"tb_type\">" + dataArray[i].type + "</td>" +
      "<td class=\"tb_content\">" + dataArray[i].content + "</td>" +
      '</tr>';
  }
  $('#wn_tb1').append(tr);

  addTableClick("wn_tb1", dataArray);
}

function addTableClick (tableName, dataArray) {
  $("#" + tableName + " > tbody tr").each(function (trindex, tritem) {
    $(tritem).click(function () {

      if (tableName == "wn_tb1") {
        $(".modal-body > p").text("最新风险预警信息")
      } else {
        $(".modal-body > p").text("正在处理风险预警信息")
      }
      document.getElementById("simpleModal").style.display = "block";
      var tdContent = dataArray[trindex - 1]
      $('#modal-ul').find("li").each(function (index, item) {
        console.log(item);
        if (index == 0) {
          $(item).text("来源：" + tdContent.type)
        } else if (index == 1) {
          $(item).text("详情：" + tdContent.content)
        } else if (index == 2) {
          $(item).text("状态：" + "正在处理")
        }
      })
    })
  })
}

function tb_wn2 () {
  var dataArray = [{
    name: "黄石支队",
    time: "2020-8-17 10:00",
    type: "心理测询",
    content: "黄石支队有9人心理测询异常",
    flag: "最新预警"
  },
  {
    name: "孝感支队",
    time: "2020-8-17 09:10",
    type: "政治教育",
    content: "孝感支队本月14人考试不及格",
    flag: "最新预警"
  },
  {
    name: "孝感支队",
    time: "2020-8-16 08:00",
    type: "智慧党建",
    content: "孝感支队有1个支部本月尚未开展主题党日活动",
    flag: "最新预警"
  },
  {
    name: "鄂州支队",
    time: "2020-8-15 13:00",
    type: "心理测询",
    content: "鄂州支队有4人睡眠质量一直不良",
    flag: "最新预警"
  },
  {
    name: "孝感支队",
    time: "2020-8-15 14:00",
    type: "政治教育",
    content: "孝感支队本月还有18人未参加学习",
    flag: "最新预警"
  },
  {
    name: "武汉支队",
    time: "2020-8-15 12:20",
    type: "智慧党建",
    content: "武汉支队有44人本月尚未参加主题党日活动",
    flag: "最新预警"
  },

  {
    name: "十堰支队",
    time: "2020-8-13 08:00",
    type: "全员考核",
    content: "十堰支队有3个支部本月尚未开展全员考核",
    flag: "最新预警"
  },
  {
    name: "训保支队",
    time: "2020-8-12 09:00",
    type: "全员考核",
    content: "训保支队有14人本月被评定为不称职",
    flag: "最新预警"
  },
  {
    name: "鄂州支队",
    time: "2020-8-09 15:00",
    type: "全员考核",
    content: "鄂州支队有2人本月训练不合格",
    flag: "最新预警"
  },
  {
    name: "宜昌支队",
    time: "2020-8-09 11:00",
    type: "全员考核",
    content: "宜昌支队有19个支部本月尚未开展全员考核",
    flag: "最新预警"
  },


  ];
  var tr = "";
  for (var i = 0; i < dataArray.length; i++) {
    tr = tr + '<tr>' +
      "<td class=\"tb_zhidui\">" + dataArray[i].name + "</td>" +
      "<td class=\"tb_time\">" + dataArray[i].time + "</td>" +
      "<td class=\"tb_type\">" + dataArray[i].type + "</td>" +
      "<td class=\"tb_content\">" + dataArray[i].content + "</td>" +
      '</tr>';
  }
  $('#wn_tb2').append(tr);

  addTableClick("wn_tb2", dataArray);
}