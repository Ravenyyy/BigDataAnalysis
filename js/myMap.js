
$(function () {
  var myChart = echarts.init(document.getElementById('map'));
  var option = {
    tooltip: {
      trigger: 'item',
      formatter:function (params) {
        var res = '';
        res+=params['data'].name2+'</br>';
        return res;
      }
      //formatter: '{b}<br/>{c}'
    },//鼠标放在地图上时，显示的内容及样式控制
    visualMap: {
      show: false,//色系条是否显示
      min: 0,
      max: 45000,//取其区间值就代表色系inRange中的一种颜色
      left: 'left',
      top: 'bottom',
      text: ['高', '低'], // 文本，默认为数值文本
      calculable: true,
      inRange:{
        color: ['#42a8be','#00a69c', '#30ea8b'],//上色范围
      }
    },//给地图上色
    series: [{
      name: '湖北省',
      type: 'map',
      mapType: '湖北',
      layoutCenter:['50%','48%'],
      layoutSize: '106%',
      selectedMode : 'single',
      label: {
        normal: {show: true},
        emphasis: {show: true}
      },
      itemStyle: {
        normal: {
          borderColor: '#2C87D1',
          areaColor: '#2C87D1',
          borderWidth: 2,
        },//正常样式
        emphasis: {
          areaColor: 'orange',
          borderWidth: 1,
          borderColor: 'yellow',
        }//鼠标事件区块样式
      },
      data:[
        {name: '武汉市',name2:'武汉支队' ,value: 40500},
        {name: '黄石市',name2:'黄石支队' ,value: 43000},
        {name: '十堰市',name2:'十堰支队' , value: 30000},
        {name: '宜昌市',name2:'宜昌支队' , value: 40500},
        {name: '襄阳市',name2:'襄阳支队' , value: 11000},
        {name: '鄂州市',name2:'鄂州支队' , value: 37000},
        {name: '荆门市',name2:'荆门支队' , value: 49500},
        {name: '孝感市',name2:'孝感支队' , value: 0},
        {name: '荆州市',name2:'荆州支队' , value: 11161},
        {name: '黄冈市',name2:'黄冈支队' , value: 15000},
        {name: '咸宁市',name2:'咸宁支队' , value: 20000},
        {name: '随州市',name2:'随州支队' , value: 38000},
        {name: '仙桃市',name2:'' , value: 23000},
        {name: '潜江市',name2:'' , value: 23000},
        {name: '天门市',name2:'汉江支队' , value: 23000},
        {name: '恩施土家族苗族自治州',name2:'恩施支队' , value: 0},
        {name: '神农架林区',name2:'' , value: 23000},
      ],//value的值是上面visualMap属性中设置的颜色色系区间的值，即0~45000
      label: {
      normal: {
        show: true,
        color:'#FFF',
        fontSize:18,
        formatter:function(val){
          var area_content =  val['data'].name2 ;
          return area_content.split("-").join("\n");
        },//让series 中的文字进行换行
      },
      emphasis: {show: true}
    },//地图中文字内容及样式控制
  }]
  };
  myChart.setOption(option, true);
  myChart.on('click', function(params){
      console.log(params.name);//此处写点击事件内容
      switch(params.name){
          case '武汉市':
              location.href='whTeam.html';
              break;
          default:
              break;
      }
  });//点击事件，此事件还可以用到柱状图等其他地图
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})

