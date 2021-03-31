function tb_edu () {
  var dataArray = [{
    name: "武汉支队",
    compulsory: "100%",
    elective: "100%",
    exam: "100%",
  },
  {
    name: "宜昌支队",
    compulsory: "100%",
    elective: "100%",
    exam: "100%",
  },
  {
    name: "鄂州支队",
    compulsory: "100%",
    elective: "100%",
    exam: "100%",
  },
  {
    name: "襄阳支队",
    compulsory: "100%",
    elective: "100%",
    exam: "100%",
  },
  {
    name: "黄石支队",
    compulsory: "100%",
    elective: "100%",
    exam: "100%",
  },
  {
    name: "荆门支队",
    compulsory: "100%",
    elective: "100%",
    exam: "100%",
  },
  {
    name: "咸宁支队",
    compulsory: "100%",
    elective: "100%",
    exam: "100%",
  },
  {
    name: "十堰支队",
    compulsory: "100%",
    elective: "100%",
    exam: "100%",
  },
  {
    name: "随州支队",
    compulsory: "100%",
    elective: "100%",
    exam: "100%",
  },
  {
    name: "孝感支队",
    compulsory: "90%",
    elective: "90%",
    exam: "70%",
  },
  {
    name: "荆州支队",
    compulsory: "99%",
    elective: "99%",
    exam: "95%",
  },
  {
    name: "黄冈支队",
    compulsory: "100%",
    elective: "100%",
    exam: "100%",
  },
  {
    name: "恩施支队",
    compulsory: "100%",
    elective: "100%",
    exam: "100%",
  },
  {
    name: "汉江支队",
    compulsory: "100%",
    elective: "100%",
    exam: "100%",
  },
  {
    name: "训保支队",
    compulsory: "90%",
    elective: "90%",
    exam: "80%",
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

function tb_hots(){
  var dataArray = [];
  if(localStorage.getItem("level") == 1){
    dataArray = [{
      name: "中国",
      num: 633,
      users: 100
    },{
      name: "时代",
      num: 615,
      users: 80
    },{
      name: "习主席",
      num: 592,
      users: 112
    },{
      name: "武警",
      num: 466,
      users: 70
    },{
      name: "娱乐",
      num: 397,
      users: 90
    },{
      name: "王者荣耀",
      num: 284,
      users: 21
    },{
      name: "篮球",
      num: 166,
      users: 155
    },{
      name: "足球",
      num: 133,
      users: 99
    },{
      name: "消防",
      num: 98,
      users: 144
    },{
      name: "管控",
      num: 60,
      users: 78
    },
    ];
  }else if(localStorage.getItem("level") == 2){
    dataArray = [{
      name: "习主席",
      num: 101,
      users: 24
    },{
      name: "中国",
      num: 61,
      users: 12
    },{
      name: "武警",
      num: 59,
      users: 7
    },{
      name: "武警",
      num: 46,
      users: 14
    },{
      name: "篮球",
      num: 39,
      users: 23
    },{
      name: "足球",
      num: 24,
      users: 11
    },{
      name: "王者荣耀",
      num: 16,
      users: 40
    },{
      name: "时代",
      num: 13,
      users: 10
    },{
      name: "消防",
      num: 8,
      users: 8
    },{
      name: "管控",
      num: 6,
      users: 6
    },
    ];
  }else if(localStorage.getItem("level") == 3){
    dataArray = [{
      name: "武警",
      num: 60,
      users: 4
    },{
      name: "习主席",
      num: 54,
      users: 8
    },{
      name: "王者荣耀",
      num: 50,
      users: 14
    },{
      name: "时代",
      num: 34,
      users: 7
    },{
      name: "娱乐",
      num: 29,
      users: 9
    },{
      name: "中国",
      num: 26,
      users: 21
    },{
      name: "消防",
      num: 14,
      users: 14
    },{
      name: "管控",
      num: 10,
      users: 1
    },{
      name: "消防",
      num: 9,
      users: 8
    },{
      name: "救火",
      num: 6,
      users: 7
    },
    ];
  }


  var tr = "";
  for (var i = 0; i < dataArray.length; i++) {
    tr = tr + '<tr>' +
        "<td>" + (i+1) + "</td>" +
        "<td>" + dataArray[i].name + "</td>" +
        "<td>" + dataArray[i].num + "</td>" +
        "<td>" + dataArray[i].users + "</td>" +
        '</tr>';
  }
   $('#hots_tb').append(tr);
 }

function tb_sens(){
  var dataArray = {};
  if(localStorage.getItem("level") == 1){
    dataArray = [{
      name: "喝酒",
      num: 413,
      users: 20
    },{
      name: "赌球",
      num: 299,
      users: 12
    },{
      name: "抽烟",
      num: 182,
      users: 11
    },{
      name: "借钱",
      num: 108,
      users: 7
    },{
      name: "请假",
      num: 99,
      users: 9
    },{
      name: "游戏",
      num: 78,
      users: 2
    },{
      name: "翘班",
      num: 66,
      users: 15
    },{
      name: "上网",
      num: 53,
      users: 9
    },{
      name: "通宵",
      num: 48,
      users: 14
    },{
      name: "消极",
      num: 40,
      users: 7
    },
    ];
  }else if(localStorage.getItem("level") == 2){
    dataArray = [{
      name: "游戏",
      num: 102,
      users: 11
    },{
      name: "通宵",
      num: 98,
      users: 12
    },{
      name: "喝酒",
      num: 81,
      users: 9
    },{
      name: "郁闷",
      num: 60,
      users: 11
    },{
      name: "请假",
      num: 45,
      users: 2
    },{
      name: "吸烟",
      num: 35,
      users: 12
    },{
      name: "翘班",
      num: 26,
      users: 12
    },{
      name: "上网",
      num: 24,
      users: 9
    },{
      name: "通宵",
      num: 19,
      users: 14
    },{
      name: "借钱",
      num: 12,
      users: 7
    },
    ];
  }else {
    dataArray = [{
      name: "借钱",
      num: 20,
      users: 1
    },{
      name: "赌球",
      num: 19,
      users: 6
    },{
      name: "游戏",
      num: 18,
      users: 6
    },{
      name: "翘班",
      num: 16,
      users: 5
    },{
      name: "抽烟",
      num: 14,
      users: 11
    },{
      name: "喝酒",
      num: 13,
      users: 18
    },{
      name: "请假",
      num: 9,
      users: 6
    },{
      name: "消极",
      num: 6,
      users: 6
    },{
      name: "上网",
      num: 3,
      users: 9
    },{
      name: "通宵",
      num: 1,
      users: 11
    }
    ];
  }

  var tr = "";
  for (var i = 0; i < dataArray.length; i++) {
    tr = tr + '<tr>' +
        "<td>" + (i+1) + "</td>" +
        "<td>" + dataArray[i].name + "</td>" +
        "<td>" + dataArray[i].num + "</td>" +
        "<td>" + dataArray[i].users + "</td>" +
        '</tr>';
  }
  $('#sens_tb').append(tr);
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
      resolutionType: 0,
      month: localStorage.getItem("month") 
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
      resolutionType: 1,
      month: localStorage.getItem("month")
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

function tb_wn3 () {
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
      resolutionType: 2
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
      $('#wn_tb3').append(tr);

      addTableClick("wn_tb3", dataArray);
    },
    error: function (response) {
      console.log(response);
    }
  })
}