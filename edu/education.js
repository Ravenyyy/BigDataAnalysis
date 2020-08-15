// onload
$(function () {
    init_wn1();
    init_wn2();
    init_edu();
});

function init_wn1() {
    var dataArray = [
        {
        name:"武汉支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"最新预警"
        },
        {
        name:"武汉支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx训练考核不达标",flag:"最新预警"
        },
        {
        name:"宜昌支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"最新预警"
        },
        {
        name:"宜昌支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"最新预警"
        },
        {
        name:"武汉支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"最新预警"
        },
        {
        name:"武汉支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"最新预警"
        },
        {
        name:"武汉支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"最新预警"
        },
        {
        name:"宜昌支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"最新预警"
        },
        {
        name:"武汉支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"最新预警"
        },
        {
        name:"宜昌支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"最新预警"
        }
    ];
    for(var i=0; i<dataArray.length; i++){
        var $tr = $("#wn_tb1 tr:last").clone();
        $("#wn_tb1 tr:last").find('td:nth-child(1)').html(dataArray[i].name);
        $("#wn_tb1 tr:last").find('td:nth-child(2)').html(dataArray[i].time);
        $("#wn_tb1 tr:last").find('td:nth-child(3)').html(dataArray[i].type);
        $("#wn_tb1 tr:last").find('td:nth-child(4)').html(dataArray[i].content);
        $("#wn_tb1 tr:last").find('td:nth-child(5)').html(dataArray[i].flag);
        $("#wn_tb1").append($tr);
    }
    $('#wn_tb1 tr:last').remove()
}

function init_wn2() {
    var dataArray = [
        {
        name:"武汉支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"正在处理"
        },
        {
        name:"武汉支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx训练考核不达标",flag:"正在处理"
        },
        {
        name:"宜昌支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"正在处理"
        },
        {
        name:"宜昌支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"正在处理"
        },
        {
        name:"武汉支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"正在处理"
        },
        {
        name:"武汉支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"正在处理"
        },
        {
        name:"武汉支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"正在处理"
        },
        {
        name:"宜昌支队",time:"2020-8-15 8:00",type:"政治教育",content:"武汉支队xxx考试不及格",flag:"正在处理"
        }
    ];
    for(var i=0; i<dataArray.length; i++){
        var $tr = $("#wn_tb2 tr:last").clone();
        $("#wn_tb2 tr:last").find('td:nth-child(1)').html(dataArray[i].name);
        $("#wn_tb2 tr:last").find('td:nth-child(2)').html(dataArray[i].time);
        $("#wn_tb2 tr:last").find('td:nth-child(3)').html(dataArray[i].type);
        $("#wn_tb2 tr:last").find('td:nth-child(4)').html(dataArray[i].content);
        $("#wn_tb2 tr:last").find('td:nth-child(5)').html(dataArray[i].flag);
        $("#wn_tb2").append($tr);
    }
    $('#wn_tb2 tr:last').remove()
}

function init_edu() {
    var dataArray = [
        {
        name:"武汉支队",pass:90.5
        },
        {
        name:"宜昌支队",pass:85.3
        },
        {
        name:"鄂州支队",pass:81.2
        },
        {
        name:"襄阳支队",pass:75.6
        },
        {
        name:"黄石支队",pass:80.6
        },
        {
        name:"荆门支队",pass:79.3
        },
        {
        name:"咸宁支队",pass:77.2
        },
        {
        name:"十堰支队",pass:79.3
        },
        {
        name:"随州支队",pass:80.7
        },
        {
        name:"孝感支队",pass:80.5
        },
        {
        name:"荆州支队",pass:72.5
        },
        {
        name:"黄冈支队",pass:77.9
        },
        {
        name:"恩施支队",pass:83.5
        },
        {
        name:"江汉支队",pass:89.6
        },
        {
        name:"训保支队",pass:74.5
        },
    ];

    dataArray.sort(function(a, b){return b.pass - a.pass}); 
    for(var i=0; i<dataArray.length; i++){
        var $tr = $("#rank_tb tr:last").clone();
        $("#rank_tb tr:last").find('td:nth-child(1)').html(i+1);
        $("#rank_tb tr:last").find('td:nth-child(2)').html(dataArray[i].name);
        $("#rank_tb tr:last").find('td:nth-child(3)').html(dataArray[i].pass+'%');
        $("#rank_tb").append($tr);
    }
    $('#rank_tb tr:last').remove()
}