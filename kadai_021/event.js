//ボタンとテキストの要素の取得
const btn = document.getElementById('btn');
const text = document.getElementById('text');

//ボタンがクリックされたときに実行するイベントリスナーを追加
btn.addEventListener('click', () => {

// 2秒後にテキストの内容を変更する処理
setTimeout(() => {
    text.textContent = "ボタンをクリックしました";
}, 2000);
});


