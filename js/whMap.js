$(function () {
    var myChart = echarts.init(document.getElementById('map'));
    var option = {
        title: {
            show:false,
            text: '武汉',
            left:'center',
            textStyle: {
                color: '#ccc',
                fontSize:14
            }
        },
        tooltip: {
            trigger: 'item',
            formatter:function (params) {
                var res = '';
                res+=params['data'].name+'</br>';
                res+='预警数' +' : '+params['data'].value2+'</br>';
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
                color: ['#42a8be','#00a69c', '#95ea95'],//上色范围
            }
        },//给地图上色
        series: [{
            name: '武汉',
            type: 'map',
            mapType: '武汉',
            layoutCenter:['50%','46%'],
            layoutSize: '90%',
            selectedMode : 'single',
            label: {
                normal: {show: true},
                emphasis: {show: true}
            },
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    areaColor: '#fff',
                    borderWidth: 2,
                },//正常样式
                emphasis: {
                    areaColor: 'orange',
                    borderWidth: 1,
                    borderColor: 'yellow',
                }//鼠标事件区块样式
            },
            data:[
                {name: '汉南区', value: 40500,value2:10},
                {name: '汉阳区', value: 23000,value2:25},
                {name: '东西湖区', value: 22500,value2:9},
                {name: '蔡甸区', value: 40500,value2:1},
                {name: '硚口区', value: 45000,value2:23},
                {name: '洪山区', value: 37000,value2:11},
                {name: '黄陂区', value: 40500,value2:12},
                {name: '江岸区', value: 0,value2:7},
                {name: '江汉区', value: 11161,value2:15},
                {name: '江夏区', value: 15000,value2:5},
                {name: '青山区', value: 20000,value2:22},
                {name: '武昌区', value: 25000,value2:13},
                {name: '新洲区', value: 30000,value2:18},
            ],//value的值是上面visualMap属性中设置的颜色色系区间的值，即0~45000
            label: {
                normal: {
                    show: true,
                    color:'#FFF',
                    fontSize:14,
                    formatter:function(val){
                        var area_content =  val['data'].name ;
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
            case '汉阳区':
                location.href='hyTeam.html';
                break;
            default:
                break;
        }
    });//点击事件，此事件还可以用到柱状图等其他地图
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})