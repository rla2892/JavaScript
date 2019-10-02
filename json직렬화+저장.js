var a1 = {a:1, b:'123'};
var a2 = JSON.stringify(a1);
var a3 = JSON.parse(a2);

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}
download(a2, 'json.txt', 'text/plain');
