//接收页面传过来的值
//RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")的意思是：
//以&开始或直接以name开始
//以&结束或直接结束
//name的值是由0到多个不是&的字符组成！！
//"i"是忽略大小写！
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    // alert(r);
    if (r != null) return unescape(decodeURI(r[2])); return null;
}
