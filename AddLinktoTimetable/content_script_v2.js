//kulasisのヘッダー部分を指定
const div = document.getElementById("header");
//リンクを作成
var a1 = document.createElement("a");
//属性を設定
a1.href = "https://www.k.kyoto-u.ac.jp/student/la/entry/kouki";
a1.target = "_blank";
a1.innerText = "時間割(後期)はこちら";
//位置を指定
a1.style.positon = "absolute";
a1.style.left = 100 + "px";
a1.style.top = 100 + "px";
//ヘッダーにリンクを追加
div.appendChild(a1);