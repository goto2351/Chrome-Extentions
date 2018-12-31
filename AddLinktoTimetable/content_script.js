window.onload = function() {
    chrome.tabs.query({active: true, lastFocusWindow: true}, function(tabs){
        //kulasisのヘッダー部分を指定
        const div = document.getElementById("header");
        //リンクを作成
        const a1 = document.createElement("a");
        //属性を設定
        a1.href = "https://www.k.kyoto-u.ac.jp/student/la/entry/kouki";
        a1.target = "_blank";
        a1.innerText = "時間割(後期)はこちら";
        //ヘッダーにリンクを追加
        div.appendChild(a1);
    });
    
};