//判断是否是微信
function is_weixin() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
}
var ios = '';
var ad = '';
var iosPrefix = 'itms-services://?action=download-manifest&url=';
// var hostUrl = "http://api.bcos.one";
var hostUrl = "http://luckyparty.minervip.io"
downFun()


function downFun() {
    // $.get(hostUrl + '/api/v1/version/getAppVersion?custom=LuckyParty', function(data) {
        // if (data.code == 200) {
            // ios = iosPrefix + data.data.ios.downloadUrl;
            // ad = data.data.android.downloadUrl;
            ios ='itms-services://?action=download-manifest&amp;url=https://luckyparty.oss-cn-beijing.aliyuncs.com/public/download/luckyparty/v2.0.4/manifest.plist';
            ad ='http://luckyparty.ufile.ucloud.com.cn/apk/LuckyParty_V2.0.3.apk';
            $('.js-ios').attr("href", ios)
                // $('.js-ad').attr("href",ad)
            $('.pcjs-ad').attr("href", ad)
        // }
    // }, "json")
}


//点击andriod开启遮罩,引导用户在浏览器打开
$('.js-ad').click(function() {
    var isWeixin = is_weixin();
    var winHeight = typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight;
    var weixinTip = $('<div id="weixinTip"><p><img src="/img/top_1.png" alt=""/>点击右上角，在浏览器打开</p></div>');

    if (isWeixin) {
        $("body").append(weixinTip);
    } else {
        window.location.href = ad;
    }
    $("#weixinTip").click(function() {
        $("#weixinTip").remove();
    });

})