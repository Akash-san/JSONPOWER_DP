
let connToken = " " //Add your token
let stdDBName = "STUDENT-TABLE";
let stdRelationName = "SCHOOL-DB";
let jpdbBaseUrl = "http://api.login2explore.com:5577"
let jpdbIML = "/api/iml"
let jpdbIRL = "/api/irl"



$("#rollNo").focus();
function validateAndGetFormData() {
    var stdRollno = $("#rollNo").val();
    if (stdRollno === "") {
        alert("Student Roll-No Required Value");
        $("#rollNo").focus();
        return "";
    }
    var stdName = $("#fullName").val();
    if (stdName === "") {
        alert("Student Name is Required Value");
        $("#fullName").focus();
        return "";
    }
    var stdClass = $("#class").val();
    if (stdClass === "") {
        alert("Student class is Required Value");
        $("#class").focus();
        return "";
    }
    var stdDob = $("#birthDate").val();
    if (stdDob === "") {
        alert("Student DOB Required Value");
        $("#birthDate").focus();
        return "";
    }
    var stdAddress = $("#address").val();
    if (stdAddress === "") {
        alert("Student Address is Required Value");
        $("#address").focus();
        return "";
    }
    var stdEnroll = $("#enrollmentDate").val();
    if (stdEnroll === "") {
        alert("Student Enrollment-Date is Required Value");
        $("#enrollmentDate").focus();
        return "";
    }

    var jsonStrObj = {
        rollNo: stdRollno,
        fullName: stdName,
        class: stdClass,
        birthDate: stdDob,
        address: stdAddress,
        enrollmentDate: stdEnroll,
    };
    return JSON.stringify(jsonStrObj);
}

function saveRecNo2LS(jsonObj) {
    let lvData = JSON.parse(jsonObj.data)
    localStorage.setItem("recNo", lvData.rec_no)
}

function getStdIdAsJsonObj() {
    let stdNo = $("#rollNo").val()
    var jsonStr = {
        rollNo: stdNo
    }
    return JSON.stringify(jsonStr)
}

function fillData(jsonObj) {
    saveRecNo2LS(jsonObj);
    let record = JSON.parse(jsonObj.data).record
    // $("#rollNo").val("record.rollNo")
    $("#fullName").val(record.fullName);
    $("#class").val(record.class);
    $("#birthDate").val(record.birthDate)
    $("#address").val(record.address);
    $("#enrollmentDate").val(record.enrollmentDate);
}

function getRollNo() {
    let stdIdJsonObj = getStdIdAsJsonObj()
    let getReq = createGET_BY_KEYRequest(connToken, stdDBName, stdRelationName, stdIdJsonObj)
    jQuery.ajaxSetup({ async: false });
    var resJsonObj = executeCommandAtGivenBaseUrl(getReq,
        jpdbBaseUrl, jpdbIRL);
    // alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({ async: true });
    console.log("Response:", resJsonObj);

    if (resJsonObj.status === 400) {
        $("#saveButton").prop("disabled", false)
        $("#resetButton").prop("disabled", false)
        $("#fullName").focus()
    } else if (resJsonObj.status === 200) {
        $("#rollNo").prop("disabled", true);
        fillData(resJsonObj)
        $("#updateButton").prop("disabled", false)
        $("#resetButton").prop("disabled", false)
        $("#fullName").focus()
    }
}
/////////////////////////////////////////////METHOD-1////////////////////////////////////
// This method is used to create PUT Json request.
// function createPUTRequest(connToken, jsonObj, dbName, relName) {
//     var putRequest = "{\n"
//         + "\"token\" : \""
//         + connToken
//         + "\","
//         + "\"dbName\": \""
//         + dbName
//         + "\",\n" + "\"cmd\" : \"PUT\",\n"
//         + "\"rel\" : \""
//         + relName + "\","
//         + "\"jsonStr\": \n"
//         + jsonObj
//         + "\n"
//         + "}";
//     return putRequest;
// }
// function executeCommand(reqString, dbBaseUrl, apiEndPointUrl) {
//     var url = dbBaseUrl + apiEndPointUrl;
//     var jsonObj;
//     $.post(url, reqString, function (result) {
//         jsonObj = JSON.parse(result);
//     }).fail(function (result) {
//         var dataJsonObj = result.responseText;
//         jsonObj = JSON.parse(dataJsonObj);
//     });
//     return jsonObj;
// }
/////////////////////////////////////////////METHOD-2////////////////////////////////////

/* <script src="https://login2explore.com/jpdb/resources/js/0.0.4/jpdb-commons.js"></script> */

// USing this common.js it contain all database creation it should inserted in head tag in html

////////////////////////////////////////////////////////////////////////////////////////

function resetForm() {
    $("#rollNo").val("")
    $("#fullName").val("");
    $("#class").val("");
    $("#birthDate").val("")
    $("#address").val("");
    $("#enrollmentDate").val("");
    $("#rollNo").prop("disabled", false)
    $("#fullName").prop("disabled", true)
    $("#class").prop("disabled", true)
    $("#birthDate").prop("disabled", true)
    $("#address").prop("disabled", true)
    $("#enrollmentDate").prop("disabled", true)
    $("#rollNo").focus();
}
function saveData() {
    var jsonStrObj = validateAndGetFormData();
    if (jsonStrObj === "") {
        return '';
    }
    var putRequest = createPUTRequest(connToken, jsonStrObj, stdDBName, stdRelationName);
    // alert(putRequest);
    jQuery.ajaxSetup({ async: false });
    var resJsonObj = executeCommandAtGivenBaseUrl(putRequest, jpdbBaseUrl, jpdbIML);
    alert(JSON.stringify(resJsonObj));
    jQuery.ajaxSetup({ async: true });
    resetForm();
    $("#rollNo").focus();
}
function updateStudent() {
    $("#updateButton").prop("disabled", true);
    jsonChg = validateAndGetFormData()

    var updateRequest = createUPDATERecordRequest(connToken, jsonChg, stdDBName, stdRelationName, localStorage.getItem("recNo"))
    jQuery.ajaxSetup({ async: false });
    var resJsonObj = executeCommandAtGivenBaseUrl(updateRequest, jpdbBaseUrl, jpdbIML);
    jQuery.ajaxSetup({ async: true });
    console.log(resJsonObj)
    resetForm()
    $("#rollNo").focus();
}
