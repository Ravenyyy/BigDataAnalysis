
const conditionTemplate = `
<Row>
    <Col span="1" style="color:white; font-size:20px; text-align: right;line-height:100px;margin-right:5px">
        时间：
    </Col>
    <Col span="5" >
        <Row>
            <Col span="6" style="color:white; font-size:15px; text-align: right;line-height:50px;margin-right:15px">
                开始时间
            </Col>
            <Col span="6" style="text-align: center;line-height:50px">
                <DatePicker v-model="queryItem.startTime" size="large" type="month" clearable placeholder="选择开始时间" style="width: 200px"></DatePicker>
            </Col>
        </Row>
        <Row>
            <Col span="6" style="color:white; font-size:15px; text-align: right;line-height:50px;margin-right:15px">
                结束时间
            </Col>
            <Col span="6" style="text-align: center;line-height:50px">
                <DatePicker v-model="queryItem.endTime" size="large" type="month" clearable placeholder="选择结束时间" style="width: 200px"></DatePicker>
            </Col>
        </Row>
    </Col>
    <Col span="1" style="color:white; font-size:20px; text-align: right;line-height:100px;margin-right:50px">
        <Row style="line-height:60px;">单位：</Row>
        <Row style="line-height:40px; font-size:17">
            <Checkbox id="checkBox" v-model="queryItem.zongdui" @on-change="zongduiChange">总队</Checkbox>
        </Row>
    </Col>
    <Col span="8" >
        <Row>
            <Col span="2" style="color:white; font-size:15px; text-align: right;line-height:50px;margin-right:15px">
                支队
            </Col>
            <Col span="5" style="text-align: center;line-height:50px">
                <Select placeholder="请选择支队" v-model="queryItem.zhidui" @on-change="getDaduiSelect" multiple clearable :disabled="zongduiFlag" style="width: 200px">
                    <Option v-for="item in zhiduiSelect" :value="item.id" :key="item.id">{{item.unitName}}</Option>
                </Select>
            </Col>
            <Col span="5" style="color:white; font-size:15px; text-align: right;line-height:50px;margin-right:15px">
                大队
            </Col>
            <Col span="5" style="text-align: center;line-height:50px">
                <Select placeholder="请选择大队" v-model="queryItem.dadui" @on-change="getStationSelect" multiple clearable :disabled="zongduiFlag" style="width: 200px">
                    <Option v-for="item in daduiSelect" :value="item.id" :key="item.id">{{item.unitName}}</Option>
                </Select>
            </Col>
        </Row>
        <Row>
            <Col span="2" style="color:white; font-size:15px; text-align: right;line-height:50px;margin-right:15px">
                消防站
            </Col>
            <Col span="5" style="text-align: center;line-height:50px">
                <Select placeholder="请选择消防站" v-model="queryItem.station" @on-change="stationChange" multiple clearable :disabled="zongduiFlag" style="width: 200px">
                    <Option v-for="item in stationSelect" :value="item.id" :key="item.id">{{item.unitName}}</Option>
                </Select>
            </Col>
            <Col span="5" style="color:white; font-size:15px; text-align: right;line-height:50px;margin-right:15px">
                个人
            </Col>
            <Col span="5" style="text-align: center;line-height:50px">
                <Select placeholder="请选择个人" v-model="queryItem.person" @on-change="personChange" multiple clearable :disabled="zongduiFlag" style="width: 200px">
                    <Option v-for="item in personSelect" :value="item.id" :key="item.id">{{item.uname}}</Option>
                </Select>
            </Col>
        </Row>
    </Col>
    <Col span="1" style="color:white; font-size:20px; text-align: right;line-height:100px;margin-right:5px">
        指标：
    </Col>
    <Col span="5" >
        <Row>
            <Col span="6" style="color:white; font-size:15px; text-align: right;line-height:50px;margin-right:15px">
                一级指标
            </Col>
            <Col span="5" style="text-align:center; line-height:50px">
                <Select  placeholder="请选择一级指标" v-model="queryItem.firstTarget" @on-change="getSecondTarget" clearable style="width: 200px">
                    <Option v-for="item in firstTargetSelect" :value="item.id" :key="item.id">{{item.name}}</Option>
                </Select>
            </Col>
        </Row>
        <Row>
            <Col span="6" style="color:white; font-size:15px; text-align: right;line-height:50px;margin-right:15px">
                二级指标
            </Col>
            <Col span="5" style="text-align: center;line-height:50px">
                <Select  placeholder="请选择二级指标" v-model="queryItem.secondTarget" clearable style="width: 200px">
                    <Option v-for="item in secondTargetSelect" :value="item.id" :key="item.id">{{item.name}}</Option>
                </Select>
            </Col>
        </Row>
    </Col>
    <Col span="2" style="color:white;text-align: center;line-height:100px;">
        <Button type="primary" icon="ios-search" @click="search" style="width:80px; height:40px; font-size:15px">查询</Button>
    </Col>
</Row>
`
var new_element = document.createElement("script");
new_element.setAttribute("type", "text/javascript");
new_element.setAttribute("src", "../js/moment.js");
document.body.appendChild(new_element);

const condition = new Vue({
    el: '#condition',
    template: conditionTemplate,
    data () {
        return {
            queryItem: {
                startTime: '',
                endTime: '',
                zongdui: false,
                zhidui: [],
                dadui: [],
                station: [],
                person: [],
                firstTarget: '',
                secondTarget: ''
            },
            oldStation: [],
            oldPerson: [],
            zhiduiSelect: [],
            daduiSelect: [],
            stationSelect: [],
            personSelect: [],
            zongduiFlag: false,

            firstTargetSelect: [],
            secondTargetSelect: [],
            numType: 0,//0:非百分比的数字，1：XX率
            resultList: [],
        }
    },
    methods: {
        check () {

            var endTime1 = moment(this.queryItem.endTime).format("YYYY-MM-DD")
            var endTime2 = new Date(Date.parse(endTime1.replace(/-/g, "/")));
            var now = new Date()
            if (now.getFullYear() == endTime2.getFullYear() && now.getMonth() <= endTime2.getMonth()) {
                this.$Message.error("不能选择大于本月的时间！！")//这里没有返回false，考虑到选择了大于本月的时间，前台的数据会将null转换为0
            }
            if (this.queryItem.startTime == '' || this.queryItem.endTime == '') {
                this.$Message.error("月份不能为空！！")
                return false;
            }
            if (this.queryItem.startTime > this.queryItem.endTime) {
                this.$Message.error("结束月份不能小于开始月份！！")
                return false;
            }
            if (this.queryItem.secondTarget == '') {
                this.$Message.error("二级指标未选择！！")
                return false;
            }
            if (this.queryItem.zongdui == false && this.queryItem.zhidui.length == 0) {
                this.$Message.error("未选择查询条件！！")
                return false;
            }

            return true;
        },
        search () {
            console.log(this.queryItem)
            let flag = this.check()
            if (flag) {

                // initEcharts(this.queryItem)
                var queryData = $.extend({}, this.queryItem);
                var startTime = moment(queryData.startTime).format("YYYY-MM-DD")
                queryData.startTime = startTime
                var endTime = moment(queryData.endTime).format("YYYY-MM-DD")
                queryData.endTime = endTime
                console.log(queryData)
                var _this = this
                $.ajax({
                    type: "post",
                    url: localStorage.getItem("url") + 'search/searchByItem',
                    contentType: "application/json;charset=utf-8",
                    data: JSON.stringify(queryData),
                    dataType: "json",
                    success: function (response) {
                        console.log(response.extra.resultList);
                        _this.resultList = response.extra.resultList;
                        _this.numType = response.extra.numType
                        initEcharts(_this.queryItem)
                    },
                    error: function (response) {
                        console.log(response);
                    }
                })
            }
        },
        zongduiChange () {
            if (this.queryItem.zongdui) {
                this.$Notice.info({
                    title: '注意',
                    desc: '选择总队，则支队、大队、消防站和个人都被置为不可选！',
                    duration: 8
                });
                this.zongduiFlag = true
                this.queryItem.zhidui = []
                this.queryItem.dadui = []
                this.queryItem.station = []
                this.queryItem.person = []
            } else {
                this.zongduiFlag = false
            }
        },
        getDaduiSelect () {
            let zhiduiData = this.queryItem.zhidui
            if (zhiduiData.length == 0) {
                this.daduiSelect = []
            } else {
                console.log(zhiduiData);
                var zhiduiIdStr = ''
                for (var i = 0; i < zhiduiData.length; i++) {
                    if (i != zhiduiData.length - 1) {
                        zhiduiIdStr += zhiduiData[i] + '-';
                    } else {
                        zhiduiIdStr += zhiduiData[i];
                    }
                }
                $.ajax({
                    type: 'GET',
                    url: localStorage.getItem("url") + 'unit/getUnitByParentId',
                    data: {
                        // parentId: zhiduiData[zhiduiData.length-1]
                        unitIdStr: zhiduiIdStr
                    },
                    success: function (response) {
                        condition.daduiSelect = response.extra.unitList
                    },
                    error: function (response) {
                        console.log(response);
                    }
                })
            }
        },
        getStationSelect () {
            let daduiData = this.queryItem.dadui
            if (daduiData.length == 0) {
                this.stationSelect = []
            } else {
                var daduiIdStr = ''
                for (var i = 0; i < daduiData.length; i++) {
                    if (i != daduiData.length - 1) {
                        daduiIdStr += daduiData[i] + '-';
                    } else {
                        daduiIdStr += daduiData[i];
                    }
                }
                $.ajax({
                    type: 'GET',
                    url: localStorage.getItem("url") + 'unit/getUnitByParentId',
                    data: {
                        // parentId: daduiData[daduiData.length-1]
                        unitIdStr: daduiIdStr
                    },
                    success: function (response) {
                        condition.stationSelect = response.extra.unitList
                    },
                    error: function (response) {
                        console.log(response);
                    }
                })
            }
        },
        stationChange (value) {
            if ((value.length != 0 && this.oldStation.length == 0) || (value.length == 0 && this.oldStation.length != 0)) {
                this.queryItem.firstTarget = ''
            }
            this.oldStation = [].concat(value)
            let stationData = this.queryItem.station
            if (stationData.length == 0) {
                this.personSelect = []
            } else {
                var staionStr = '';
                for (var i = 0; i < stationData.length; i++) {
                    if (i != stationData.length - 1) {
                        staionStr += stationData[i] + '-';
                    } else {
                        staionStr += stationData[i];
                    }
                }

                $.ajax({
                    type: 'GET',
                    url: localStorage.getItem("url") + 'user/getUserByParentId',
                    data: {
                        // parentId: daduiData[daduiData.length-1]
                        unitIdStr: staionStr
                    },
                    success: function (response) {
                        console.log(response);
                        condition.personSelect = response.extra.userList
                    },
                    error: function (response) {
                        console.log(response);
                    }
                })
            }
        },
        personChange (value) {
            if ((value.length != 0 && this.oldPerson.length == 0) || (value.length == 0 && this.oldPerson.length != 0)) {
                this.queryItem.firstTarget = ''
            }
            this.oldPerson = [].concat(value)
        },
        getSecondTarget () {
            this.secondTargetSelect = []
            if (this.queryItem.person != '') {

                $.ajax({
                    type: 'GET',
                    url: localStorage.getItem("url") + 'statisticItem/getSecondItem',
                    data: {
                        unitLevel: 3,
                        parentId: this.queryItem.firstTarget
                    },
                    success: function (response) {
                        condition.secondTargetSelect = response.extra.secondItemList
                    },
                    error: function (response) {
                        console.log(response);
                    }
                })
                // if(this.queryItem.firstTarget == 1){
                //     this.secondTargetSelect=[
                //         {id:1, name:'十事联动参与次数'},
                //         {id:2, name:'三课一会参与次数'},
                //     ]
                // }
                // if(this.queryItem.firstTarget == 2){
                //     this.secondTargetSelect=[
                //         {id:3, name:'课程完成情况'},
                //         {id:4, name:'考试完成情况'},
                //         {id:5, name:'考试分数'},
                //     ]
                // }
                // if(this.queryItem.firstTarget == 3){
                //     this.secondTargetSelect=[
                //         {id:6, name:'躁狂'},
                //         {id:7, name:'抑郁'},
                //         {id:8, name:'焦虑'},
                //         {id:9, name:'敌对'},
                //         {id:10, name:'强迫'},
                //         {id:11, name:'其他'},
                //     ]
                // }
                // if(this.queryItem.firstTarget == 4){
                //     this.secondTargetSelect=[
                //         {id:12, name:'评价合格率'}
                //     ]
                // }
                // if(this.queryItem.firstTarget == 5){
                //     this.secondTargetSelect=[
                //         {id:13, name:'睡眠质量不良次数'},
                //         {id:14, name:'训练不合格次数'},
                //         {id:15, name:'违规驾驶次数'},
                //         {id:16, name:'手机违规使用次数'},
                //     ]
                // }
            } else if (this.queryItem.station != '' && this.queryItem.person == '') {
                $.ajax({
                    type: 'GET',
                    url: localStorage.getItem("url") + 'statisticItem/getSecondItem',
                    data: {
                        unitLevel: 2,
                        parentId: this.queryItem.firstTarget
                    },
                    success: function (response) {
                        condition.secondTargetSelect = response.extra.secondItemList
                    },
                    error: function (response) {
                        console.log(response);
                    }
                })
                // if(this.queryItem.firstTarget == 1){
                //     this.secondTargetSelect=[
                //         {id:1, name:'十事联动参与率'},
                //         {id:2, name:'三课一会参与率'},
                //     ]
                // }
                // if(this.queryItem.firstTarget == 2){
                //     this.secondTargetSelect=[
                //         {id:3, name:'课程完成率'},
                //         {id:4, name:'考试完成率'},
                //         {id:5, name:'平均分'},
                //     ]
                // }
                // if(this.queryItem.firstTarget == 3){
                //     this.secondTargetSelect=[
                //         {id:6, name:'参评人数'},
                //         {id:7, name:'心理咨询师数量'},
                //         {id:8, name:'异常人数'},
                //         {id:9, name:'已干预人数'},
                //         {id:10, name:'正在干预人数'},
                //     ]
                // }
                // if(this.queryItem.firstTarget == 4){
                //     this.secondTargetSelect=[
                //         {id:11, name:'优秀人数'},
                //         {id:12, name:'称职人数'},
                //         {id:13, name:'基本称职人数'},
                //         {id:14, name:'不称职人数'},
                //     ]
                // }
                // if(this.queryItem.firstTarget == 5){
                //     this.secondTargetSelect=[
                //         {id:15, name:'睡眠质量不良人数'},
                //         {id:16, name:'训练不合格人数'},
                //         {id:17, name:'违规驾驶人数'},
                //         {id:18, name:'手机违规使用人数'},
                //     ]
                // }
            } else {

                $.ajax({
                    type: 'GET',
                    url: localStorage.getItem("url") + 'statisticItem/getSecondItem',
                    data: {
                        unitLevel: 1,
                        parentId: this.queryItem.firstTarget
                    },
                    success: function (response) {
                        condition.secondTargetSelect = response.extra.secondItemList
                    },
                    error: function (response) {
                        console.log(response);
                    }
                })
                // if(this.queryItem.firstTarget == 1){
                //     this.secondTargetSelect=[
                //         {id:1, name:'支部开展率'},
                //         {id:2, name:'党员参与率'},
                //         {id:3, name:'党委数'},
                //         {id:4, name:'支部数'},
                //         {id:5, name:'人员总数'},
                //     ]
                // }
                // if(this.queryItem.firstTarget == 2){
                //     this.secondTargetSelect=[
                //         {id:6, name:'总完成率'},
                //         {id:7, name:'平均分'}
                //     ]
                // }
                // if(this.queryItem.firstTarget == 3){
                //     this.secondTargetSelect=[
                //         {id:8, name:'参评人数'},
                //         {id:9, name:'心理咨询师数量'},
                //         {id:10, name:'异常人数'},
                //         {id:11, name:'已干预人数'},
                //         {id:12, name:'正在干预人数'},
                //     ]
                // }
                // if(this.queryItem.firstTarget == 4){
                //     this.secondTargetSelect=[
                //         {id:13, name:'支部开展率'},
                //         {id:14, name:'人员参与率'},
                //         {id:15, name:'优秀人数'},
                //         {id:16, name:'称职人数'},
                //         {id:17, name:'基本称职人数'},
                //         {id:18, name:'不称职人数'},
                //     ]
                // }
                // if(this.queryItem.firstTarget == 5){
                //     this.secondTargetSelect=[
                //         {id:19, name:'睡眠质量不良人数'},
                //         {id:20, name:'训练不合格人数'},
                //         {id:21, name:'违规驾驶人数'},
                //         {id:22, name:'手机违规使用人数'},
                //     ]
                // }
            }
        },
    }
})

//初始化折线图
function initEcharts (queryItem) {
    // 实例化对象
    var myChart = echarts.init(document.querySelector("#result"));

    // 指定配置和数据
    option = {
        color: ['#FF6EB4', '#ffff00', '#7fff00', '#00f2f1', '#FD866A', '#9E87FF', '#58D5FF'],
        title: {
            show: true,
            text: '',
            textStyle: {
                color: '#ffffff',
                fontSize: 20
            },
            left: "7%",
            top: "3%",
        },
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            top: "5%",
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#FFFFFF",
                fontSize: 16
            }
        },
        grid: {
            top: "20%",
            left: "5%",
            right: "5%",
            bottom: "10%",
            show: true,
            borderColor: "rgba(255,255,255,0.2)",
            containLabel: false
        },
        xAxis: {
            type: "category",
            boundaryGap: false,
            axisPointer: {
                type: 'shadow'
            },
            data: [],
            // 修饰刻度标签的颜色
            axisLine: {
                lineStyle: {
                    color: "white"
                }
            },
            axisLabel: {
                interval: 0,
                fontSize: 16
            },
        },
        yAxis: {
<<<<<<< HEAD
                name: '平均分',
                type: "value",
                // 修饰刻度标签的颜色
                axisLine: {
                    lineStyle: {
                        color: "white"
                    }
                },
                // 修改y轴分割线的颜色
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,0.2)",
                    }
                },
                axisLabel: {
                    fontSize: 15,
                    // formatter: '{value} %'
                },
                areaStyle: {
                    normal: {
                    color: '#275F82' //改变区域颜色
                    }
                    },
=======
            name: '平均分',
            type: "value",
            // 修饰刻度标签的颜色
            axisLine: {
                lineStyle: {
                    color: "white"
                }
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,0.2)",
                }
>>>>>>> f7b4bb867023f3ee3a431e76e585398ec1bb5dde
            },
            axisLabel: {
                fontSize: 15,
                // formatter: '{value} %'
            },
        },

        series: []
    };

    let xAxisDate = getMonthBetween(dateToString(queryItem.startTime), dateToString(queryItem.endTime));
    let seriesDataClub = getseriesData(queryItem, xAxisDate)
    let seriesData = seriesDataClub.seriesData
    let unit = seriesDataClub.unit
    let yAxisName = getyAxisName(queryItem, unit)
    let title = getTitle(queryItem)

    console.log(seriesData);

    option.title.text = title + '---' + yAxisName
    option.xAxis.data = xAxisDate
    option.yAxis.name = yAxisName
    if (condition.numType == 1) {
        option.yAxis.axisLabel = {
            fontSize: 15,
            formatter: '{value} %'
        }


    } else if (condition.numType == 2) {
        option.yAxis.axisLabel = {
            fontSize: 15,
            formatter: function (value, index) {
                var result = "";
                switch (value) {
                    case 2: result = "否"; break;
                    case 1: result = "是"; break;
                    default: "-";
                }

                return result;
            }
        }
        option.yAxis.max = 2
        option.yAxis.splitNumber = 2
        option.yAxis.min = 1
    } else if (condition.numType == 3) {
        option.yAxis.axisLabel = {
            fontSize: 15,
            formatter: function (value, index) {
                var result = "";
                switch (value) {
                    case 1: result = "优秀"; break;
                    case 2: result = "称职"; break;
                    case 3: result = "基本称职"; break;
                    case 4: result = "不称职"; break;
                    default: "-";
                }

                return result;
            },
            rotate: 40
        }
        option.yAxis.max = 4
        option.yAxis.splitNumber = 4
    } else {
        option.yAxis.axisLabel = {
            fontSize: 15
        }


    }
    option.series = []
    for (let i = 0; i < seriesData.length; i++) {
        option.series.push(
            {
                name: seriesData[i].name,
                type: "line",
                lineStyle: {
                    width: 4
                },
                symbolSize: 8,
                //设置折线图颜色  
                // itemStyle : {    
                //     normal : {    
                //         lineStyle:{    
                //             color:'#ff0000'    
                //         }   
                //     }    
                // },
                // 是否让线条圆滑显示
                // areaStyle: {
                //     normal: {
                //     color: '#275F82' //改变区域颜色
                //     }
                //     },
                smooth: true,
                data: seriesData[i].data
            }
        )
    }

    // 把配置给实例对象
    myChart.setOption(option, true);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

function getseriesData (queryItem, xAxisDate) {
    let info = getUnit(queryItem)
    let unitFlag = info.flag
    // let unit = info.unit
    let seriesData = []
    for (let i = 0; i < condition.resultList.length; i++) {
        let item = { name: '', data: [] }
        let resultList = []
        for (var key in condition.resultList[i]) {

            if (condition.numType == 1) {
                item.name = key + '(%)';//显示每条线的名称
            } else if (condition.numType == 2) {
                item.name = key + '(1:是;2:否)';//显示每条线的名称
            } else {
                item.name = key;//显示每条线的名称
            }
            resultList = condition.resultList[i][key]
        }
        // item.name = condition.resultList[i].name   //显示每条线的名称
        console.log(resultList[i])
<<<<<<< HEAD
        for(let j=0; j<xAxisDate.length; j++){
            console.log("resultList[j]:",resultList[j])
            if(condition.numType==0){//整数
                item.data.push((resultList[j]==undefined||resultList[j]==null)?0:resultList[j])
            }else if(condition.numType==1){//百分比，XX率
                item.data.push((resultList[j]==undefined||resultList[j]==null)?0:(resultList[j]*100).toFixed(2))
            }else if(condition.numType==2||condition.numType==3){//是否性质的数值或者评价等级
                item.data.push((resultList[j]==undefined||resultList[j]==null)?0:resultList[j])
            }else if(condition.numType==4){//小数但不是百分比
                item.data.push((resultList[j]==undefined||resultList[j]==null)?0:resultList[j].toFixed(2))
=======
        for (let j = 0; j < xAxisDate.length; j++) {
            if (condition.numType == 0) {//整数
                item.data.push((resultList[j] == undefined || resultList[j] == null) ? 0 : resultList[j])
            } else if (condition.numType == 1) {//百分比，XX率
                item.data.push((resultList[j] == undefined || resultList[j] == null) ? 0 : (resultList[j] * 100).toFixed(2))
            } else if (condition.numType == 2 || condition.numType == 3) {//是否性质的数值或者评价等级
                item.data.push((resultList[j] == undefined || resultList[j] == null) ? 0 : resultList[j])
            } else if (condition.numType == 4) {//小数但不是百分比
                item.data.push((resultList[j] == undefined || resultList[j] == null) ? 0 : resultList[j].toFixed(2))
>>>>>>> f7b4bb867023f3ee3a431e76e585398ec1bb5dde
            }

        }
        seriesData.push(item)
    }

    return { "seriesData": seriesData, "unit": unitFlag }
}

function getUnit (queryItem) {
    if (queryItem.person != '') {
        return { "flag": 5, "unit": queryItem.person }
    } else if (queryItem.station != '') {
        return { "flag": 4, "unit": queryItem.station }
    } else if (queryItem.dadui != '') {
        return { "flag": 3, "unit": queryItem.dadui }
    } else if (queryItem.zhidui != '') {
        return { "flag": 2, "unit": queryItem.zhidui }
    } else if (queryItem.zongdui) {
        return { "flag": 1, "unit": [1] }
    } else {
        return { "flag": 1, "unit": [] }
    }
}

function getyAxisName (queryItem, unit) {
    console.log(unit);
    // let secondTarget = [];
    // if(unit==5){
    //     secondTarget = [
    //         {id:1, name:'十事联动参与次数'},
    //         {id:2, name:'三课一会参与次数'},
    //         {id:3, name:'课程完成情况'},
    //         {id:4, name:'考试完成情况'},
    //         {id:5, name:'考试分数'},
    //         {id:6, name:'躁狂'},
    //         {id:7, name:'抑郁'},
    //         {id:8, name:'焦虑'},
    //         {id:9, name:'敌对'},
    //         {id:10, name:'强迫'},
    //         {id:11, name:'其他'},
    //         {id:12, name:'评价合格率'},
    //         {id:13, name:'睡眠质量不良次数'},
    //         {id:14, name:'训练不合格次数'},
    //         {id:15, name:'违规驾驶次数'},
    //         {id:16, name:'手机违规使用次数'},
    //     ]
    // }else if(unit == 4){
    //     secondTarget = [
    //         {id:1, name:'十事联动参与率'},
    //         {id:2, name:'三课一会参与率'},
    //         {id:3, name:'课程完成率'},
    //         {id:4, name:'考试完成率'},
    //         {id:5, name:'平均分'},
    //         {id:6, name:'参评人数'},
    //         {id:7, name:'心理咨询师数量'},
    //         {id:8, name:'异常人数'},
    //         {id:9, name:'已干预人数'},
    //         {id:10, name:'正在干预人数'},
    //         {id:11, name:'优秀人数'},
    //         {id:12, name:'称职人数'},
    //         {id:13, name:'基本称职人数'},
    //         {id:14, name:'不称职人数'},
    //         {id:15, name:'睡眠质量不良人数'},
    //         {id:16, name:'训练不合格人数'},
    //         {id:17, name:'违规驾驶人数'},
    //         {id:18, name:'手机违规使用人数'},
    //     ]
    // }else{
    //     secondTarget = [
    //         {id:1, name:'支部开展率'},
    //         {id:2, name:'党员参与率'},
    //         {id:3, name:'党委数'},
    //         {id:4, name:'支部数'},
    //         {id:5, name:'人员总数'},
    //         {id:6, name:'总完成率'},
    //         {id:7, name:'平均分'},
    //         {id:8, name:'参评人数'},
    //         {id:9, name:'心理咨询师数量'},
    //         {id:10, name:'异常人数'},
    //         {id:11, name:'已干预人数'},
    //         {id:12, name:'正在干预人数'},
    //         {id:13, name:'支部开展率'},
    //         {id:14, name:'人员参与率'},
    //         {id:15, name:'优秀人数'},
    //         {id:16, name:'称职人数'},
    //         {id:17, name:'基本称职人数'},
    //         {id:18, name:'不称职人数'},
    //         {id:19, name:'睡眠质量不良人数'},
    //         {id:20, name:'训练不合格人数'},
    //         {id:21, name:'违规驾驶人数'},
    //         {id:22, name:'手机违规使用人数'},
    //     ]
    // }

    for (let i = 0; i < condition.secondTargetSelect.length; i++) {
        if (queryItem.secondTarget == condition.secondTargetSelect[i].id) {
            return condition.secondTargetSelect[i].name
        }
    }
}

function getTitle (queryItem) {
    let firstTarget = [
        { id: 1, name: '智慧党建' },
        { id: 2, name: '政治教育' },
        { id: 3, name: '心理测询' },
        { id: 4, name: '全员考核' },
        { id: 5, name: '智慧营区' },
    ]
    for (let i = 0; i < firstTarget.length; i++) {
        if (queryItem.firstTarget == firstTarget[i].id) {
            return firstTarget[i].name
        }
    }
}

function getMonthBetween (start, end) {
    let result = []
    let s = start.split('-')
    let e = end.split('-')

    let min = new Date();
    let max = new Date();
    min.setFullYear(s[0], s[1])
    max.setFullYear(e[0], e[1])

    let curr = min
    let str = ""
    while (curr <= max) {
        let month = curr.getMonth()
        if (month === 0) {
            str = (curr.getFullYear() - 1) + '-' + 12
        } else {
            str = curr.getFullYear() + '-' + (month < 10 ? ('0' + month) : month)
        }

        result.push(str)
        curr.setMonth(month + 1)
    }
    return result;
}

function dateToString (date) {
    var year = date.getFullYear()
    var month = (date.getMonth() + 1).toString()
    if (month.length == 1) {
        month = "0" + month;
    }
    var dateTime = year + "-" + month
    return dateTime;
}

function toPercent (point) {
    var str = Number(point * 100).toFixed(2);
    str += "%";
    return str;
}

let unitList = [
    [
        { id: 1, name: '湖北总队' }
    ],
    [
        { id: 1, name: '武汉' },
        { id: 2, name: '鄂州' },
        { id: 3, name: '黄冈' },
        { id: 4, name: '襄阳' },
        { id: 5, name: '荆门' },
        { id: 6, name: '宜昌' },
        { id: 7, name: '孝感' },
        { id: 8, name: '荆州' },
    ],
    [
        { id: 1, name: '武昌' },
        { id: 2, name: '汉阳' }
    ],
    [
        { id: 1, name: '珞珈山' },
        { id: 2, name: '七里庙' }
    ],
    [
        { id: 1, name: '张三' },
        { id: 2, name: '李四' }
    ]
]

function getFirstTarget () {
    $.ajax({
        type: 'GET',
        url: localStorage.getItem("url") + 'statisticItem/getFirstItem',
        success: function (response) {
            condition.firstTargetSelect = response.extra.firstItemList
        },
        error: function (response) {
            console.log(response);
        }
    })
}

function getZhiduiSelect () {
    $.ajax({
        type: 'GET',
        url: localStorage.getItem("url") + 'unit/getZhidui',
        success: function (response) {
            condition.zhiduiSelect = response.extra.zhiduiList
        },
        error: function (response) {
            console.log(response);
        }
    })
}

function test () {
    $.ajax({
        type: 'GET',
        url: localStorage.getItem("url") + 'assessPerson/getAssessPersonByUnit',
        traditional: true,
        data: {
            unitId: 266,
            month: '2020-09'
        },
        success: function (response) {
            console.log(response);
        },
        error: function (response) {
            console.log(response);
        }
    })
}

window.onload = () => {
    // getZhidui();
    getFirstTarget();
    getZhiduiSelect();
    test();
}