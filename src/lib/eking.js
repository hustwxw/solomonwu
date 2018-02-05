var returnObj = {};

//引入外部库
require('./prototype.js');
var _ = require('lodash');
var axios = require('axios');


//参数处理库
returnObj.param = (function() {
    /**
     * 用于URL等参数解析
     * @for hna.param
     * @method hna.param.param
     * @param sValPairs {String} url表达式
     * @param sElemSep {String} 参数分隔符
     * @param sPairSep {String} 复制分隔符
     * @example 
     	var p = new hna.param.param("a=1&b=2","&", "=");
     	输出p实际上就是{a:1,b:2}，所以p['a']就是1，p['b']就是2
     */
    var _param = function(sValPairs, sElemSep, sPairSep) {
        if (sValPairs) {
            var aElem = sValPairs.toString().split(sElemSep);
            for (var i = 0; i < aElem.length; ++i) {
                var aPair = aElem[i].split(sPairSep);
                var temp = (aPair.length > 1) && (this[aPair[0]] = unescape(aPair[1]));
            }
        }
    };

    /**
     * 获取一个表达式串中的参数
     * @for hna.param
     * @method hna.param.getParam
     * @param sValPairs {String} 表达式 例如"a=1&b=2"
     * @param sName {String} 要获取的参数名 "a"
     * @param sElemSep {String} 参数分割符 "&"
     * @param sPairSep {String} 赋值的分隔符 "="
     * @return {String} 参数值
     * @example 例如 var a = hna.param.getParam("a=1&b=2", "a", "&", "=");
     */
    var _getParam = function(sValPairs, sName, sElemSep, sPairSep) {
        var xParam = new _param(sValPairs, sElemSep, sPairSep);
        return xParam[sName] ? xParam[sName] : "";
    };

    /**
     * 设置一段参数
     * @for hna.param
     * @method hna.pram.setParam 
     * @param sValPairs {String} 原有的表达式 例如"a=1"
     * @param sName {String} 新加入的参数名 
     * @param sValue {String} 新参数的值
     * @return {String} 新的表达式"a=1&b=2"
     * @example 例如 var sParam = hna.param.setParam("a=1", "b", "2");
     */
    var _setParam = function(sValPairs, sName, sValue) {
        sValPairs = sValPairs.toString();
        sName = sName.toString();
        sValue = sValue.toString().escUrl();
        var r = new RegExp("(^|\\W)" + sName + "=[^&]*", "g");
        return (sValPairs.match(r)) ? sValPairs.replace(r, "$1" + sName + "=" + sValue) : sValPairs + (sValPairs ? "&" : "") + sName + "=" + sValue;
    };

    /**
     * 返回当前url的参数
     * @for hna.param
     * @method hna.pram.locationSearch 
     * @example 例如 var p = hna.param.locationSearch();
     */
    var locationSearch = function() {

        return new _param(location.search.substr(1), '&', '=');

    };

    /**
     * 返回当前url的hash
     * @for hna.param
     * @method hna.pram.locationHash 
     * @example 例如 var p = hna.param.locationHash();
     */
    var locationHash = function() {

        return new _param(location.hash.substr(1), '&', '=');

    };

    /**
     * 返回当前url的search和hash所有参数
     * @for hna.param
     * @method hna.pram.location 
     * @param search {Boolean} 如果为true，那么当hash和search有相同参数的时候以search为准，否则以hash为准。默认以search为准。
     * @example 
     	例如 http://www.a.com?ticket=1&t=2&debug=15#hash=1&t=232
     	
     	var p = hna.param.location(true);
     	p就是Object {hash: "1", t: "2", ticket: "1", debug: "15"}

     	var p = hna.param.location(false);
     	p就是Object {ticket: "1", t: "232", debug: "15", hash: "1"}
	
    	var p = hna.param.location();//默认等同于传递参数true
     	p就是Object {ticket: "1", t: "2", debug: "15", hash: "1"}
     */
    var _location = function(search) {

        if (typeof search === "undefined") {
            search = true;
        }

        if (!_.isBoolean(search)) {
            search = true;
        }

        var searchObj = locationSearch();
        var hashObj = locationHash()

        return (search === true) ? _.assign(hashObj, searchObj) : _.assign(searchObj, hashObj);

    }

    return {
        param: _param,
        getParam: _getParam,
        setParam: _setParam,
        locationSearch: locationSearch,
        locationHash: locationHash,
        location: _location
    }

})();

//网络库
returnObj.net = (function() {

    var config = {
        //设置超时时间
        timeout: 30000,
        //返回数据类型
        responseType: 'json',
        
        transformRequest: [function(data) {
            // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等
            return data;
        }],

        transformResponse: [function(data) {
            // 这里提前处理返回的数据
            return data;
        }],
    };

    var get = function(url, data, success, fail) {        

        var temp = [];
        for (var p in data) {
            temp.push([p, data[p]].join('='))
        }

        url = url + '?' + temp.join('&');
        axios.defaults.headers.post['Content-Type'] = 'application/json';

        axios.get(url, {}, config).then(function(res) {
            success && success(res.data, res.status, res.request);
        }).catch(function(err) {
            fail && fail(err);
        });
    }

    var post = function(url, data, success, fail) {
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

        axios.post(url, data, config).then(function(res) {
            success && success(res.data, res.status, res.request);
        }).catch(function(err) {
            fail && fail(err);
        });
    }


    return {
        get: get,
        post: post
    };

})();

//cookie类
returnObj.cookie = {
    /**
     * 查询可用窗口
     * @for eking.cookie
     * @method eking.cookie.findWindow 
     * @param sDomain {String} 域名
     * @param {Window} oWin 窗口对象
     * @return {Window}
     */
    findWindow: function(sDomain, oWin)
    {
        if (!oWin)
        {
            if (window.location.hostname.indexOf(sDomain) >= 0)
            {
                return window;
            }
            return arguments.callee.apply(this, [sDomain, top]);
        }
        try
        {
            if (oWin.location.hostname.indexOf(sDomain) >= 0)
            {
                return oWin;
            }
        }
        catch (e)
        {
        }
        for (var i = 0; i < oWin.frames.length; ++i)
        {
            var oFind = arguments.callee.apply(this, [sDomain, oWin.frames[i]]);
            if (oFind)
            {
                return oFind;
            }
        }
        return null;
    },
    /**
     * 设置cookie
     * @for eking.cookie
     * @method eking.cookie.set 
     * @param sName {String} cookie的key
     * @param sValue {String} cookie的value
     * @param nExpireSec {Number} cookie的过期时间，单位是秒
     * @param sDomain {String} cookie的域名
     * @param sPath {String} cookie的路径
     * @return {Boolean}
     */
    set: function(sName, sValue, nExpireSec, sDomain, sPath)
    {
        sDomain = sDomain;
        sPath = sPath || "/";
        var sCookie = sName + "=" + escape(sValue) + ";";

        if ((document.cookie.length + sCookie.length) >= 4096)
        {
            return false;
        }

        if (nExpireSec)
        {
            var oDate = new Date();
            oDate.setTime(oDate.getTime() + parseInt(nExpireSec) * 1000);
            sCookie += "expires=" + oDate.toUTCString() + ";";
        }
        if (sDomain)
        {
            sCookie += "domain=" + sDomain + ";";
        }
        if (sPath)
        {
            sCookie += "path=" + sPath + ";";
        }
        var oWin = this.findWindow(sDomain);
        if (!oWin)
        {
            return false;
        }
        try
        {
            oWin.document.cookie = sCookie;
        }
        catch (e)
        {
            return false;
        }
        return true;
    },
    /**
     * 获取cookie
     * @for eking.cookie
     * @method eking.cookie.get 
     * @param sName {String} cookie的key
     * @param sDomain {String} cookie的域名
     * @return {String}
     */
    get: function(sName, sDomain)
    {
        sDomain = sDomain;
        var oWin = sDomain ? (this.findWindow(sDomain) || window) : window;
        return returnObj.param.getParam(oWin.document.cookie, sName, "; ", "=");
    }
};

//暴露返回的变量
for (var p in returnObj) {
    exports[p] = returnObj[p];
}