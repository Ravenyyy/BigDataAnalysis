let data = [
  {
    id: 274,
    name: "黄金口",
    x: 114.152276,
    y: 30.570054
  },
  {
    id: 266,
    name: "七里庙",
    x: 114.261882,
    y: 30.565026
  },
  {
    id: 267,
    name: "墨水湖",
    x: 114.208918,
    y: 30.546989,
  },
  {
    id: 265,
    name: "晴川",
    x: 114.261762,
    y: 30.523
  },
]
function initBaiduMap () {
  localStorage.setItem("stationId", localStorage.getItem("unitId"));
  localStorage.setItem("stationName", localStorage.getItem("unitName"));
  console.log(localStorage.getItem("stationName"))
  $.ajax({
    type: 'GET',
    url: localStorage.getItem("url") + 'baiduMap/getMapByParentId',
    traditional: true,
    data: {
      parentId: localStorage.getItem("unitId")
    },
    success: function (response) {
      console.log(response);
      data = response.extra.baiduMapList;
      console.log(data)
      localStorage.setItem("baiduMapData", data)
      var map = new BMapGL.Map("map");
      // 创建地图实例
      var point = new BMapGL.Point(114.322179, 30.534496);
      // 创建点坐标
      map.centerAndZoom(point, 13);
      // 初始化地图，设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true);
      for (var i = 0; i < data.length; i++) {
        //创建点
        let labelPoint = new BMapGL.Point(data[i].stationX, data[i].stationY)
        let marker = new BMapGL.Marker(labelPoint);
        //增加点
        map.addOverlay(marker);

        let option = {
          position: labelPoint
        }
        let myLabel = new BMapGL.Label(data[i].unitName, option)
        myLabel.setStyle({
          border: "2px",
          color: "white",
          height: "19px",
          width: "70px",
          lineHeight: "19px",
          textAlign: "center",

          backgroundColor: "#4e6ef2"
        })
        map.addOverlay(myLabel)


        var _id = data[i].stationId;
        marker.customData = {
          id: data[i].stationId,
          name: data[i].unitName
        }; //自定义参数id
        marker.addEventListener("click", function (e) {

          localStorage.setItem("level", 4);
          localStorage.setItem("unitId", e.target.customData.id);
          localStorage.setItem("unitName", e.target.customData.name);

          console.log(localStorage.getItem("unitId"))
          console.log(localStorage.getItem("unitName"))
          window.location.href = "station.html"
        });
      }
    },
    error: function (response) {
      console.log(response);
    }
  })

}