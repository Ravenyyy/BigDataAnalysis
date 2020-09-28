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
  var dataArray = [{}]
  var chooseUrl = "";
  console.log(localStorage.getItem("level"))
  if (localStorage.getItem("level") == 1) {
    chooseUrl = localStorage.getItem("url") + 'warning/getWarningByZongdui';
  } else if (localStorage.getItem("level") == 2) {
    chooseUrl = localStorage.getItem("url") + 'warning/getWarningByZhidui';
  } else if (localStorage.getItem("level") == 3) {
    chooseUrl = localStorage.getItem("url") + 'warning/getWarningByDadui';
  }
  $.ajax({
    type: 'GET',
    url: chooseUrl,
    data: {
      id: localStorage.getItem("unitId"),
      resolutionType: 0
    },
    success: function (response) {
      dataArray = response.extra.warningList
      console.log(dataArray)
      var tr = "";
      for (var i = 0; i < dataArray.length; i++) {
        var date = new Date(dataArray[i].createTime)
        var Y = date.getFullYear() + '-'
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
        var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
        var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
        var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
        console.log(Y + M + D + h + m + s)
        tr = tr + '<tr>' +
          "<td class=\"tb_zhidui\">" + dataArray[i].name + "</td>" +
          "<td class=\"tb_time\">" + Y + M + D + h + m + s + "</td>" +
          "<td class=\"tb_type\">" + dataArray[i].warning + "</td>" +
          "<td class=\"tb_content\">" + dataArray[i].content + "</td>" +
          '</tr>';
      }
      $('#wn_tb1').append(tr);

      addTableClick("wn_tb1", dataArray);
    },
    error: function (response) {
      console.log(response);
    }
  })
}

function addTableClick (tableName, dataArray) {
  $("#" + tableName + " > tbody tr").each(function (trindex, tritem) {
    $(tritem).click(function () {

      if (tableName == "wn_tb1") {
        $(".modal-body > p").text("最新待处理风险预警信息")
      } else {
        $(".modal-body > p").text("正在处理风险预警信息")
      }
      document.getElementById("simpleModal").style.display = "block";
      var tdContent = dataArray[trindex - 1]
      $('#modal-ul').find("li").each(function (index, item) {
        console.log(item);
        if (index == 0) {
          $(item).text("来源：" + tdContent.warning)
        } else if (index == 1) {
          $(item).text("详情：" + tdContent.content)
        } else if (index == 2) {
          $(item).text("状态：" + tdContent.typeName)
        }
      })
    })
  })
}

function tb_wn2 () {
  var dataArray = [{}];
  var chooseUrl = "";
  if (localStorage.getItem("level") == 1) {
    chooseUrl = localStorage.getItem("url") + 'warning/getWarningByZongdui';
  } else if (localStorage.getItem("level") == 2) {
    chooseUrl = localStorage.getItem("url") + '/getWarningByZhidui';
  } else if (localStorage.getItem("level") == 3) {
    chooseUrl = localStorage.getItem("url") + '/getWarningByDadui';
  }
  $.ajax({
    type: 'GET',
    url: chooseUrl,
    data: {
      id: localStorage.getItem("unitId"),
      resolutionType: 1
    },
    success: function (response) {
      dataArray = response.extra.warningList
      console.log(dataArray)
      var tr = "";
      console.log(dataArray.length)
      for (var i = 0; i < dataArray.length; i++) {
        var date = new Date(dataArray[i].createTime)
        var Y = date.getFullYear() + '-'
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
        var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
        var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
        var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
        tr = tr + '<tr>' +
          "<td class=\"tb_zhidui\">" + dataArray[i].name + "</td>" +
          "<td class=\"tb_time\">" + Y + M + D + h + m + s + "</td>" +
          "<td class=\"tb_type\">" + dataArray[i].warning + "</td>" +
          "<td class=\"tb_content\">" + dataArray[i].content + "</td>" +
          '</tr>';
      }
      $('#wn_tb2').append(tr);

      addTableClick("wn_tb2", dataArray);
    },
    error: function (response) {
      console.log(response);
    }
  })
}