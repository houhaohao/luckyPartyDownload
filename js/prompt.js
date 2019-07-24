window.addEventListener('DOMContentLoaded', function () {
    if (!((/Android|webOS|ipad|iPhone|BlackBerry|IEMobile|ucweb|Opera Mini/i).test(navigator.userAgent))) {
        document.documentElement.innerHTML = "<div style='font-size:14px;'><p>请使用手机打开此页面哦~</p></div>";
    }
});
