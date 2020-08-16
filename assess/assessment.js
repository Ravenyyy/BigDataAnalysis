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
    var tr = "";
    for(var i=0; i<dataArray.length; i++){
      tr = tr+'<tr>'+
              "<td>" + dataArray[i].name + "</td>"+
              "<td>" + dataArray[i].time + "</td>"+
              "<td>" + dataArray[i].type + "</td>"+
              "<td>" + dataArray[i].content + "</td>"+
              "<td>" + dataArray[i].flag + "</td>"+
              '</tr>';
    }
    $('#wn_tb1').append(tr);
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
    var tr = "";
    for(var i=0; i<dataArray.length; i++){
      tr = tr+'<tr>'+
              "<td>" + dataArray[i].name + "</td>"+
              "<td>" + dataArray[i].time + "</td>"+
              "<td>" + dataArray[i].type + "</td>"+
              "<td>" + dataArray[i].content + "</td>"+
              "<td>" + dataArray[i].flag + "</td>"+
              '</tr>';
    }
    $('#wn_tb2').append(tr);
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
    var tr = "";
    for(var i=0; i<dataArray.length; i++){
      tr = tr+'<tr>'+
            "<td>" + (i+1) + "</td>"+
            "<td>" + dataArray[i].name + "</td>"+
            "<td>" + dataArray[i].pass + "%</td>"+
            '</tr>';
    }
    $('#rank_tb').append(tr);
}