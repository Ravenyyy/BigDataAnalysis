var opts = {
    lines: 13, // 花瓣数目
    length: 12, // 花瓣长度
    width: 8, // 花瓣宽度
    radius: 40, // 花瓣距中心半径
    corners: 1, // 花瓣圆滑度 (0-1)
    rotate: 0, // 花瓣旋转角度
    direction: 1, // 花瓣旋转方向 1: 顺时针, -1: 逆时针
    color: '#fff', // 花瓣颜色
    speed: 1, // 花瓣旋转速度
    trail: 60, // 花瓣旋转时的拖影(百分比)
    shadow: false, // 花瓣是否显示阴影
    hwaccel: false, //spinner 是否启用硬件加速及高速旋转
    className: 'spinner', // spinner css 样式名称
    zIndex: 2e9, // spinner的z轴 (默认是2000000000)
    top: 'auto', // 菊花相对定位的top
    left: 'auto',// spinner 相对父容器Left定位 单位 px
};

var spinner = new Spinner(opts);

function startLoading(){
    //请求时spinner出现
    $("#mb").css("display","block");
    var target = $('#loading').get(0);
    spinner.spin(target);
}

function stopLoading(){
    //关闭spinner
    $("#mb").css("display","none");
    spinner.spin();
}