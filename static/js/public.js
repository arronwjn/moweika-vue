var baseUrl = 'http://movie.kaituo.local/';

var addurl = ['Init/', 'Film/', 'Cinema/', 'Cinemaplan/', 'UCenter/'];


function openWin(winName, url) {
    api.openWin({
        name: winName,
        url: url
    });
}

function openView(fmName, fmUrl, winTitle, winName, winUrl, fmParams, winParams) {
    var options = {
        name: '',
        url: '',
        pageParam: {
            winTitle: '',
            win: {},
            fmName: '',
            fmUrl: '',
            fm: {}
        }
    };
    options.pageParam.fmName = fmName;
    options.pageParam.fmUrl = 'widget://html/' + fmUrl + '.html';
    if (winName) {
        options.name = winName;
    } else {
        options.name = fmName;
    }
    if (winUrl) {
        options.url = 'widget://html/' + winUrl + '.html';
    } else {
        options.url = 'widget://html/common/win/win.html';
    }
    options.pageParam.winTitle = winTitle || '';
    options.pageParam.winTitle = winTitle;
    if (winParams) {
        options.pageParam.win = winParams;
    }
    if (fmParams) {
        options.pageParam.fm = fmParams;
    }
    api.openWin(options);
}

function closeWindow(winName) {
    if (winName) {
        api.closeWin({
            name: winName,
            animation: "reveal"
        });
    } else {
        api.closeWin({
            animation: "reveal"
        });
    }
}

function getHeight(id) {
    return document.getElementById(id).offsetHeight;
}


function formatImg(imgUrl, allowCache) {
    if (imgUrl) {
        imgUrl = imgUrl.split(',')[0];
        if (imgUrl.indexOf('http') !== 0) {
            imgUrl = baseUrl + imgUrl;
        }
    } else {
        imgUrl = 'widget://assets/images/bg-my.png';
    }

    if (allowCache) {
        return imgUrl;
    } else {
        return imgUrl + '?' + Math.random();
    }
}

function cutImgurl(imgurl, num) {
    if (imgurl) {
        var arr = imgurl.split(',');
        if (num && arr.length > num) {
            arr = arr.slice(0, num);
        }
        return arr;
    }
}

function openFm(fmName, url) {
    var posY = $api.offset($api.dom("header")).h;
    var fmUrl = url ? url : fmName + "_fm.html";
    api.openFrame({
        name: fmName,
        url: fmUrl,
        rect: {
            x: 0,
            y: posY
        },
        bounces: true,
        hScrollBarEnabled: false,
        vScrollBarEnabled: false
    });
}

function toastMsg(msg) {
    api.toast({
        msg: msg,
        duration: 2000,
        location: "middle"
    });
}

// 双击退出
function exit_app() {
    var appId = api.appId;
    api.addEventListener({
        name: 'keyback'
    }, function (ret, err) {
        api.toast({
            msg: '再按一次返回键退出' + api.appName,
            duration: 2000,
            location: 'bottom'
        });
        api.addEventListener({
            name: 'keyback'
        }, function (ret, err) {
            api.closeWidget({
                id: appId,     //应用ID
                retData: {name: 'closeWidget'},
                silent: true
            });
        });
    });
}
function setStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getStorage(key) {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (e) {
        return localStorage.getItem(key);
    }
};
function fixStatusBar(t) {
    var e = api.systemType;
    if ("ios" == e) fixIos7Bar(t);
    else if ("android" == e) {
        var a = api.systemVersion;
        a = parseFloat(a), a >= 4.4 && (t.style.paddingTop = "1.36rem", t.style.height = "3.56rem", t.style.lineHeight = "2.2rem");
    }
}

function fixIos7Bar(t) {
    var e = api.systemType;
    if ("ios" == e) {
        var a = api.systemVersion,
            n = parseInt(a, 10),
            i = api.fullScreen,
            o = api.iOS7StatusBarAppearance;
        n >= 7 && !i && o && (t.style.paddingTop = "1rem", t.style.height = "3.2rem")
    }
}

function getToken() {
    if ($api.getStorage('userLoginToken')) {
        return $api.getStorage('userLoginToken')
    } else {
        return null;
    }
}
function setStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getStorage(key) {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (e) {
        return localStorage.getItem(key);
    }
};

function sendAjax(_this, post, num, callback) {
    Vue.http.options.emulateJSON = true;
    _this.$http.post(baseUrl + 'Api/' + addurl[num], post).then(function (res) {
        // alert(JSON.stringify(res));
        switch (res.data.code) {
            case 1:
                callback(res.data);
                break;
            case -2:
                console.log(res.data.message);
                break;
            case -4:
                console.log(res.data.message);
                break;
            case -6:
                console.log(res.data.message);
            case -58:
                break;
            case -74:
                callback(res.data);
                break;
            case -73:
                callback(res.data);
                break;
            default:
                console.log(res.data.message);
                break;
        }
    });
}

function loadEnd() {
    var ele = document.getElementById('loadStart');
    if (ele) {
        ele.style.opacity = 0;
        setTimeout(function () {
            ele.remove();
        }, 1000);
    }
}

//content转化为html
function charToHtml(str) {
    if (str) {
        str = str.replace(/&amp;/g, '&');
        str = str.replace(/&lt;/g, '<');
        str = str.replace(/&gt;/g, '>');
        str = str.replace(/&quot;/g, "'");
        str = str.replace(/&#039;/g, ' ');
    }
    return str;
}


