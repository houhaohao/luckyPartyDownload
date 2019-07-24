var LANGUAGE_Index = "en"; //标识语言  en英文 zh中文 
var language = GetQueryString("language")
if ((language != null && language == '1') || language == 'zh') {
    LANGUAGE_Index = "zh"
} else {
    LANGUAGE_Index = "en"
}

// loadProperties(LANGUAGE_Index); //加载语言
//替换图片
function updetiImage(obj) {
    for (i = 0; i < obj.length; i++) {
        $(obj[i].element).css({ 'background': 'url(' + obj[i].url + ')  no-repeat', "background-size": "100% 100%" })
    }
}
//替换图片
function updetiImageSrc(obj) {
    for (i = 0; i < obj.length; i++) {
        $(obj[i].element).attr('src', obj[i].url)
    }
}

function loadProperties(type) {
    jQuery.i18n.properties({
        name: 'strings', // 资源文件名称  
      	path: 'https://houhaohao.github.io/luckyParty/languages/', // 资源文件所在目录路径  
        mode: 'map', // 模式：变量或 Map  
        language: type, // 对应的语言  
        cache: false,
        encoding: 'UTF-8',
        callback: function() { // 回调方法  
            var obj = $.i18n.map;
            var insertEle = $(".i18n"),
                errArr = [];
            for (var i = 0, l = insertEle.length; i < l; i++) {
                var item = $(insertEle[i]);
                var text = obj[item.attr('data-title')];
                if (!text) {
                    errArr.push((item.attr('data-title') + " not found"));
                } else {
                    item.html(text);
                }

            }
        }
    });
}

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
};