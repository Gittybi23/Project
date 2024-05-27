
var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
function Color(){
    var x = $("#X").val();
    var y = $("#Y").val();
    var height = $("#HEIGHT").val();
    var width = $("#WIDTH").val();
if($("#fill").is(':checked')){
    c.fillStyle = $("#SelectColor").val();
    c.fillRect(x,y,width,height)
    
}
if($("#stroke").is(':checked')){
    c.strokeStyle = $("#SelectColor").val();
    c.strokeRect(x,y,width,height)
    
}
}
function DrawRectangle(){
    Color();
    var x = $("#X").val();
    var y = $("#Y").val();
    var height = $("#HEIGHT").val();
    var width = $("#WIDTH").val();
    
    c.beginPath();
    c.strokeRect(x, y, width, height)
    c.stroke();
}
function ClearRectangle(){
    c.beginPath();
    c.clearRect(0,0,700,500);
}
