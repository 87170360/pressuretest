/*-------------------------- common ---------------------------------------------*/


function formatDate(time, format = 'YY-MM-DD hh:mm:ss') {
    var date = new Date(time);

    var year = date.getFullYear(),
        month = date.getMonth() + 1,//月份是从0开始的
        day = date.getDate(),
        hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();
    var preArr = Array.apply(null, Array(10)).map(function (elem, index) {
        return '0' + index;
    });

    var newTime = format.replace(/YY/g, year)
        .replace(/MM/g, preArr[month] || month)
        .replace(/DD/g, preArr[day] || day)
        .replace(/hh/g, preArr[hour] || hour)
        .replace(/mm/g, preArr[min] || min)
        .replace(/ss/g, preArr[sec] || sec);

    return newTime;
}

function getCookie(name) {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return "";
}

function getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    }
    ;
    return null;
}

function strToBinary(str) {
    var result = [];
    var list = str.split("");
    for (var i = 0; i < list.length; i++) {
        if (i != 0) {
            result.push(" ");
        }
        var item = list[i];
        var binaryStr = item.charCodeAt().toString(2);
        result.push(binaryStr);
    }
    return result.join("");
}

/*--------------------------index.html---------------------------------------------*/

let PLAYALL_STATUS = false;

function playUser(e,userName) {
    // alert("userName:" + userName)
    let inputRunCountName = 'input-run-count-'+userName;
    let runCount = parseInt($("input[name='"+inputRunCountName+"']").val());
    if (isNaN(runCount) || runCount == 0){ alert("请输入运行人数!"); return }

    let matchCountName = 'input-match-count-' + userName
    let matchCount = parseInt($("input[name='"+matchCountName+"']").val())
    if (isNaN(matchCount)){ alert("匹配次数请输入数数字！"); return }

    let status = false;
    if ($(e).hasClass("glyphicon-play")) {
        status = true;
        $(e).removeClass("glyphicon-play");
        $(e).addClass("glyphicon-stop");
    } else {
        $(e).removeClass("glyphicon-stop");
        $(e).addClass("glyphicon-play");
    }
    host = getCookie("serHost")
    if (host.trim(" ") === "") {
        alert("服务器地址不能为空。");
        return;
    }
    var jsonStr = JSON.stringify({
        account:userName,
        runCount:runCount,
        matchCount:matchCount,
        status:status,
        serverHost:getCookie("serHost"),
        playSpeed:parseInt(getCookie("playSpeed"))
    });

    $.post("/playUser", jsonStr, function (result) {
        result = JSON.parse(result);
        console.log(result.msg)
    });
}

function playAll(e) {
    let count = parseInt($(".input-count-allCount").val());

    if (isNaN(count) || count == 0) {
        alert("请输入人数！");
        return
    }

    let status = true;
    if (e.text == "PLAY ALL") {
        e.text = "STOP";

    } else {
        e.text = "PLAY ALL";
        status = false
    }
    host = getCookie("serHost")
    if (host.trim(" ") === "") {
        alert("服务器地址不能为空。");
        return;
    }
    var jsonStr = JSON.stringify({
        allCount: count,
        status: status,
        serverHost: getCookie("serHost"),
        playSpeed: parseInt(getCookie("playSpeed"))
    });
    $.post("/playAll", jsonStr, function (result) {
        result = JSON.parse(result);
        console.log(result.msg)
    });
}

function save(type) {
    let value = "";
    if (type == "serHost") {
        value = $(".input-serverHost").val();
    } else if (type == "playSpeed") {
        value = $(".input-playSpeed").val();
    } else {
        return
    }
    var expire = new Date((new Date()).getTime() + 365 * 24 * 60 * 60000);//有效期2小时
    expire = ";expires=" + expire.toGMTString();
    //用escape()函数进行编码，它能将一些特殊符号使用十六进制表示，例如空格将会编码为“20%”，
    //从而可以存储于cookie值中，而且使用此种方案还可以避免中文乱码的出现
    document.cookie = type + "=" + escape(value) + expire;
}

function loadCookies() {
    $(".input-serverHost").val(getCookie("serHost"));
    let playSpeed = getCookie("playSpeed");
    if (playSpeed == "") {
        playSpeed = 1;
        document.cookie = "playSpeed=" + playSpeed;
    }
    $(".input-playSpeed").val(playSpeed);
}

function delUser(account) {
    var msg = "您真的确定要删除吗？\n\n请确认！";
    if (confirm(msg) == true) {
        $.post("/delAccount?name=" + account, null, function (result) {
            result = JSON.parse(result);
            console.log(result.msg)
        });
    }
}

function loadUserList() {
    $.post("/userList", {}, function (result) {
        result = JSON.parse(result);
        let _list = result.data;
        if (result.data != null && _list.length > 0) {

            let strHtml = "", allStatus = false;

            for (let i = 0; i < _list.length; i++) {

                let playUserBtnIcon = "glyphicon-play";
                if (_list[i].PlayStatus) {
                    playUserBtnIcon = "glyphicon-stop";
                    allStatus = true
                }
                // 存在修改
                if ($("#tr-" + _list[i].Account).length > 0) {
                    $("#td-msgBtn-" + _list[i].Account).removeClass("glyphicon-stop").removeClass("glyphicon-play").addClass(playUserBtnIcon);
                    $("#td-msgCount-" + _list[i].Account).text(_list[i].MsgList.length);
                } else {    // 不存在添加

                    strHtml +=    `<tr id="tr-`+_list[i].Account+`">
                                    <td ><a class="btn btn-primary btn-sm glyphicon glyphicon-search" href="/user?account=`+_list[i].Account+ `" role="button" title="查看"></a>
                                        <a class="btn btn-primary btn-sm glyphicon `+playUserBtnIcon+`" id="td-msgBtn-`+_list[i].Account+`" onclick="playUser(this,'`+ _list[i].Account +`')" href="#" role="button" title="执行"></a>                                         
                                    </td>
                                    <td><input type="text" class="form-control" name="input-run-count-`+_list[i].Account+`" placeholder="人数" style="width:60px;display:unset;" aria-describedby="basic-addon1" value="1"></td>
                                    <td><input type="text" class="form-control" name="input-match-count-`+ _list[i].Account +`" placeholder="战斗匹配次数" style="width:60px;display:unset;" aria-describedby="basic-addon1" value="0"></td>
                                    <td>`+_list[i].Account+ `</td>
                                    <td id="td-msgCount-`+_list[i].Account+`">`+_list[i].MsgList.length+ `</td>
                                    <td><a class="btn btn-sm glyphicon btn-default glyphicon-remove " href="#" onclick="delUser('`+_list[i].Account+ `')" role="button" title="移除"></a></td>
                                </tr>`
                }
            }
            //theadTemp
            if (strHtml.length > 0) {
                $(".table").append(strHtml);
            }

            PLAYALL_STATUS = allStatus;
        }

        // 检查刪除不存在的
        let row = $(".table tbody tr");
        for (let i = 0; i < row.length; i++) {
            let id = $(row[i]).attr("id");

            id = id.substring(3);
            if (_list.findIndex(item => item.Account == id) == -1) {
                $(row[i]).remove();
            }
        }

        if (PLAYALL_STATUS) {
            $("#buttonPlayAll").text("STOP");
        } else {
            $("#buttonPlayAll").text("PLAY ALL");
        }
    });
}


/*--------------------------user.html---------------------------------------------*/

let msgTypeAllStatue = false;
let msgTypeCacheList = [];
let msgType_list = null;
let tempFilePath = "";
let tempPlayStatus = false;

// 批量上传pb文件
function uploadFile(obj, needLoadFiles) {
    let files = obj.files;
    let formData = new FormData();
    for (let i = 0; i < files.length; i++) {
        formData = new FormData();
        formData.append("filename", files[i]);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/uploadPb");
        xhr.overrideMimeType('multipart/form-data; charset=x-user-defined-binary');
        xhr.enctype = "multipart/form-data";
        xhr.send(formData);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var resultObj = JSON.parse(xhr.responseText);
                if (resultObj.code == 1 && needLoadFiles) {
                    //tempFilePath = resultObj.msg;
                    //$("#uploadPb").val(tempFilePath);
                    //loadContent();
                    loadChangePbList()
                } else {
                    //tempFilePath = "";
                }
                console.info("上传操作完成，返回结果：" + resultObj.msg)
            }
        }
    }
    alert("上传操作完成");
}

// 上传 MsgType.lua 文件
function uploadMsgTypeFile(obj) {
    let files = obj.files;
    let formData = new FormData();
    for (let i = 0; i < files.length; i++) {
        formData.append("filename", files[i]);
    }
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/uploadLua");
    xhr.overrideMimeType('text/plain; charset=x-user-defined-binary');
    xhr.send(formData);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var resultObj = JSON.parse(xhr.responseText);
            if (resultObj.code == 1) {

            } else {
                tempFilePath = "";
            }
            alert("上传操作完成，返回结果：" + resultObj.msg)
        }
    }
}


function CheckAll(e) {
    if ($(e).hasClass("btn-default")) {
        $(e).removeClass("btn-default").addClass("btn-success");
        let list = $(".btn-row");
        for (let i = 0; i < list.length; i++) {
            $(list[i]).removeClass("glyphicon-unchecked").addClass("glyphicon-ok").removeClass("btn-default").addClass("btn-success");
        }
        msgTypeAllStatue = true;
        if (msgType_list != null) {
            list = [];
            for (let i = 0; i < msgType_list.length; i++) {
                list.push(parseInt(msgType_list[i].Id))
            }
            msgTypeCacheList = list;
        }
    } else {
        $(e).removeClass("btn-success").addClass("btn-default");
        let list = $(".btn-row");
        for (let i = 0; i < list.length; i++) {
            $(list[i]).removeClass("glyphicon-ok").addClass("glyphicon-unchecked").removeClass("btn-success").addClass("btn-default");
        }
        msgTypeAllStatue = false;
        msgTypeCacheList = [];
    }
}

function CheckItem(e, msgType) {
    msgType = parseInt(msgType);
    if ($(e).hasClass("glyphicon-ok")) {
        $(e).removeClass("glyphicon-ok").addClass("glyphicon-unchecked");
        $(e).removeClass("btn-success").addClass("btn-default");
        delete msgTypeCacheList[msgTypeCacheList.indexOf(msgType)]
    } else {
        $(e).removeClass("glyphicon-unchecked").addClass("glyphicon-ok");
        $(e).removeClass("btn-default").addClass("btn-success");
        msgTypeCacheList.push(msgType)
    }
}


function playAccountMsgType(e) {
    let btnStatus = $(e).hasClass("glyphicon-play")
    if (btnStatus && msgTypeCacheList.length == 0) {
        alert("请选择右侧的类型")
        return
    }

    let count = parseInt($(".form-control").val());
    if (isNaN(count) || count == 0) {
        alert("请输入人数");
        return
    }

    let userName = getQueryString("account");
    var jsonStr = JSON.stringify({
        account: userName,
        count: count,
        msgTypeIds: msgTypeCacheList,
        status: true,
        serverHost: getCookie("serHost"),
        playSpeed: parseInt(getCookie("playSpeed"))
    });

    $.post("/playMsgType", jsonStr, function (result) {
        result = JSON.parse(result);
        console.log(result.msg)
    });
}

function stop(e) {
    if (!tempPlayStatus) {
        alert("无任务执行！");
        return;
    }
    var jsonStr = JSON.stringify({
        account: getQueryString("account"),
        status: false
    });
    $.post("/playUser", jsonStr, function (result) {
        result = JSON.parse(result);
        console.log(result.msg)
    });

}

function submit() {
    if ($("#input-err-msg").text().length > 0) {
        alert("数据解析异常，禁止提交！")
        return;
    }
    let jsonObject = {
        id: parseInt($("#msgId").val()),
        account: getQueryString("account"),
        url: $("#playUrl").val(),
        time: parseInt($("#playTime").val()),
        content: $("#playContent").val(),
        structName: $("#structName").text(),
    };
    if (jsonObject.url.trim(" ") == "") {
        alert("MsgType 是必填项！")
        return
    }
    sendBufferData(jsonObject)
}

function loadUserMsgList() {
    $.get("/userMsgList?account=" + getQueryString("account"), {}, function (result) {
        result = JSON.parse(result);
        let _list = result.data.List;
        msgType_list = _list;
        if (result.data != null && _list.length > 0) {
            let strHtml = "";
            for (let i = 0; i < _list.length; i++) {

                let classStyle = "btn-default glyphicon-unchecked";
                if (msgTypeCacheList.indexOf(_list[i].Id) >= 0) {
                    classStyle = "btn-success glyphicon-ok";
                }
                let jsonString = JSON.stringify(_list[i]);
                //let Time =  formatDate(_list[i].Time)
                strHtml += `<tr>
                        <td><a class="btn btn-sm glyphicon btn-row ` + classStyle + ` " href="javascript:void(0);" onclick="CheckItem(this,'` + _list[i].Id + `')" role="button" style="勾选"></a></td>
                        <td>` + _list[i].MsgType + `</td>
                        <td class="tdTime">` + _list[i].Time + `</td>
                        <td>` + _list[i].Tip + `</td>
                        <td>` + _list[i].StructName + `</td>
                        <td>` + _list[i].PbFile + `</td>
                        <td>
                           <a class="btn btn-sm glyphicon btn-default glyphicon-edit " href="#" data-toggle="modal" data-target="#myModal" onclick=\'EditMsgType(` + jsonString + `)\' role="button" title="编辑"></a>
                           <a class="btn btn-sm glyphicon btn-default glyphicon-remove " href="#" onclick="delMsgType(` + _list[i].Id + `)" role="button" title="移除"></a>
                        </td>
                    </tr>`
            }

            let theadTemp = $(".theadTemp").html();
            if (msgTypeAllStatue) {
                theadTemp = theadTemp.replace("btn-default", "btn-success");
            }
            $(".table").html(theadTemp + strHtml);
        }

        //console.info(result.data.Playing)
        if (!result.data.Playing) {
            //removeClass("btn-primary").addClass("btn-default");
            $("#btnSTOP").css("display", "none");
            $("#btnPLAY").css("display", "");
        } else {
            $("#btnPLAY").css("display", "none");
            $("#btnSTOP").css("display", "");
            //$("#btnSTOP").removeClass("btn-default").addClass("btn-primary");
        }
        tempPlayStatus = result.data.Playing;
    });
}

function sendBufferData(jsonObject) {
    let pbFile = tempFilePath;
    protobuf.load(pbFile, function (err, root) {
        if (err) {
            alert(err);
            return
        }
        var buffer = null;
        // Exemplary payload
        if (jsonObject.content.length > 0 && jsonObject.structName.length > 0) {
            // Obtain a message type
            var AwesomeMessage = root.lookupType("protobuf." + jsonObject.structName);
            jsonObject.content = JSON.parse(jsonObject.content);
            // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
            var errMsg = AwesomeMessage.verify(jsonObject.content);

            if (errMsg) {
                alert(errMsg);
                return
            }

            // Create a new message
            var message = AwesomeMessage.create(jsonObject.content);

            // Encode a message to an Uint8Array (browser) or Buffer (node)
            buffer = AwesomeMessage.encode(message).finish();
        }

        var xhr = new XMLHttpRequest;
        xhr.open("POST", "/editMsgTypePB");
        xhr.setRequestHeader("msgId", jsonObject.id);
        xhr.setRequestHeader("msgType", jsonObject.url);
        xhr.setRequestHeader("structName", jsonObject.structName);
        xhr.setRequestHeader("pbFileName", pbFile);
        xhr.setRequestHeader("time", jsonObject.time);
        xhr.setRequestHeader("account", getQueryString("account"));

        xhr.send(buffer);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var resultObj = JSON.parse(xhr.responseText);
                alert("操作完成，返回结果：" + resultObj.msg);

                $("#closeModal").click();
            }
        }
    });
}

function delMsgType(id) {
    var msg = "您真的确定要删除吗？\n\n请确认！";
    if (confirm(msg) == true) {
        let jsonObject = {
            account: getQueryString("account"),
            msgId: parseInt(id),
        };
        $.post("/delMsgType", JSON.stringify(jsonObject), function (result) {
            result = JSON.parse(result);
            if (result.code == 1) {
                alert(result.data)
            } else {
                // alert(result.msg)
            }
        })
    }
}

function initBufferData(obj) {
    $("#playContent").text("");
    $("#input-err-msg").text("");
    if (obj.PbFile == "" || obj.StructName == "" || obj.DataStr == "") {
        return
    }
    protobuf.load(obj.PbFile, function (err, root) {
        if (err) {
            console.error(err)
            return
        }
        if (obj.StructName == "") {
            console.info("not structName");
            return;
        }
        try {
            // Obtain a message type
            var AwesomeMessage = root.lookupType("protobuf." + obj.StructName);
            let data = stringToUint8Array(obj.DataStr);

            let message = AwesomeMessage.decode(data);

            let payload = JSON.stringify(message);

            console.log(payload);
            $("#playContent").text(payload);
        } catch (e) {
            console.error(e);
            $("#input-err-msg").text("数据解析错误,请确认【pbFileName】【structName】")
        }
    });

}


function stringToUint8Array(str) {
    var arr = [];
    for (var i = 0, j = str.length; i < j; ++i) {
        arr.push(str.charCodeAt(i));
    }
    let data = Uint8Array.from(arr)
    return data
}

function openModal() {
    clearModal();
    $("#playTime").val(30);
    $("#dropdown-menu-names").html("");
    loadChangePbList();
}

function EditMsgType(e) {
    clearModal();
    $("#msgId").val(e.Id);
    $("#playUrl").val(e.MsgType);
    $("#playTime").val(e.Time);
    $("#structName").text(e.StructName);
    $("#uploadPb").text(e.PbFile);
    $("#msgData").val(e.DataStr);

    loadChangePbList();
    loadChangePbName(e.PbFile, e.StructName);
    initBufferData(e);
    tempFilePath = e.PbFile;
}

function loadContent() {
    let obj = {
        StructName: $("#structName").text(),
        PbFile: $("#uploadPb").text(),
        DataStr: $("#msgData").val()
    };
    initBufferData(obj)
}

function clearModal() {
    $("#msgId").val("");
    $("#playUrl").val("");
    $("#playTime").val("");
    $("#structName").text("");
    $("#uploadPb").text("");
    $("#msgData").val("");
    $("#dropdown-menu-names").html("");
}


function loadChangePbList() {
    $.get("/pbList", {}, function (result) {
        result = JSON.parse(result);
        if (result.code == 1) {
            let txt = "";
            for (let i = 0; i < result.data.length; i++) {
                txt += `<li><a href="#" onclick="loadChangePbName('` + result.data[i] + `','')">` + result.data[i] + `</a></li>`
            }
            $("#dropdown-menu-files").html(txt);

        } else {
            alert(result.msg)
        }
    })
}

//
function loadChangePbName(file, defaultName) {
    $("#uploadPb").text(file);
    if (defaultName.length == 0) {
        $("#playContent").text("");
    }
    tempFilePath = file;

    if (file == "") {
        return
    }
    $.get("/pbNameList?file=" + file, {}, function (result) {
        result = JSON.parse(result);
        if (result.code == 1) {
            let txt = "";
            for (let i = 0; i < result.data.length; i++) {
                txt += `<li><a href="#" onclick="changePbName('` + result.data[i] + `')">` + result.data[i] + `</a></li>`
            }
            $("#dropdown-menu-names").html(txt);
            $("#structName").text(defaultName);
        } else {
            alert(result.msg)
        }
    })
}

function changePbName(name) {
    $("#structName").text(name);
    loadContent();
}