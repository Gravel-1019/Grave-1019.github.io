document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed("#typed", {
        strings: ['当时年少掷春光', '花马踏蹄酒溅香', '爱恨情仇随浪来', '夏蝉歌醒夜未央'],//字符串
        startDelay: 0,//开始的延迟
        typeSpeed: 120,//打字速度
        backSpeed: 80,//回退速度
        loop: true,//是否循环
        showCursor: false,//显示游标
        smartBackspace: true, //默认true
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed("#AM", {
        strings: ['About Me | 关于我^2000'],//字符串
        startDelay: 0,//开始的延迟
        typeSpeed: 120,//打字速度
        backSpeed: 80,//回退速度
        loop: true,//是否循环
        showCursor: false,//显示游标
        smartBackspace: true, //默认true
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed("#TS", {
        strings: ['Tech Stack | 技术栈^2000'],//字符串
        startDelay: 0,//开始的延迟
        typeSpeed: 120,//打字速度
        backSpeed: 80,//回退速度
        loop: true,//是否循环
        showCursor: false,//显示游标
        smartBackspace: true, //默认true
    });
});
function first() {
    var first = document.getElementById("first")
    first.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
    });
}
function second() {
    var second = document.getElementById("second")
    second.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
    });
}
function third() {
    var third = document.getElementById("third")
    third.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
    });
}
function fourth() {
    var fourth = document.getElementById("fourth")
    fourth.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
    });
}