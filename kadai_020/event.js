// ボタンとメッセージの要素を取得
const messageElement = document.getElementById('text');
const buttonElement = document.getElementById('btn');

// ボタンがクリックされたときのイベントを設定
buttonElement.addEventListener('click', () => {
    messageElement.textContent = 'ボタンがクリックされました！';
});