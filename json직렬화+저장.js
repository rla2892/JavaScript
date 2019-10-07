var a1 = {a:1, b:'123'};
var a2 = JSON.stringify(a1);
var a3 = JSON.parse(a2);

// 다운로드/직렬화
function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}
download(a2, 'json.txt', 'text/plain');

// 업로드/역직렬화
onClickLoadMailGroup: function() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'text/plain';
    input.onchange = function (event) {
        methods._readJson(event.target.files[0]);
    };
    input.click();
},
_readJson: function(file) {
    var reader = new FileReader();
    reader.onload = function () {
        var json = JSON.parse(reader.result);
        console.log(json);
    };
    reader.readAsText(file, 'utf-8');
},
