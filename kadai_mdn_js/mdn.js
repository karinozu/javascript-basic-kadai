// 現在の日付を取得
const now = new Date();

// 年、月、日をそれぞれ取得
const year = now.getFullYear();
const month = now.getMonth() + 1; 
const day = now.getDate();

// 日付を文字列としてフォーマット
const formattedDate = `${year}年${month}月${day}日`;

// コンソールに出力
console.log(formattedDate);