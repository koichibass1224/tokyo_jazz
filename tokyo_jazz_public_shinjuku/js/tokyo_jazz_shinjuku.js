function s_ikitai_check(playerSelect){
  var playerSelect ;
  //$("#ikitai1").get(0).play() ;

  //いきたいは「１」
  if (playerSelect == 1) {
    s_1 = 1;
    localStorage.setItem('s_1' , s_1);
    $("#ikitai1").attr('src','img/ikitai/ikitai_ok.jpg');
} else if(playerSelect == 2) {
      s_2 = 1;
      localStorage.setItem('s_2' , s_2);
    $("#ikitai2").attr('src','img/ikitai/ikitai_ok.jpg');
    } else if (playerSelect == 3) {
      s_3 = 1;
      localStorage.setItem('s_3' , s_3);
      $("#ikitai3").attr('src','img/ikitai/ikitai_ok.jpg');
    } else if (playerSelect == 4) {
      s_4 = 1;
      localStorage.setItem('s_4' , s_4);
      $("#ikitai4").attr('src','img/ikitai/ikitai_ok.jpg');
    } else if (playerSelect == 5) {
      s_5 = 1;
      localStorage.setItem('s_5' , s_5);
      $("#ikitai5").attr('src','img/ikitai/ikitai_ok.jpg');
    } else if (playerSelect == 6) {
      s_6 = 1;
      localStorage.setItem('s_6' , s_6);
      $("#ikitai6").attr('src','img/ikitai/ikitai_ok.jpg');
    } else if (playerSelect == 7) {
      s_7 = 1;
      localStorage.setItem('s_7' , s_7);
      $("#ikitai7").attr('src','img/ikitai/ikitai_ok.jpg');
    } else if (playerSelect == 8) {
      s_8 = 1;
      localStorage.setItem('s_8' , s_8);
      $("#ikitai8").attr('src','img/ikitai/ikitai_ok.jpg');
    } else if (playerSelect == 9) {
      s_9 = 1;
      localStorage.setItem('s_9' , s_9);
      $("#ikitai9").attr('src','img/ikitai/ikitai_ok.jpg');
    } else {
    }
    //console.log(playerSelect);　チェック用
}

$("#ikitai1").on("dblclick", function () {
  $("#ikitai1").attr('src','img/ikitai/ikitai.jpg');
  localStorage.removeItem('s_1' , s_1);
});
$("#ikitai2").on("dblclick", function () {
  $("#ikitai2").attr('src','img/ikitai/ikitai.jpg');
  localStorage.removeItem('s_2' , s_2);
});
$("#ikitai3").on("dblclick", function () {
  $("#ikitai3").attr('src','img/ikitai/ikitai.jpg');
  localStorage.removeItem('s_3' , s_3);
});
$("#ikitai4").on("dblclick", function () {
  $("#ikitai4").attr('src','img/ikitai/ikitai.jpg');
  localStorage.removeItem('s_4' , s_4);
});
$("#ikitai5").on("dblclick", function () {
  $("#ikitai5").attr('src','img/ikitai/ikitai.jpg');
  localStorage.removeItem('s_5' , s_5);
});
$("#ikitai6").on("dblclick", function () {
  $("#ikitai6").attr('src','img/ikitai/ikitai.jpg');
  localStorage.removeItem('s_6' , s_6);
});
$("#ikitai7").on("dblclick", function () {
  $("#ikitai7").attr('src','img/ikitai/ikitai.jpg');
  localStorage.removeItem('s_7' , s_7);
});
$("#ikitai8").on("dblclick", function () {
  $("#ikitai8").attr('src','img/ikitai/ikitai.jpg');
  localStorage.removeItem('s_8' , s_8);
});
$("#ikitai9").on("dblclick", function () {
  $("#ikitai9").attr('src','img/ikitai/ikitai.jpg');
  localStorage.removeItem('s_9' , s_9);
});





//イッタ：チェックリスト
function s_itta_check(playerSelect){
  var playerSelect ;

  if (playerSelect == 1) {
    sitta_1 = 1;
    localStorage.setItem('sitta_1' , sitta_1);
    $("#itta1").attr('src','img/ikitai/itta_ok.jpg');
} else if(playerSelect == 2) {
      sitta_2 = 1;
      localStorage.setItem('sitta_2' , sitta_2);
    $("#itta2").attr('src','img/ikitai/itta_ok.jpg');
    } else if (playerSelect == 3) {
      sitta_3 = 1;
      localStorage.setItem('sitta_3' , sitta_3);
      $("#itta3").attr('src','img/ikitai/itta_ok.jpg');
    } else if (playerSelect == 4) {
      sitta_4 = 1;
      localStorage.setItem('sitta_4' , sitta_4);
      $("#itta4").attr('src','img/ikitai/itta_ok.jpg');
    } else if (playerSelect == 5) {
      sitta_5 = 1;
      localStorage.setItem('sitta_5' , sitta_5);
      $("#itta5").attr('src','img/ikitai/itta_ok.jpg');
    } else if (playerSelect == 6) {
      sitta_6 = 1;
      localStorage.setItem('sitta_6' , sitta_6);
      $("#itta6").attr('src','img/ikitai/itta_ok.jpg');
    } else if (playerSelect == 7) {
      sitta_7 = 1;
      localStorage.setItem('sitta_7' , sitta_7);
      $("#itta7").attr('src','img/ikitai/itta_ok.jpg');
    } else if (playerSelect == 8) {
      sitta_8 = 1;
      localStorage.setItem('sitta_8' , sitta_8);
      $("#itta8").attr('src','img/ikitai/itta_ok.jpg');
    } else if (playerSelect == 9) {
      sitta_9 = 1;
      localStorage.setItem('sitta_9' , sitta_9);
      $("#itta9").attr('src','img/ikitai/itta_ok.jpg');
    } else {
    }
    //console.log(playerSelect);
}

$("#itta1").on("dblclick", function () {
  $("#itta1").attr('src','img/ikitai/itta.jpg');
  localStorage.removeItem('sitta_1' , sitta_1);
});
$("#itta2").on("dblclick", function () {
  $("#itta2").attr('src','img/ikitai/itta.jpg');
  localStorage.removeItem('sitta_2' , sitta_2);
});
$("#itta3").on("dblclick", function () {
  $("#itta3").attr('src','img/ikitai/itta.jpg');
  localStorage.removeItem('sitta_3' , sitta_3);
});
$("#itta4").on("dblclick", function () {
  $("#itta4").attr('src','img/ikitai/itta.jpg');
  localStorage.removeItem('sitta_4' , sitta_4);
});
$("#itta5").on("dblclick", function () {
  $("#itta5").attr('src','img/ikitai/itta.jpg');
  localStorage.removeItem('sitta_5' , sitta_5);
});
$("#itta6").on("dblclick", function () {
  $("#itta6").attr('src','img/ikitai/itta.jpg');
  localStorage.removeItem('sitta_6' , sitta_6);
});
$("#itta7").on("dblclick", function () {
  $("#itta7").attr('src','img/ikitai/itta.jpg');
  localStorage.removeItem('sitta_7' , sitta_7);
});
$("#itta8").on("dblclick", function () {
  $("#itta8").attr('src','img/ikitai/itta.jpg');
  localStorage.removeItem('sitta_8' , sitta_8);
});
$("#itta9").on("dblclick", function () {
  $("#itta9").attr('src','img/ikitai/itta.jpg');
  localStorage.removeItem('sitta_9' , sitta_9);
});


$("#get").on('click', function () {
  /*for(let i=0; i<localStorage.length; i++){
    const key   = localStorage.key(i);
    const value = localStorage.getItem(key);
   $("#score").append(value+"<br>");*/
  let s_1 = localStorage.getItem("s_1");
  if (s_1 == 1) {
    $("#ikitai1").attr('src','img/ikitai/ikitai_ok.jpg');}
  let s_2 = localStorage.getItem("s_2");
  if (s_2 == 1) {
    $("#ikitai2").attr('src','img/ikitai/ikitai_ok.jpg');}
  let s_3 = localStorage.getItem("s_3");
  if (s_3 == 1) {
    $("#ikitai3").attr('src','img/ikitai/ikitai_ok.jpg');}
  let s_4 = localStorage.getItem("s_4");
  if (s_4 == 1) {
    $("#ikitai4").attr('src','img/ikitai/ikitai_ok.jpg');}
  let s_5 = localStorage.getItem("s_5");
  if (s_5 == 1) {
    $("#ikitai5").attr('src','img/ikitai/ikitai_ok.jpg');}
  let s_6 = localStorage.getItem("s_6");
  if (s_6 == 1) {
    $("#ikitai6").attr('src','img/ikitai/ikitai_ok.jpg');}
  let s_7 = localStorage.getItem("s_7");
  if (s_7 == 1) {
    $("#ikitai7").attr('src','img/ikitai/ikitai_ok.jpg');}
  let s_8 = localStorage.getItem("s_8");
  if (s_8 == 1) {
    $("#ikitai8").attr('src','img/ikitai/ikitai_ok.jpg');}
  if (s_9 == 1) {
    $("#ikitai9").attr('src','img/ikitai/ikitai_ok.jpg');}
$("#score").append(localStorage.length + '店舗');

if (s_1 == 1  && s_2 == 1  && s_3 == 1  && s_4 == 1 && s_5 == 1  && s_6 == 1  && s_7 == 1  && s_8 == 1 ){
  alert('全店舗制覇しました！');
  $("#s_9").removeClass('behind');
  $("#s_9_store").removeClass('behind');}
});


$("#reset").on('click', function () {
  localStorage.clear();
  alert('記録を全てリセットしました！');
  $("#").removeClass('behind');
});
