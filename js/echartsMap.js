$(function () {
    var name = localStorage.getItem("unitName");
    var level = localStorage.getItem("level");
    // var id = localStorage.getItem("unitId");
    if (name == null || name == "undefined") {
        name = '湖北';
        level = 1;
    }
    $("#title").html(name);
    if (level == 3) {
        initBaiduMap();
    } else {
        var myChart = echarts.init(document.getElementById('map'));
        var mapData = {
            '湖北': [
                { name: '武汉市', name2: '武汉', value: 40500, id: 2 },
                { name: '黄石市', name2: '黄石', value: 43000, id: 6 },
                { name: '十堰市', name2: '十堰', value: 30000, id: 8 },
                { name: '宜昌市', name2: '宜昌', value: 40500, id: 3 },
                { name: '襄阳市', name2: '襄阳', value: 11000, id: 4 },
                { name: '鄂州市', name2: '鄂州', value: 37000, id: 14 },
                { name: '荆门市', name2: '荆门', value: 49500, id: 12 },
                { name: '孝感市', name2: '孝感', value: 0, id: 10 },
                { name: '荆州市', name2: '荆州', value: 11161, id: 5 },
                { name: '黄冈市', name2: '黄冈', value: 15000, id: 7 },
                { name: '咸宁市', name2: '咸宁', value: 20000, id: 11 },
                { name: '随州市', name2: '随州', value: 38000, id: 13 },
                { name: '仙桃市', name2: '汉江', value: 23000, id: 15 },
                { name: '潜江市', name2: '汉江', value: 23000, id: 15 },
                { name: '天门市', name2: '汉江', value: 23000, id: 15 },
                { name: '恩施土家族苗族自治州', name2: '恩施', value: 0, id: 9 },
                { name: '神农架林区', name2: '汉江', value: 23000, id: 15 },
            ],
            '武汉': [
                { name: '汉南区', name2: '汉南', value: 40500, id: 224 },
                { name: '汉阳区', name2: '汉阳', value: 23000, id: 221 },
                { name: '东西湖区', name2: '东西湖', value: 22500, id: 218 },
                { name: '蔡甸区', name2: '蔡甸', value: 40500, id: 223 },
                { name: '硚口区', name2: '硚口', value: 45000, id: 217 },
                { name: '洪山区', name2: '洪山', value: 37000, id: 211 },
                { name: '黄陂区', name2: '黄陂', value: 40500, id: 220 },
                { name: '江岸区', name2: '江岸', value: 0, id: 216 },
                { name: '江汉区', name2: '江汉', value: 11161, id: 215 },
                { name: '江夏区', name2: '江夏', value: 15000, id: 213 },
                { name: '青山区', name2: '青山', value: 20000, id: 210 },
                { name: '武昌区', name2: '武昌', value: 25000, id: 212 },
                { name: '新洲区', name2: '新洲', value: 30000, id: 219 },
            ],
            '十堰': [
                { name: '郧阳区', name2: '郧阳', value: 40500, id: 183 },
                { name: '郧西县', name2: '郧西', value: 23000, id: 184 },
                { name: '丹江口市', name2: '丹江口', value: 22500, id: 182 },
                { name: '张湾区', name2: '张湾', value: 40500, id: 179 },
                { name: '茅箭区', name2: '茅箭', value: 45000, id: 178 },
                { name: '竹山县', name2: '竹山', value: 37000, id: 186 },
                { name: '竹溪县', name2: '竹溪', value: 40500, id: 187 },
                { name: '房县', name2: '房县', value: 25000, id: 185 }
            ],
            '襄阳': [
                { name: '老河口市', name2: '老河口', value: 40500, id: 285 },
                { name: '谷城县', name2: '谷城', value: 23000, id: 284 },
                { name: '襄州区', name2: '襄州', value: 22500, id: 279 },
                { name: '枣阳市', name2: '枣阳', value: 40500, id: 280 },
                { name: '襄城区', name2: '襄城', value: 45000, id: 277 },
                { name: '保康县', name2: '保康', value: 37000, id: 283 },
                { name: '南漳县', name2: '南漳', value: 40500, id: 282 },
                { name: '宜城市', name2: '宜城', value: 30000, id: 281 },
                { name: '樊城区', name2: '樊城', value: 11161, id: 276 },
            ],
            '神农架林区': [
                { name: '神农架林区', name2: '林区', value: 40500, id: 105 },
            ],
            '恩施': [
                { name: '巴东县', name2: '巴东', value: 40500, id: 86 },
                { name: '建始县', name2: '建始', value: 23000, id: 85 },
                { name: '利川市', name2: '利川', value: 22500, id: 84 },
                { name: '恩施市', name2: '恩施', value: 40500, id: 83 },
                { name: '咸丰县', name2: '咸丰', value: 45000, id: 88 },
                { name: '宣恩县', name2: '宣恩', value: 37000, id: 87 },
                { name: '鹤峰县', name2: '鹤峰', value: 40500, id: 90 },
                { name: '来凤县', name2: '来凤', value: 30000, id: 89 },
            ],
            '宜昌': [
                { name: '兴山县', name2: '兴山县', value: 40500, id: 31 },
                { name: '远安县', name2: '远安', value: 23000, id: 33 },
                { name: '秭归县', name2: '秭归', value: 22500, id: 25 },
                { name: '夷陵区', name2: '夷陵', value: 40500, id: 24 },
                { name: '当阳市', name2: '当阳', value: 45000, id: 23 },
                { name: '西陵区', name2: '西陵', value: 37000, id: 32 },
                { name: '点军区', name2: '点军', value: 40500, id: 28 },
                { name: '伍家岗区', name2: '伍家岗', value: 0, id: 30 },
                { name: '猇亭区', name2: '猇亭', value: 11161, id: 37 },
                { name: '枝江市', name2: '枝江', value: 15000, id: 27 },
                { name: '长阳土家族自治县', name2: '长阳', value: 20000, id: 34 },
                { name: '宜都市', name2: '宜都', value: 25000, id: 26 },
                { name: '五峰土家族自治县', name2: '五峰', value: 30000, id: 29 },
            ],
            '荆门': [
                { name: '东宝区', name2: '东宝', value: 40500, id: 69 },
                { name: '钟祥市', name2: '钟祥', value: 23000, id: 71 },
                { name: '京山市', name2: '京山', value: 32500, id: 72 },
                { name: '掇刀区', name2: '掇刀', value: 40500, id: 70 },
                { name: '沙洋县', name2: '沙洋', value: 35000, id: 73 },
            ],
            '荆州': [
                { name: '荆州区', name2: '荆州', value: 40500, id: 157 },
                { name: '沙市区', name2: '沙市', value: 23000, id: 158 },
                { name: '松滋市', name2: '松滋', value: 22500, id: 159 },
                { name: '公安县', name2: '公安', value: 40500, id: 160 },
                { name: '江陵县', name2: '江陵', value: 45000, id: 164 },
                { name: '石首市', name2: '石首', value: 37000, id: 161 },
                { name: '监利县', name2: '监利', value: 40500, id: 162 },
                { name: '洪湖市', name2: '洪湖', value: 11161, id: 163 },
            ],
            '随州': [
                { name: '随县', name2: '随县', value: 40500, id: 202 },
                { name: '曾都区', name2: '曾都', value: 23000, id: 199 },
                { name: '广水市', name2: '广水', value: 22500, id: 200 },
            ],
            '潜江': [
                { name: '潜江市', name2: '潜江', value: 40500, id: 103 },
            ],
            '天门': [
                { name: '天门市', name2: '天门', value: 40500, id: 104 },
            ],
            '仙桃': [
                { name: '仙桃市', name2: '仙桃', value: 40500, id: 102 },
            ],
            '汉江': [
                { name: '潜江市', name2: '汉江', value: 40500, id: 103 },
                { name: '天门市', name2: '汉江', value: 40500, id: 104 },
                { name: '仙桃市', name2: '汉江', value: 40500, id: 102 },
                { name: '神农架林区', name2: '汉江', value: 40500, id: 105 },
            ],
            '孝感': [
                { name: '孝南区', name2: '孝南', value: 40500, id: 300 },
                { name: '大悟县', name2: '大悟', value: 23000, id: 305 },
                { name: '安陆市', name2: '安陆', value: 22500, id: 303 },
                { name: '孝昌县', name2: '孝昌', value: 40500, id: 306 },
                { name: '云梦县', name2: '云梦', value: 45000, id: 304 },
                { name: '应城市', name2: '应城', value: 37000, id: 302 },
                { name: '汉川市', name2: '汉川', value: 40500, id: 301 },
            ],
            '黄冈': [
                { name: '红安县', name2: '红安', value: 40500, id: 115 },
                { name: '麻城市', name2: '麻城', value: 23000, id: 116 },
                { name: '罗田县', name2: '罗田', value: 22500, id: 121 },
                { name: '团风县', name2: '团风', value: 40500, id: 120 },
                { name: '英山县', name2: '英山县', value: 45000, id: 122 },
                { name: '黄州区', name2: '黄州', value: 37000, id: 114 },
                { name: '浠水县', name2: '浠水', value: 40500, id: 123 },
                { name: '蕲春县', name2: '蕲春', value: 0, id: 117 },
                { name: '武穴市', name2: '武穴', value: 11161, id: 118 },
                { name: '黄梅县', name2: '黄梅', value: 15000, id: 119 }
            ],
            '鄂州': [
                { name: '华容区', name2: '华容', value: 40500, id: 319 },
                { name: '鄂城区', name2: '鄂城', value: 23000, id: 317 },
                { name: '梁子湖区', name2: '梁子', value: 22500, id: 320 }
            ],
            '咸宁': [
                { name: '嘉鱼县', name2: '嘉鱼', value: 40500, id: 17 },
                { name: '赤壁市', name2: '赤壁', value: 23000, id: 18 },
                { name: '咸安区', name2: '咸安', value: 22500, id: 21 },
                { name: '崇阳县', name2: '崇阳', value: 40500, id: 38 },
                { name: '通山县', name2: '通山', value: 45000, id: 20 },
                { name: '通城县', name2: '通城', value: 37000, id: 19 },
            ],
            '黄石': [
                { name: '铁山区', name2: '铁山', value: 40500, id: 142 },
                { name: '黄石港区', name2: '黄石港', value: 23000, id: 138 },
                { name: '下陆区', name2: '下陆', value: 22500, id: 141 },
                { name: '西塞山区', name2: '西塞山', value: 40500, id: 139 },
                { name: '大冶市', name2: '大冶', value: 45000, id: 143 },
                { name: '阳新县', name2: '阳新', value: 37000, id: 144 },
            ],
        };

        var option = {
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    var res = '';
                    res += params['data'].name2 + '</br>';
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
                inRange: {
                    color: ['#42a8be', '#00a69c', '#30ea8b'],//上色范围
                }
            },//给地图上色
            series: [{
                name: '地图',
                type: 'map',
                mapType: name,
                layoutCenter: ['50%', '48%'],
                layoutSize: '95%',
                selectedMode: 'single',
                label: {
                    normal: { show: true },
                    emphasis: { show: true }
                },
                itemStyle: {
                    normal: {
                        borderColor: '#30cdd1',
                        areaColor: '#30cdd1',
                        borderWidth: 2,
                    },//正常样式
                    emphasis: {
                        areaColor: 'orange',
                        borderWidth: 1,
                        borderColor: 'yellow',
                    }//鼠标事件区块样式
                },
                data: mapData[name],//value的值是上面visualMap属性中设置的颜色色系区间的值，即0~45000
                label: {
                    normal: {
                        show: true,
                        color: '#FFF',
                        fontSize: 18,
                        formatter: function (val) {
                            var area_content = val['data'].name2;
                            return area_content.split("-").join("\n");
                        },//让series 中的文字进行换行
                    },
                    emphasis: { show: true }
                },//地图中文字内容及样式控制
            }]
        };
        myChart.setOption(option, true);
        myChart.on('click', function (params) {
            localStorage.setItem("level", parseInt(level) + 1);
            localStorage.setItem("unitId", params.data.id);
            localStorage.setItem("unitName", params.data.name2);
            // console.log(localStorage.getItem("unitId"));
            // console.log(localStorage.getItem("level"));
            console.log(localStorage.getItem("unitName"));
            location.reload();
        });//点击事件，此事件还可以用到柱状图等其他地图
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
})

