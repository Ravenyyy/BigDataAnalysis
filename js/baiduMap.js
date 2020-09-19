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
  var map = new BMapGL.Map("map");
  // 创建地图实例
  var point = new BMapGL.Point(114.225012, 30.560547);
  // 创建点坐标
  map.centerAndZoom(point, 13);
  // 初始化地图，设置中心点坐标和地图级别

  map.enableScrollWheelZoom(true);

  for (var i = 0; i < data.length; i++) {
    //创建点
    let labelPoint = new BMapGL.Point(data[i].x, data[i].y)
    let marker = new BMapGL.Marker(labelPoint);
    //增加点
    map.addOverlay(marker);

    let option = {
      position: labelPoint
    }
    let myLabel = new BMapGL.Label(data[i].name, option)
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


    var _id = data[i].id;
    marker.customData = {
      id: data[i].id,
      name: data[i].name
    }; //自定义参数id
    marker.addEventListener("click", function (e) {

      localStorage.setItem("level", 4);
      localStorage.setItem("unitId", e.target.customData.id);
      console.log(localStorage.getItem("unitId"))
      localStorage.setItem("unitName", e.target.customData.name);
      window.location.href = "station.html"
    });
  }
}