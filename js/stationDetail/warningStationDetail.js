function tb_wn1 () {
    var dataArray = [{}]
    $.ajax({
      type: 'GET',
      url: localStorage.getItem("url") + 'warning/getWarningByStation',
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
  
  function tb_wn2 () {
    var dataArray = [{}]
    $.ajax({
      type: 'GET',
      url: localStorage.getItem("url") + 'warning/getWarningByStation',
      data: {
        id: localStorage.getItem("unitId"),
        resolutionType: 1,
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
        $('#wn_tb2').append(tr);
        addTableClick("wn_tb2", dataArray);
  
      },
      error: function (response) {
        console.log(response);
      }
    })
  }

  function tb_wn3 () {
    var dataArray = [{}]
    $.ajax({
      type: 'GET',
      url: localStorage.getItem("url") + 'warning/getWarningByStation',
      data: {
        id: localStorage.getItem("unitId"),
        resolutionType: 2,
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
        $('#wn_tb3').append(tr);
        addTableClick("wn_tb3", dataArray);
  
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
          } else if(tableName == "wn_tb2"){
            $(".modal-body > p").text("正在处理风险预警信息")
          } else {
            $(".modal-body > p").text("完成处理风险预警信息")
          }
        document.getElementById("simpleModal").style.display = "block";
        var tdContent = dataArray[trindex - 1]
        localStorage.setItem('warningUser', tdContent.id)
        console.log(tdContent)
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

  function submitData (resolution, resolutionType) {
    var userId = localStorage.getItem('warningUser');
    console.log(userId)
    console.log(resolutionType)
    console.log(resolution)
    $.ajax({
      type: 'PUT',
      url: localStorage.getItem("url") + 'warning/updateWarningType',
      data: {
        id: userId,
        resolutionType: resolutionType,
        resolution: resolution,
      },
      success: function (response) {
        location.reload();
      },
      error: function (response) {
        console.log(response);
      }
    })
  }