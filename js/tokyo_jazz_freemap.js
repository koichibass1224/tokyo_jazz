//ドローアプリ：
let canvas_mouse_event = false; //スイッチ(true=線を引く / false=線は引かない）
let oldX = 0; //１つ前の座標を代入する為の変数
let oldY = 0; //１つ前の座標を代入する為の変数
let bold_line = 3; //ラインの太さを指定
let color = "#000000"; //ラインの色を指定

const can =$("#drawarea")[0];
const ctx = can.getContext("2d");

//①押したイベント
//canでもidでも良い。変数ですでに定義している。
$(can).on("mousedown", function(e){//eを取得する
 oldY = e.offsetY;//値は座標oldX/Yで取得=eしている。
 oldX = e.offsetX;//console.log(e);してみても良い。必ずoffset（canvas内）から取得する。
 canvas_mouse_event = true;
});

//②線を引いていくイベント
$(can).on("mousemove",function(e){
//console.log(e.offsetX); //mouseが動くたびに取得している
if (canvas_mouse_event == true){//mousedownした後にtrueするよう指示
const px = e.offsetX;
const py = e.offsetY;
ctx.strokeStyle = color ;//色
ctx.lineWidth = bold_line;//太さ
ctx.beginPath();
ctx.lineJoin= "round";//太くしたときにギザギザにならない為。
ctx.lineCan= "round";
ctx.moveTo(oldX,oldY);
ctx.lineTo(px,py);//線を引く場所が決まった
ctx.stroke();
oldX = px;
oldY = py;//ここ大事。開始地点が毎回変わる
}
});

//③マウスアップでdrawを終える：
$(can).on("mouseup",function(){
canvas_mouse_event = false;
});

//④clearするイベント：
/*$("#clear_btn").on("click",function(){
ctx.beginPath();
ctx.clearRect(0,0,can.width, can.height);//500,500でも良いが、can=#idのwidth/heightのマックス幅で指定してくれる！
});*/


//④clearのイベント：
$("#clear_btn").on('click', function () {
  localStorage.clear('save');
  alert('画像記録を全てリセットしました！');
});

//⑤saveのイベント：
$("#save_btn").on("click",function(){
//var canvas = document.createElement("drawarea");　違う
var canvas = document.getElementById("drawarea");
 //var base64 = canvas.toDataURL();　違う
var url = canvas.toDataURL();
//localStorage.setItem("save",url);　違う
//window.localStorage.setItem("save", base64);　違う
window.localStorage.setItem("save", url);
console.log(url);
  });

//⑥loadのイベント：
function setBase64(){
  //2Dコンテキストのオブジェクトを生成する
  var cvs = document.getElementById('drawarea');
  var ctx= cvs.getContext('2d');

  //画像オブジェクトを生成
  var img = new Image();
  var url = localStorage.getItem("save");
  //console.log(url);　確認用
  img.src = url;
  //画像をcanvasに設定
  img.onload = function(){
  ctx.drawImage(img, 0, 0, 1200, 600); //canvasサイズに合わせる！
  }
}



//文章name _ saveイベント
$(function(){
  if(localStorage.getItem('name')){
  $('#name').val(localStorage.getItem('name'));}

  $('#name_save').click(function(){
    localStorage.setItem('name',$('#name').val());
    $("#name_save").attr('src','img/ikitai/ikitai_re_ok.jpg');

  $('#name_save').on("dblclick", function(){
    localStorage.removeItem('name');
    $("#name_save").attr('src','img/ikitai/ikitai_re.jpg');
});
});
});
//文章info _ saveイベント
$(function(){
  if(localStorage.getItem('info')){
    $('#info').val(localStorage.getItem('info'));}

  $('#info_save').click(function(){
    localStorage.setItem('info',$('#info').val());
    $("#info_save").attr('src','img/ikitai/itta_re_ok.jpg');

  $('#info_save').on("dblclick", function(){
    localStorage.removeItem('info');
    $("#info_save").attr('src','img/ikitai/itta_re.jpg');
});
});
});


//以下に続く。
$(function(){
  if(localStorage.getItem('name2')){
  $('#name2').val(localStorage.getItem('name2'));}

  $('#name_save2').click(function(){
    localStorage.setItem('name2',$('#name2').val());
    $("#name_save2").attr('src','img/ikitai/ikitai_re_ok.jpg');

  $('#name_save2').on("dblclick", function(){
    localStorage.removeItem('name2');
    $("#name_save2").attr('src','img/ikitai/ikitai_re.jpg');
});
});
});
$(function(){
  if(localStorage.getItem('info2')){
    $('#info2').val(localStorage.getItem('info2'));}

  $('#info_save2').click(function(){
    localStorage.setItem('info2',$('#info2').val());
    $("#info_save2").attr('src','img/ikitai/itta_re_ok.jpg');

  $('#info_save2').on("dblclick", function(){
    localStorage.removeItem('info2');
    $("#info_save2").attr('src','img/ikitai/itta_re.jpg');
});
});
});

//以下に続く３。
$(function(){
  if(localStorage.getItem('name3')){
  $('#name3').val(localStorage.getItem('name3'));}

  $('#name_save3').click(function(){
    localStorage.setItem('name3',$('#name3').val());
    $("#name_save3").attr('src','img/ikitai/ikitai_re_ok.jpg');

  $('#name_save3').on("dblclick", function(){
    localStorage.removeItem('name3');
    $("#name_save3").attr('src','img/ikitai/ikitai_re.jpg');
});
});
});
$(function(){
  if(localStorage.getItem('info3')){
    $('#info3').val(localStorage.getItem('info3'));}

  $('#info_save3').click(function(){
    localStorage.setItem('info3',$('#info3').val());
    $("#info_save3").attr('src','img/ikitai/itta_re_ok.jpg');

  $('#info_save3').on("dblclick", function(){
    localStorage.removeItem('info3');
    $("#info_save3").attr('src','img/ikitai/itta_re.jpg');
});
});
});